import React from 'react'

const SelectedProject = ({ selectedProject }) => {
  console.log(name)
  return <div className="selected-project">
    <h1>{selectedProject.name}</h1>
    <div className="tech">
      <h5>TECH USED:</h5>
      <div className="skills">
        {selectedProject.techused.map((skill, key) => {
          return <p key={key}>{skill}</p>
        })}
      </div>
    </div>
    <div className="project-description">
      <img src={selectedProject.image} />
      <p>{selectedProject.description}</p>
    </div>
  </div>

}

export default SelectedProject