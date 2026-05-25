function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="header">
      <h1 className="logo">Emre Yurttas</h1>

      <nav className="nav">
        <a href="#">Accueil</a>
        <a href="#projects">Projets</a>
        <a href="#contact">Contact</a>

        <div className="toggle-bar" onClick={toggleDarkMode}>
          <span className="toggle-icon"></span>
          <div className={`toggle-thumb ${darkMode ? "right" : "left"}`} />
          <span className="toggle-icon"></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;