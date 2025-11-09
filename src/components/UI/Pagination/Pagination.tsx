import { useCallback, useMemo } from 'react';
import styles from './Pagination.module.scss';

type Props = {
  total: number;
  pageSize: number;
  page: number;
  onChange: (next: number) => void;
};

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));

export const Pagination = ({ total, pageSize, page, onChange }: Props) => {
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  if (pageCount <= 1) return null;

  const go = useCallback(
    (next: number) => onChange(clamp(next, 1, pageCount)),
    [onChange, pageCount]
  );

  const pages = useMemo(() => Array.from({ length: pageCount }, (_, i) => i + 1), [pageCount]);
 
  return (
    <nav aria-label="Pagination" className={styles.pagination}>
      <button disabled={page === 1} onClick={() => go(page - 1)}>
        Prev
      </button>
      {pages.map((p) => (
        <button
          key={p}
          aria-current={p === page ? 'page' : undefined}
          className={p === page ? 'active' : ''}
          onClick={() => go(p)}
        >
          {p}
        </button>
      ))}
      <button disabled={page === pageCount} onClick={() => go(page + 1)}>
        Next
      </button>
    </nav>
  );
};
