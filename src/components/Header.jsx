import DarkModeToggle from "./DarkModeToggle";
import "../styles/header.css";
import "../styles/toggle.css";

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="header">
      <h1 className="logo">Emre Yurttas</h1>

      <nav className="nav">
        <a href="#">Accueil</a>
        <a href="#projects">Projets</a>
        <a href="#contact">Contact</a>

        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </nav>
    </header>
  );
}

export default Header;