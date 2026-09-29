import { Suspense } from 'react';
import HouseLanding from './house/house_landing';

export default function WelcomePage() {
  return (
    <Suspense fallback={null}>
      <HouseLanding />
    </Suspense>
  );
}
