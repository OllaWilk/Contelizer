import { useSearchParams } from 'react-router-dom';

export function usePaginationParams(defaultPage = 1) {
  const [params, setParams] = useSearchParams();
  const page = Math.max(defaultPage, Number(params.get('page') || defaultPage));

  const setPage = (next: number) => {
    setParams((prev) => {
      const p = new URLSearchParams(prev);
      p.set('page', String(next));
      return p;
    });
  };

  return { page, setPage };
}
