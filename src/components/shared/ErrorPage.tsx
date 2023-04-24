import { useRouteError, Link } from 'react-router-dom';

export function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1>😵</h1>
      <p>Route not found or an unexpected error occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
      <Link to='/'>🏠 Go home </Link>
    </div>
  );
}