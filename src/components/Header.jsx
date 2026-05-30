import DarkModeToggle from "./DarkModeToggle";
import "../styles/header.css";
import "../styles/toggle.css";

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="header">
      <h1 className="logo">Emre Yurttas</h1>

      <nav className="nav">
        <a
          href="/portfolio/cv_emre_yurttas.pdf"
          download
          className="cv-button"
        >
          Télécharger mon CV
        </a>

        <DarkModeToggle
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </nav>
    </header>
  );
}

export default Header;