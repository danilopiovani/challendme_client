import { useEffect, useState } from 'react';
export function useHasHydrated() {
  const [hasHydrated, setHasHydrated] = useState();

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  return {
    hasHydrated
  };
}
