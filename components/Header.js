import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Header({ title }) {
  const router = useRouter();
  const { pathname } = router;
  const { user, error, isLoading } = useUser();

  return (
    <header>
      <center>
        <p>This entire platform is in its early stages. This means that you might find more errors.</p>
      </center>
      <nav className="navbar">
        <ul className="nav-list">
          <li className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
            <a href="/">Home</a>
          </li>
          {isLoading ? (
            <li className="nav-item">
              <div className="loader"></div>
            </li>
          ) : user ? (
            <li className={`nav-item ${pathname === '/profile' ? 'active' : ''}`}>
              <a href="/api/auth/logout">Logout</a>
            </li>
          ) : (
            <li className={`nav-item ${pathname === '/auth' ? 'active' : ''}`}>
              <a href="/api/auth/login">Sign in or Log in</a>
            </li>
          )}
        </ul>
      </nav>
      {user && !isLoading && (
        <div className="welcome-message">
          <p>Welcome, {user.name}!</p>
        </div>
      )}
      <h1 className="header-title">{title}</h1>
      <style jsx>{`
        .header-title {
          color: #ebba34;
          font-size: 3rem;
          margin-bottom: 0;
          font-family: "VT323", monospace;
          font-weight: 400;
          font-size: 5em;
          font-style: normal;
          text-align: center;
        }
        .navbar {
          background-color: #333;
          overflow: hidden;
          border-radius: 20px;
        }
        .nav-list {
          list-style-type: none;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
        }
        .nav-item {
          margin: 0 1rem;
        }
        .nav-item a {
          display: block;
          color: white;
          text-align: center;
          padding: 14px 20px;
          text-decoration: none;
          font-family: "Inconsolata", monospace;
          font-size: 1.2rem;
        }
        .nav-item a:hover {
          background-color: #575757;
          color: #ebba34;
        }
        .nav-item.active a {
          background-color: #575757;
          color: #ebba34;
        }
        .welcome-message {
          text-align: center;
          color: #ebba34;
          font-family: "Inconsolata", monospace;
          margin-top: 1rem;
        }

        .loader {
          top: 15px;
        }
      `}</style>
    </header>
  );
}