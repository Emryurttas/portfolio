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
            <li>&#9888;&#65039; Les admins accèdent à toutes les fonctionnalités</li>
            <li>&#8505;&#65039; Les comptes user1 à user11 sont vérifiés</li>
            <li>&#10060; unverified1-4@example.com sont non vérifiés</li>
          </ul>
        </div>

        <div className="modal-actions">
          <a
            href="https://symfony-for-sale.onrender.com/advertisement"
            target="_blank"
            rel="noopener noreferrer"
            className="modal-btn-primary"
          >
            Accéder au projet &#8594;
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