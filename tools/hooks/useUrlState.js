import { useRouter } from 'next/router';

export function useUrlState() {
  const router = useRouter();
  const urlState = router.query;
  const setUrlState = (state, pathname = router.pathname) => {
    const params = new URLSearchParams();
    Object.entries(state).map(([key, value]) => {
      params.set(key, value);
    });
    router.replace(`${pathname}?${params.toString()}`, undefined, {
      shallow: true
    });
  };

  const updateUrl = (urlStateToApply) => {
    setUrlState({
      ...router.query,
      ...urlStateToApply
    });
  };

  return { urlState, setUrlState, updateUrl };
}
