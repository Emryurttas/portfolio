import "../styles/toggle.css";

export default function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button
      className={`toggle-btn ${darkMode ? "dark" : "light"}`}
      onClick={toggleDarkMode}
      aria-label="Basculer mode sombre/clair"
    >
      <div className="toggle-thumb">
        <span className="icon-moon">🌙</span>
        <span className="icon-sun">☀️</span>
      </div>
    </button>
  );
}