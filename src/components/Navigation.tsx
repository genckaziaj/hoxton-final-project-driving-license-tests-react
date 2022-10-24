import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid px-md-4 px-0">
        <div className="navigation-header">
          <Link to="/" className="navigation-brand">
            <img src="../assets/logo-dpshtrr.png" />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-collapsed"
          aria-controls="navbar-collapsed"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className="collapse navbar-collapse flex-grow-0 border-top"
          id="navbar-collapsed"
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#">Gjenero test</a>
            </li>
            <li>
              <a href="#">Teste te gatshme</a>
            </li>
            <li>
              <a href="#">Pyetje te rastit</a>
            </li>
            <li>
              <a href="#">Hyr</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
