import React, { useState } from 'react'

import SelectedProject from './SelectedProject'

const Projects = () => {

  const projects = [
    {
      id: 0,
      name: 'FITBOOK',
      task: 'Build a full-stack application with your own custom built Python Django API with your database to served on PostgreSQL. Build your front-end using React. The API must include CRUD functionality and be deployed online. This should be completed in one week.',
      techused: ['Git ', 'Github ', 'HTML ', 'Django ', 'React.js ', 'Heroku ', 'PostgreSQL ', 'Bulma ', 'SCSS ', 'Django REST Framework ', 'JWT ', 'Python ', 'Axios ', 'Moment ', 'Babel ', 'Webpack '],
      description: 'Inspired by our love of going to fitness classes, my partner and I decided for our final project at GA to create an app for like-minded individuals to view and book fitness classes in their local borough. Our brief was to create a fullstack application using PostgreSQL, Python and Django - all VERY new languages and processes for us both. Our frontend was to built using React and implement using React Hooks. We approached the backend together to ensure our API would populate information correctly. The app was also designed to be mobile first to ensure responsiveness.',
      image: 'https://i.imgur.com/ZR6Pi6S.png',
      github: 'https://github.com/annie-kayal/project-4',
      deployedProject: 'https://fitbook-project.herokuapp.com/#/'
    },
    {
      id: 1,
      name: 'KAP',
      task: 'Work collaboratively as a group using git to code. Build a Express API where Mongo will be the database and display this in a React front-end. The product should have CRUD functionality where models hold relationships. This should be completed in 9 days.',
      techused: ['Express', 'Mongo', 'Mongoose', 'React.js', 'JavaScript', 'Heroku', 'Bulma', 'SCSS', 'Body-parser', 'Axios', 'Bcrypt', 'GSAP', 'Mongoose-Hidden', 'Mongoose-Unique-Validator', 'Webpack', 'Babel', 'JWT'],
      description: ['As a group, we were conscious of creating something relevant. With lockdown due to COVID-19 having recently been announced, we decided to build a website for users on how to fill their time at home.',
        ' This was the first project that tackled creating a backend in addition to a React frontend.',
        ' Our data was stored into MongoDB and using Mongoose, we were able to communicate with our database.',
        'Users have the ability to browse the website freely but are required to have an account if they wish to contribute to the database, follow other users or favourite activities.'],
      image: 'https://i.imgur.com/sa5lNFf.jpg',
      github: 'https://github.com/annie-kayal/project-3',
      deployedProject: 'https://annie-kayal-project-3.herokuapp.com/'
    },
    {
      id: 2,
      name: 'HARRY POTTER: ALL YOU NEED TO KNOW',
      task: 'In 48 hours consume a public API and built a multi-page React front-end. The app should have several components and include a router.',
      techused: ['React.js', 'Bulma', 'HTML', 'Insomnia', 'CSS', 'Axios', 'JavaScript', 'Git', 'Github', 'Google Fonts'],
      description: ['Tasked to produce a multi-page React front-end in 48 hours using a public API, this was a time sensitive project.',
        ' This used a pair programming approach, which was the first time working with another developer.',
        ' My partner and I loved the Harry Potter franchise growing up, so this project sat very close to the heart for both of us.',
        ' Using the API, we created an encyclopedia of the franchise where users can be sorted into a house at Hogwarts and browse through the characters, houses and spells in the series.'],
      image: 'https://i.imgur.com/EqWWQii.png',
      github: 'https://github.com/annie-kayal/project-2',
      deployedProject: 'https://annie-kayal.github.io/project-2/'
    },
    {
      id: 3,
      name: 'STOP, THINK & GO!',
      task: 'Independently render a grid based game in the browser where there winning and scoring is available in a one week period. The obstacles should be autogenerared and the structure should have seperate HTML/CSS/JavaScript files. At least one player should be able to play.',
      techused: ['HTML', 'CSS', 'JavaScript'],
      description: ['Using the fundamentals of web development, my first project at GA was to create a grid-based game using HTML, CSS and Vanilla JavaScript.', 'The game was based on Frogger, where the aim was to help guide a family of frogs home and avoid moving obstacles.'],
      image: 'https://i.imgur.com/EyjrSWJ.png',
      github: 'https://github.com/annie-kayal/Stop-Think-Go',
      deployedProject: 'https://annie-kayal.github.io/Stop-Think-Go/'
    }
  ]

  const [selectedProject, setProject] = useState({ id: null, name: '', image: '', description: [], techused: [], task: '', github: '', deployedProject: '' })

  function viewMore(e) {
    projects.map(project => {
      const id = parseInt(e.target.id)
      if (project.id === id) {
        setProject({ id: project.id, name: project.name, image: project.image, description: project.description, techused: project.techused, task: project.task, github: project.github, deployedProject: project.deployedProject })
      }
    })
  }

  return <section className='projects'>
    <div className="project-container">
      {selectedProject.name === '' ?
        <div className="no-project">
          <h2>Click on a project to view more</h2>
          <div className="icon">
            <i className="fas fa-arrow-down"></i>
          </div>
        </div>
        :
        <SelectedProject
          selectedProject={selectedProject}
        />
      }

    </div>
    <div className="project-list">
      {projects.map(project => {
        return <div onClick={(e) => viewMore(e)} id={project.id} key={project.id} className="project">
          <h3 id={project.id} onClick={(e) => viewMore(e)}>{project.name}</h3>
        </div>
      })}
    </div>
  </section>
}

export default Projects