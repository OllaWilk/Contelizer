import { useParams } from 'react-router-dom';
import type { CocktailIdParam } from '../../types/cocktails-types';
import {
  IngredientsList,
  DetailsMedia,
  DetailsMeta,
  DetailsSection,
  LoadingIndicator,
  ErrorBlock,
} from '../../components';
import styles from './CoctailDetails.module.scss';
import { useCocktailQueryById } from '../../utils/useUserssQuery';

export const CocktailDetails = () => {
  const cocktailId: CocktailIdParam = Number(useParams().coctailId);
  const { data: cocktail, isLoading, error, isFetching } = useCocktailQueryById(cocktailId);

  if (!cocktail || !Number.isFinite(cocktailId) || cocktailId <= 0)
    return (
      <ErrorBlock
        title="An error occurred"
        message={'Sorry coctail you are looking for does not exist.'}
      />
    );
  if (isLoading) return <LoadingIndicator />;

  if (error instanceof Error) return <p>{error.message}</p>;

  const { name, imageUrl, category, alcoholic, glass, instructions, ingredients } = cocktail;

  return (
    <article className={styles.details}>
      <header className={styles.header}>
        <DetailsMedia name={name} imageUrl={imageUrl} />
        <DetailsMeta
          name={name}
          category={category}
          alcoholic={alcoholic}
          glass={glass || null}
          isFetching={isFetching}
        />
      </header>
      {instructions && (
        <DetailsSection title="Instructions">
          <p>{instructions}</p>
        </DetailsSection>
      )}
      {ingredients?.length && (
        <DetailsSection title="Ingredients">
          <IngredientsList ingredients={ingredients} />
        </DetailsSection>
      )}
    </article>
  );
};
