import React, { useRef, useEffect, useState, useCallback } from 'react'
import 'bulma'
import '../css/main.scss'

const AboutMe = (props) => {

  const previousExp = [
    {
      id: 1,
      name: 'General Assembly',
      date: 'February 2020 - April 2020',
      role: 'Full-time Student',
      image: 'https://seeklogo.com/images/G/general-assembly-logo-D5C634F07A-seeklogo.com.png',
      description: 'Tweleve week immersive course gaining practical and industry knowledge on the latest fullstack technologies and frameworks'
    },
    {
      id: 2,
      name: 'Waitrose & Partners',
      date: 'November 2018 - January 2020',
      role: 'Team leader',
      image: 'https://d3tsytm1wtjqo2.cloudfront.net/images/w/waitrosegarden_9.png',
      description: 'Part-time role working to complete daily routine tasks. Focus on assisting customers with their instore queries and furthering customer satsifaction'
    },
    {
      id: 3,
      name: 'Linkfluence',
      date: 'April 2018 - November 2018',
      role: 'Junior Social Media Researcher',
      image: 'https://image4.owler.com/logo/linkfluence_owler_20181001_230701_original.png',
      description: 'Indivudually assembling montly reports for clients on their current social media presence against competitors.'
    },
    {
      id: 4,
      name: 'Strategic Discourse',
      date: 'December 2017 - April 2018',
      role: 'Junior Consultant',
      image: 'https://www.strategic-discourse.co.uk/wp-content/uploads/2017/03/logo-smaller-1.png',
      description: 'Co-authored an in-depth report to be used in partnership with a client to develop an approriate marketing strategy to rebrand themselves in the market'
    },
    {
      id: 5,
      name: 'CIM',
      date: 'May 2017 - May 2017',
      role: 'Level Six Diploma in Professional Marketing ',
      image: 'https://cdn.featuredcustomers.com/Company.logo/Kingston-University-Logo.png',
      description: 'Completed two hypathetical marketing reports for an exisiting company for adapting to digital disruption and measuring an offline campaign.'
    },
    {
      id: 6,
      name: 'Kingston University, London',
      date: 'September 2016 - January 2018',
      role: 'MSc Marketing & Strategy ',
      image: 'https://www.cim.co.uk/media/1317/icon-102.png?height=200',
      description: 'A one year degree which focused on teaching traditional marketing models.'
    }

  ]

  const [dancerLeft, setDancer] = useState(false)
  const [open, setopen] = useState(true)

  function ToggleItem(event) {
    const div = Array.from(document.querySelectorAll('.expMoreInfo'))
    setopen(!open)
    if (open === true) {
      {
        div.map((el, i) => {
          if (event.target.parentNode.parentNode.nextSibling === el) {
            event.target.innerHTML = '-'
            el.style.animation = 'grow linear 1s'
            el.style.animationFillMode = 'forwards'
            el.previousSibling.firstChild.firstChild.style.fontWeight = 'bold'
          }
        })
      }
    } else if (open === false) {
      {
        div.map((el, i) => {
          if (event.target.parentNode.parentNode.nextSibling === el) {
            event.target.innerHTML = '+'
            el.style.animation = 'hide linear 1s'
            el.style.animationFillMode = 'forwards'
            el.previousSibling.firstChild.firstChild.style.fontWeight = 'normal'
          } else {
            el.style.height = '0em'
          }
        })
      }
    }
  }

  const dancer = setInterval(() => {
    setDancer(!dancerLeft)
    clearInterval(dancer)
  }, 1000)


  //  SCREEN MAX SIZE OF 610px - NEED BUFFER OF 100px

  return <section className='about-me'>
    <div className="brand-statement">
      <div className="brand-header">
        <span className="icon">
          <i className="fas fa-coffee"></i>
        </span>
        <h2>Tea Lover | Software Engineer | Dancer</h2>
        {dancerLeft ? <img src='https://i.imgur.com/bSezTIc.png' /> : <img src='https://i.imgur.com/ThT9m3F.png' />}
      </div>
      <div className="statement">
        <p>As a retail worker turned software developer, I am constantly looking at ways to improve customer journeys. </p>
        <p> Experiencing customer frustrations first-hand led me to wonder how I could do more for the users.
        Whilst interviewing for an Email Developer role, I dove into a take home exercise and was instantly fascinated with coding. I continued using online resources to deepen my understanding of programming while working in data
        analytics. </p>
        <p>In assisting brands to build relationships with their users, my curiosity drew me back towards coding. This led me to the Software Engineering Immersive course at General Assembly.
      I now have full focus on the MERN stack and am familiar using PostgreSQL and Django.</p>
        <p>Have a scroll through to see the projects I completed at GA and get in touch!</p>
      </div>
      <div className="interests">
        <h1>Currently</h1>
        <span>*updated on the 1st of every month</span>
        <div className="interest">
          <h3>Watching:</h3>
          <div>
            <p>Teen Wolf <small>(Netflix)</small></p>
            <p>Hustlers <small>(Amazon Prime)</small></p>
          </div>
        </div>
        <div className="interest">
          <h3>Reading:</h3>
          <div>
            <p>Our Stop <small>(by Laura Jane Williams)</small></p>
            <p>Because Internet <small>(by Grethcen McCulloch)</small></p>
          </div>
        </div>
        <div className="interest listening">
          <h3>Listening:</h3>
          <div>
            <h4>Replayed Music:</h4>
            <p>99 Ways <small>(by Kadiata)</small></p>
            <p>Menswear <small>(by 1975)</small></p>
          </div>
          <div>
            <h4>Podcasts:</h4>
            <p>SyntaxFM</p>
            <p>Frontend Happy Hour</p>
          </div>
        </div>
      </div>
    </div>
    <div className="experience-container">
      <h1>Previous Experience:</h1>
      {previousExp.map((exp, key) => {
        return <div key={key} className="experience">
          <div id={exp.id} className="experience-info">
            <div className="experience-header">
              <h3>{exp.name}</h3>
              <button onClick={(event) => ToggleItem(event)} className='toggle'>+</button>
            </div>
          </div>
          <div className="expMoreInfo">
            <p>{exp.date}</p>
            <p>{exp.role}</p>
            <p>{exp.description}</p>
          </div>

        </div>
      })}
    </div>
  </section>
}

export default AboutMe