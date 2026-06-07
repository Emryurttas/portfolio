import { useState } from "react";
import "./styles/base.css";
import "./styles/theme.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import ChatMCPModal from "./components/ChatMCPModal";

import project1 from "./images/sumo_cat.png";
import project2 from "./images/appcalcul.png";
import project3 from "./images/calculateur_emprunt.png";
import project4 from "./images/chatmcp.png";

function App() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") !== "light"
  );
  const [showChatModal, setShowChatModal] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      localStorage.setItem("theme", !prev ? "dark" : "light");
      return !prev;
    });
  };

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main>
        <section id="projects">
          <h2 className="section-title">Mes Projets</h2>

          <div className="projects-container">
            <ProjectCard
              title="Sumo Cats"
              description="Jeu de combat de chats"
              image={project1}
              url="https://emryurttas.github.io/SumoCats-pages/"
            />
            <ProjectCard
              title="App Calcul"
              description="Application de calcul mentale réalisée avec Flutter"
              image={project2}
              url="https://emryurttas.github.io/appcalcul_demo/"
              iconStyle={true}
            />
            <ProjectCard
              title="Calculateur d'Intérêts"
              description="Calculateur d'intérêts pour emprunts"
              image={project3}
              url="https://emryurttas.github.io/calcul_interet_emprunt/"
              iconStyle={true}
              largeImage={true}
            />
            <ProjectCard
              title="ChatMCP"
              description="Chatbot IA avec support MCP"
              image={project4}
              onClick={() => setShowChatModal(true)}
              chatPreview={true}
            />
          </div>
        </section>
      </main>

      {showChatModal && (
        <ChatMCPModal onClose={() => setShowChatModal(false)} />
      )}

      <Footer />
    </div>
  );
}

export default App;