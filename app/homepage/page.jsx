import { Suspense } from 'react';
import HouseLanding from '../house/house_landing';

export default function HomepagePage() {
  return (
    <Suspense fallback={null}>
      <HouseLanding />
    </Suspense>
  );
}
