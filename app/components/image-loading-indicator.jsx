'use client';

import { useEffect } from 'react';

export default function ImageLoadingIndicator() {
  useEffect(() => {
    const images = new Map();
    let frame = null;

    const updateIndicators = () => {
      frame = null;
      for (const [image, entry] of images) {
        if (!entry.indicator) continue;
        const bounds = image.getBoundingClientRect();
        const centerX = (Math.max(0, bounds.left) + Math.min(window.innerWidth, bounds.right)) / 2;
        const centerY = (Math.max(0, bounds.top) + Math.min(window.innerHeight, bounds.bottom)) / 2;
        const visibleElement = document.elementFromPoint(centerX, centerY);
        const visible = image.isConnected && bounds.width > 0 && bounds.height > 0 &&
          visibleElement && (visibleElement === image || visibleElement.contains(image));
        entry.indicator.hidden = !visible;
        if (visible) {
          entry.indicator.style.left = `${centerX}px`;
          entry.indicator.style.top = `${centerY}px`;
        }
      }
      if ([...images.values()].some((entry) => entry.indicator)) {
        frame = requestAnimationFrame(updateIndicators);
      }
    };

    const clearIndicator = (entry) => {
      clearTimeout(entry.timer);
      entry.timer = null;
      entry.indicator?.remove();
      entry.indicator = null;
    };

    const scheduleIndicator = (image, entry) => {
      if (!entry.visible || image.complete || !image.getAttribute('src') || entry.timer || entry.indicator) return;
      entry.timer = setTimeout(() => {
        entry.timer = null;
        if (!entry.visible || image.complete || !image.isConnected) return;
        const indicator = document.createElement('span');
        indicator.className = 'global-image-loader';
        indicator.setAttribute('aria-hidden', 'true');
        document.body.appendChild(indicator);
        entry.indicator = indicator;
        if (frame === null) frame = requestAnimationFrame(updateIndicators);
      }, 350);
    };

    const observer = new IntersectionObserver((entries) => {
      for (const intersection of entries) {
        const entry = images.get(intersection.target);
        if (!entry) continue;
        entry.visible = intersection.isIntersecting;
        if (entry.visible) scheduleIndicator(intersection.target, entry);
        else clearIndicator(entry);
      }
    });

    const trackImage = (image) => {
      if (images.has(image) || image.hasAttribute('data-gallery-loader')) return;
      const entry = { visible: false, timer: null, indicator: null };
      images.set(image, entry);
      observer.observe(image);
    };

    const handleImageResult = (event) => {
      const entry = images.get(event.target);
      if (entry) clearIndicator(entry);
    };

    const mutations = new MutationObserver((records) => {
      for (const record of records) {
        if (record.type === 'attributes') {
          const entry = images.get(record.target);
          if (entry) {
            clearIndicator(entry);
            scheduleIndicator(record.target, entry);
          }
          continue;
        }
        for (const node of record.addedNodes) {
          if (node.nodeType !== Node.ELEMENT_NODE) continue;
          if (node.tagName === 'IMG') trackImage(node);
          node.querySelectorAll('img').forEach(trackImage);
        }
      }
      for (const [image, entry] of images) {
        if (image.isConnected) continue;
        clearIndicator(entry);
        observer.unobserve(image);
        images.delete(image);
      }
    });

    document.querySelectorAll('img').forEach(trackImage);
    document.addEventListener('load', handleImageResult, true);
    document.addEventListener('error', handleImageResult, true);
    mutations.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['src', 'srcset'] });

    return () => {
      mutations.disconnect();
      observer.disconnect();
      document.removeEventListener('load', handleImageResult, true);
      document.removeEventListener('error', handleImageResult, true);
      if (frame !== null) cancelAnimationFrame(frame);
      images.forEach(clearIndicator);
    };
  }, []);

  return null;
}