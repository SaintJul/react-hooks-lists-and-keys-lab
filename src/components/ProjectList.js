import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const projectItems = projects.map((info) =>{
    return(
      <ProjectItem
        name = {info.name}
        key = {info.id}
        about = {info.about}
        technologies = {info.technologies}
      
      />
    )
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectItems}</div>
    </div>
  );
}

export default ProjectList;
