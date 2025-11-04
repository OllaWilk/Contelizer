import { Link, useRouteError } from 'react-router-dom';

export const NotFound = () => {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <div>
      <h1>404 – Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={{ color: 'orange' }}>
        Go back to home
      </Link>
    </div>
  );
};
