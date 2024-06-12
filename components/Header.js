import { useRouter } from 'next/router';

export default function Header({ title }) {
  const router = useRouter();
  const { pathname } = router;

  return (
    <header>
      <center><p>This entire platform is in its early stages. This means that you might find more errors.</p></center>
      <nav className="navbar">
        <ul className="nav-list">
          <li className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
            <a href="/">Home</a>
          </li>
          <li className={`nav-item ${pathname === '/auth' ? 'active' : ''}`}>
            <a href="/auth">Sign in or Log in</a>
          </li>
        </ul>
      </nav>
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
      `}</style>
    </header>
  );
}