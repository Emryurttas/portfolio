function ChatMCPModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &#x2715;
        </button>

        <h2>ChatMCP</h2>

        <p className="modal-subtitle">
          Chatbot IA avec streaming et outils MCP
        </p>

        <p style={{ fontSize: "0.8rem", opacity: 0.6, marginTop: "0.25rem" }}>
          Le backend est hébergé sur Render en mode gratuit, il peut nécessiter quelques secondes de démarrage.
        </p>

        <div className="modal-section">
          <h3>À propos</h3>
          <p>
            Application de chat propulsée par Gemini 2.5 Flash, avec support du
            protocole MCP et mode streaming token par token.
          </p>
        </div>

        <div className="modal-section">
          <h3>Connexion</h3>

          <div className="modal-credentials">
            <div>
              <span className="label">Utilisateur 1</span>
              <code>lisa</code>
              <span className="label-sep"> / </span>
              <code>azerty</code>
            </div>

            <div>
              <span className="label">Utilisateur 2</span>
              <code>ned</code>
              <span className="label-sep"> / </span>
              <code>qsdfgh</code>
            </div>
          </div>
        </div>

        <div className="modal-section">
          <h3>Limitations</h3>
          <ul>
            <li>⚠️ 20 requêtes par jour (quota Gemini gratuit)</li>
          </ul>
        </div>

        <div className="modal-actions">
          <a
            href="https://chatmcp-5evu.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="modal-btn-primary"
          >
            Accéder au projet →
          </a>

          <button className="modal-btn-secondary" onClick={onClose}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatMCPModal;