function ProjectCard({ title, description, image, url, iconStyle }) {
  return (
    <a href={url} target="_blank" className="project-card">
      <img src={image} alt={title} className={iconStyle ? "icon-preview" : ""} />

      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default ProjectCard;