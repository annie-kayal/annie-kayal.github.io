import React, { useState } from 'react'
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs'
import { Link } from 'react-router-dom'

import WIP from './WIP'
import Skills from './Skills'

const Projects = () => {


  const GAprojects = [
    {
      id: 0,
      name: 'Fitbook',
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
      name: 'Harry Potter',
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
      name: 'Stop, Think&Go!',
      task: 'Independently render a grid based game in the browser where there winning and scoring is available in a one week period. The obstacles should be autogenerared and the structure should have seperate HTML/CSS/JavaScript files. At least one player should be able to play.',
      techused: ['HTML', 'CSS', 'JavaScript'],
      description: ['Using the fundamentals of web development, my first project at GA was to create a grid-based game using HTML, CSS and Vanilla JavaScript.', 'The game was based on Frogger, where the aim was to help guide a family of frogs home and avoid moving obstacles.'],
      image: 'https://i.imgur.com/EyjrSWJ.png',
      github: 'https://github.com/annie-kayal/Stop-Think-Go',
      deployedProject: 'https://annie-kayal.github.io/Stop-Think-Go/'
    }
  ]

  const SideProjects = [
    {
      id: 0,
      name: 'Pokedex',
      inspiration: 'Striving on my refound love for Pokemon, I chose to challenge myself to build Ash\'s classic pokedex. This will be a full-stack project based on the original Pokemon series and will contain the first 151 pokemon.',
      techused: ['Express', 'Mongo', 'Mongoose', 'React.js', 'JavaScript', 'SCSS', 'Body-parser', 'Axios', 'Bcrypt', 'Mongoose-Hidden', 'Mongoose-Unique-Validator', 'Webpack', 'Babel', 'JWT'],
      image: 'https://www.pngkit.com/png/full/927-9277522_29-images-about-tv-pokemon-snorlax.png',
      github: 'https://github.com/annie-kayal/pokedex',
      deployedProject: ''
    }
  ]



  const [selectedProject, setProject] = useState({ id: null, name: '', image: '', description: [], techused: [], task: '', github: '', deployedProject: '' })
  const [modalOpen, ToggleModal] = useState(false)

  function viewMore(e) {
    GAprojects.map(project => {
      const id = e.target.id
      console.log(e.target.classID)
      // console.log(project.id)
      if (project.id === id) {
        setProject({ id: project.id, name: project.name, image: project.image, description: project.description, techused: project.techused, task: project.task, github: project.github, deployedProject: project.deployedProject })
      }
    })
  }
  function viewProjects(e) {
    SideProjects.map(project => {
      const id = e.target.id
      console.log(e.target.classID)
      // console.log(project.id)
      if (project.id === id) {
        setProject({ id: project.id, name: project.name, image: project.image, description: project.description, techused: project.techused, task: project.task, github: project.github, deployedProject: project.deployedProject })
      }
    })
  }

  function openModal(e) {
    ToggleModal(true)
  }

  return <section className='projects'>
    <Tabs>
      <TabList>
        <Tab>General Assembly Projects</Tab>
        <Tab>Side Projects</Tab>
      </TabList>
      <TabPanel>
        <Tabs>
          <TabList>
            {GAprojects.map(project => {
              return <Tab key={project.id} onClick={(e) => viewMore(e)}>
                {project.name}
              </Tab>
            })}
          </TabList>
          {GAprojects.map(project => {
            return <TabPanel key={project.id}>
              <div className="selected-project">
                <h1>{project.name}</h1>
                <img src={project.image} />
                <div className="project-notes">
                  <div className="description">
                    <div className="skills">
                      <h5>TECH STACK:</h5>
                      {project.techused.map((skill, key) => {
                        return <p key={key}>{skill}</p>
                      })}
                    </div>
                  </div>
                  <p>{project.description}</p>
                  <div className="project-links">
                    <div className="icon">
                      <a target='blank' href={project.deployedProject}><i className="fas fa-link"></i></a>
                    </div>
                    <div className="icon"><a target='blank' href={project.github}><i className="fab fa-github"></i></a></div>
                  </div>
                </div>
              </div>
            </TabPanel>
          })}
        </Tabs>
      </TabPanel>
      <TabPanel>
        <Tabs>
          <TabList>
            {SideProjects.map(project => {
              return <Tab key={project.id} onClick={(e) => viewProjects(e)}>
                {project.name}
              </Tab>
            })}
          </TabList>
          {SideProjects.map(project => {
            return <TabPanel key={project.id}>
              <div className="selected-project">
                <h1>{project.name}</h1>
                <img src={project.image} />
                <div className="project-notes">
                  <div className="description">
                    <div className="skills">
                      <h5>TECH STACK:</h5>
                      {project.techused.map((skill, key) => {
                        return <p key={key}>{skill}</p>
                      })}
                    </div>
                  </div>
                  <p>{project.inspiration}</p>
                  <div className="project-links">

                    {project.deployedProject === '' ?
                      <div className="icon" onClick={(e) => openModal(e)}>
                        <i className="fas fa-link"></i>
                      </div> :
                      <div className='icon'>
                        <a target='blank' href={project.deployedProject}><i className="fas fa-link"></i></a>
                      </div>
                    }
                    <div className="icon"><a target='blank' href={project.github}><i className="fab fa-github"></i></a></div>
                  </div>
                </div>
              </div>

            </TabPanel>
          })}
        </Tabs>
      </TabPanel>
    </Tabs>
    {modalOpen === true ? <WIP
      modalOpen={modalOpen}
      ToggleModal={ToggleModal}
    /> :
      null}
  </section>
}

export default Projects