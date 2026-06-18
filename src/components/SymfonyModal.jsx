function SymfonyModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &#x2715;
        </button>

        <h2>Symfony For Sale</h2>

        <p className="modal-subtitle">
          Plateforme de petites annonces développée avec Symfony
        </p>

        <p style={{ fontSize: "0.8rem", opacity: 0.6, marginTop: "0.25rem" }}>
          Le backend est hébergé sur Render en mode gratuit, il peut nécessiter quelques secondes de démarrage.
        </p>

        <div className="modal-section">
          <h3>À propos</h3>
          <p>
            Permet aux utilisateurs de publier, consulter et gérer des annonces
            classées par catégories. La vérification par email a été désactivée
            pour les tests — tous les comptes sont immédiatement actifs après
            inscription.
          </p>
        </div>

        <div className="modal-section">
          <h3>Connexion</h3>

          <p style={{ fontSize: "0.85rem", marginBottom: "0.5rem" }}>
            Mot de passe universel : <code>test</code>
          </p>

          <div className="modal-credentials">
            <div>
              <span className="label">Admin 1</span>
              <code>admin@example.com</code>
            </div>

            <div>
              <span className="label">Admin 2</span>
              <code>admin2@example.com</code>
            </div>

            <div>
              <span className="label">Utilisateur</span>
              <code>user1@example.com</code>
            </div>
          </div>
        </div>

        <div className="modal-section">
          <h3>Notes</h3>
          <ul>
            <li>⚠️ Les admins accèdent à toutes les fonctionnalités</li>
            <li>ℹ️ Les comptes user1 à user11 sont vérifiés</li>
            <li>❌ unverified1-4@example.com sont non vérifiés</li>
          </ul>
        </div>

        <div className="modal-actions">
          <a
            href="https://symfony-for-sale-hl69.onrender.com/advertisement"
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

export default SymfonyModal;