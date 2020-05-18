import React, { useState } from 'react'

const Skills = () => {

  const confidentSkills = [
    {
      name: 'React',
      icon: <i className="devicon-react-original"></i>
    },
    {
      name: 'SASS',
      icon: <i className="devicon-sass-original"></i>
    },
    {
      name: 'VS Code',
      icon: <i className="devicon-visualstudio-plain"></i>
    },
    {
      name: 'Trello',
      icon: <i className="devicon-trello-plain"></i>
    },
    {
      name: 'Python',
      icon: <i className="devicon-python-plain"></i>
    },
    {
      name: 'PostgreSQL',
      icon: <i className="devicon-postgresql-plain"></i>
    },
    {
      name: 'Node.js',
      icon: <i className="devicon-nodejs-plain"></i>
    },
    {
      name: 'JavaScript',
      icon: <i className="devicon-javascript-plain"></i>
    },
    {
      name: 'HTML5',
      icon: <i className="devicon-html5-plain"></i>
    },
    {
      name: 'Express',
      icon: <i className="devicon-express-original-wordmark"></i>
    },
    {
      name: 'CSS3',
      icon: <i className="devicon-css3-plain"></i>
    },
    {
      name: 'NPM',
      icon: <i className="fab fa-npm"></i>
    },
    {
      name: 'Bulma',
      icon: <img id='bulma' src='https://i.imgur.com/DnnrAMG.png' />
    },
    {
      name: 'Insomnia',
      icon: <img src='https://i.imgur.com/g1n0oOh.png' />
    }
  ]
  const comfortableSkills = [
    {
      name: 'MongoDB',
      icon: <i className="devicon-mongodb-plain"></i>
    },
    {
      name: 'Heroku',
      icon: <i className="devicon-heroku-original"></i>
    },
    {
      name: 'GitHub',
      icon: <i className="devicon-github-plain"></i>
    },
    {
      name: 'Git',
      icon: <i className="devicon-git-plain"></i>
    },
    {
      name: 'Django',
      icon: <i className="devicon-django-line-wordmark"></i>
    },
    {
      name: 'Babel',
      icon: <i className="devicon-babel-plain"></i>
    },
    {
      name: 'Webpack',
      icon: <i className="devicon-webpack-plain"></i>
    }
  ]

  const dabbledSkills = [
    {
      name: 'Mocha',
      icon: <i className="devicon-mocha-plain"></i>
    }
  ]

  return <section className='skills'>
    <div className="skills-container">
      <div className="skills">
        <h2>Confident:</h2>
        <div className="confident-skills">
          {confidentSkills.map((skill, key) => {
            return <div key={key} className="icon">
              {skill.icon}
              <p>{skill.name}</p>
            </div>
          })}
        </div>
      </div>


      <div className="skills">
        <h2>Comfortable:</h2>
        <div className="comfortable-skills">
          {comfortableSkills.map((skill, key) => {
            return <div key={key} className="icon">
              {skill.icon}
              <p>{skill.name}</p>
            </div>
          })}
          <div className="icon">
            <img src='https://i.imgur.com/kqp1k8V.png' />
            <p>TablePlus</p>
          </div>
          <div className="icon">
            <img id='JSON' src='https://i.imgur.com/50TTm6g.png' />
            <p>JWT</p>
          </div>
        </div>
      </div>


      <div className="skills">
        <h2>Dabbled With:</h2>
        <div className="dabbled-skills">
          {dabbledSkills.map((skill, key) => {
            return <div key={key} className="icon">
              {skill.icon}
              <p>{skill.name}</p>
            </div>
          })}
        </div>
      </div>
    </div>


  </section>
}

export default Skills