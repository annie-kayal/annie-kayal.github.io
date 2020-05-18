import React from 'react'

const SelectedProject = ({ selectedProject }) => {
  return <div className="selected-project">
    <img src={selectedProject.image} />
    <div className="description">
      <h1>{selectedProject.name}</h1>
      <div className="skills">
        <h5>TECH USED:</h5>
        {selectedProject.techused.map((skill, key) => {
          return <p key={key}>{skill}</p>
        })}
      </div>

      <p>{selectedProject.description}</p>
    </div>

  </div>

}

export default SelectedProject