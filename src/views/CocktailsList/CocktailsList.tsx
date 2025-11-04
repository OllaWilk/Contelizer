import { CoctailCart, ErrorBlock, LoadingIndicator, Pagination } from '../../components';
import styles from './CocktailsList.module.scss';
import { usePaginationParams } from '../../utils/usePaginationParams';
import { useCocktailsQuery } from '../../utils/useUserssQuery';
import { Link } from 'react-router-dom';

const PAGE_SIZE = 12;

export const CocktailsList = () => {
  const { page, setPage } = usePaginationParams();
  const { data, isLoading, error } = useCocktailsQuery(500);

  if (isLoading) return <LoadingIndicator text="Loading coctails..." />;
  if (error instanceof Error)
    return <ErrorBlock title="An error occurred" message={'Failed to fetch events.'} />;

  const total = data?.length ?? 0;
  const pageCount = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const pageItems = data?.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE) ?? [];

  return (
    <div className={styles.cocktailsList}>
      <header className={styles.header}>
        <h2>Discover Your Next Favorite Cocktail</h2>
      </header>
      <Pagination
        total={total}
        pageSize={PAGE_SIZE}
        page={Math.min(page, pageCount)}
        onChange={setPage}
      />
      <ul className={styles.grid}>
        {pageItems.map((el) => (
          <li className={styles.item} key={el.id}>
            <Link to={`/cocktails/${el.id}`} className={styles.link}>
              <CoctailCart {...el} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
