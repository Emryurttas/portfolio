import "../styles/footer.css";
import { FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="socials">
        <a
          href="https://github.com/Emryurttas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={22} style={{ marginRight: "8px" }} />
          GitHub
        </a>

        <a href="mailto:yurttasemre566@gmail.com">
          <FaEnvelope size={22} style={{ marginRight: "8px" }} />
          Email
        </a>
      </div>

      <p className="copyright">
        © 2026 Emre Yurt. Tous droits réservés.
      </p>
    </footer>
  );
}

export default Footer;