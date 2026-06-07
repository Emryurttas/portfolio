import "../styles/projects.css";

function ProjectCard({ title, description, image, url, iconStyle, largeImage, onClick, chatPreview }) {
  if (onClick) {
    return (
      <div className="project-card" onClick={onClick} style={{ cursor: "pointer" }}>
        <img
          src={image}
          alt={title}
          className={
            iconStyle ? "icon-preview" :
            largeImage ? "large-preview" :
            chatPreview ? "chat-preview" : ""
          }
        />
        <div className="project-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }

  return (
    <a href={url} target="_blank" className="project-card">
      <img
        src={image}
        alt={title}
        className={
          iconStyle ? "icon-preview" :
          largeImage ? "large-preview" :
          chatPreview ? "chat-preview" : ""
        }
      />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default ProjectCard;