import React, { useRef, useEffect, useState } from 'react'
import 'bulma'

const AboutMe = () => {

  const experienceHeader = useRef()
  const [dancerLeft, setDancer] = useState(true)
  const previousExp = [
    {
      id: 0,
      name: 'Feast-It',
      date: 'November 2020 - Present',
      role: 'Frontend React Developer',
      image: 'https://d3tsytm1wtjqo2.cloudfront.net/images/w/waitrosegarden_9.png',
      description: ''
    },
    {
      id: 1,
      name: 'Code First Girls',
      roles: [
        {
          date: 'September 2020 - Present',
          role: 'Volunteer Instructor',
          description: 'A rolling volunteer position teaching \'The Intro To Web Development\' course to girls interested in learning the fundamentals of HTML, CSS and JavaScript.'
        },
        {
          date: 'June 2020 - September 2020',
          role: 'Instructor & Mentee',
          description: 'An eight week programme teaching \'The Intro To Web Development\' course as well working with five other fellows to deliver a research project around women in tech.'
        }
      ]
    },
    {
      id: 2,
      name: 'General Assembly',
      image: 'https://seeklogo.com/images/G/general-assembly-logo-D5C634F07A-seeklogo.com.png',
      roles: [
        {
          date: 'August 2020 - November 2020',
          role: 'Instructional Assosicate',
          description: 'A remote contract role working with a lead GA instructor to deliver a General Assembly Enterpirse course with Barclays. Sessions include delivering Programmers for Non-Programmers (one week) and JavaScript Fundamental(two week) sessions.'
        },
        {
          date: 'February 2020 - April 2020',
          role: 'Full-time Student',
          description: 'Twelve week immersive course gaining practical and industry knowledge on the latest fullstack technologies and frameworks.'
        }
      ]
    },
    {
      id: 3,
      name: 'Waitrose & Partners',
      date: 'November 2018 - January 2020',
      role: 'Team leader',
      image: 'https://d3tsytm1wtjqo2.cloudfront.net/images/w/waitrosegarden_9.png',
      description: 'Part-time role working to complete daily routine tasks. Focus on assisting customers with their in-store queries and furthering customer satsifaction.'
    },
    {
      id: 4,
      name: 'Linkfluence',
      date: 'April 2018 - November 2018',
      role: 'Junior Social Media Researcher',
      image: 'https://image4.owler.com/logo/linkfluence_owler_20181001_230701_original.png',
      description: 'Individually assembling montly reports for clients on their current social media presence against competitors.'
    },
    {
      id: 5,
      name: 'Strategic Discourse',
      date: 'December 2017 - April 2018',
      role: 'Junior Consultant',
      image: 'https://www.strategic-discourse.co.uk/wp-content/uploads/2017/03/logo-smaller-1.png',
      description: 'Co-authored an in-depth report to be used in partnership with a client to develop an appropriate marketing strategy to rebrand themselves in the market.'
    },
    {
      id: 6,
      name: 'CIM',
      date: 'May 2017 - May 2017',
      role: 'Level Six Diploma in Professional Marketing ',
      image: 'https://cdn.featuredcustomers.com/Company.logo/Kingston-University-Logo.png',
      description: 'Completed two hypothetical marketing reports for an exisiting company for adapting to digital disruption and measuring an offline campaign.'
    },
    {
      id: 7,
      name: 'Kingston University, London',
      date: 'September 2016 - January 2018',
      role: 'MSc Marketing & Strategy ',
      image: 'https://www.cim.co.uk/media/1317/icon-102.png?height=200',
      description: 'A one year degree which focused on teaching traditional marketing models.'
    }
  ]

  useEffect(() => {
    setDancer(true)

  }, [])

  const dancer = setInterval(() => {
    setDancer(!dancerLeft)
    clearInterval(dancer)
  }, 1000)

  function ToggleItem(event) {
    const div = Array.from(document.querySelectorAll('.experience-header'))
    if (event.target.innerHTML === '+') {
      div.map(el => {
        if (el.lastChild.innerHTML === '-' || el.parentElement.nextSibling.firstChild.firstChild.lastChild.innerHTML === '-') {
          el.parentElement.nextSibling.style.animation = 'hide forwards linear 1s'
          el.lastChild.innerHTML = '+'
          el.parentElement.nextSibling.firstChild.lastChild.style.animation = 'hideRole forwards linear 0.5s'
          el.parentElement.nextSibling.lastChild.lastChild.style.animation = 'hideRole forwards linear 0.5s'
          
          el.lastChild.previousSibling.previousSibling.style.fontWeight = 'normal'
        }
      })
      event.target.parentNode.parentNode.parentNode.nextSibling.style.animation = 'grow forwards linear 0.8s'
      event.target.innerHTML = '-'
      if (event.target.previousSibling ) {
        // console.log(event.target.previousSibling)
        event.target.previousSibling.parentNode.previousSibling.style.fontWeight = 'bold'
      }  else {
        event.target.parentNode.previousSibling.style.fontWeight = 'bold'
      }



    } else {
      event.target.parentNode.parentNode.parentNode.nextSibling.style.animation = 'hide forwards linear 0.8s'
      event.target.innerHTML = '+'
      if (event.target.parentNode.previousSibling.style.fontWeight === 'bold') {
        event.target.parentNode.previousSibling.style.fontWeight = 'normal'
      } else {
        event.target.previousSibling.parentNode.previousSibling.style.fontWeight = 'normal'
      }

    }
  }

  const expand = (e) => {
    if (e.target.innerHTML === '+') {
      console.log(e.target.parentNode.nextSibling)
      e.target.parentNode.parentNode.parentNode.style.animation = 'expandedGrow forwards linear 0.8s'
      e.target.innerHTML = '-'
      event.target.parentNode.nextSibling.style.animation = 'showExpandedInfo forwards linear 0.8s'
    } else {
      e.target.parentNode.parentNode.parentNode.style.animation = 'HideExpansion forwards linear 0.5s'
      event.target.parentNode.nextSibling.style.animation = 'hideRole forwards linear 0.5s'
      e.target.innerHTML = '+'

    }
  }


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
    </div>
    <div className="outside-coding">
      <div className="interests">
        <h1>Currently</h1>
        <span>*updated on the 1st of every month - <strong>November Edition</strong></span>
        <div className="interests-container">
          <div className="interest">
            <h3>Watching:</h3>
            <div>
              <p>How To Get Away With Murder<small>(Netflix)</small></p>
              <p>The Entire Star Wars Collection<small>(Disney +)</small></p>
            </div>
          </div>
          <div className="interest">
            <h3>Reading:</h3>
            <div>
              <p>Queenie<small>(by Candice Carty-Williams)</small></p>
              {/* <p>Because Internet <small>(by Grethcen McCulloch)</small></p> */}
            </div>
          </div>
          <div className="interest listening">
            <h3>Listening:</h3>
            <div>
              <h4>Replayed Music:</h4>
              {/* <p>Be Kind <small>(by Halsey & Marshmallow)</small></p> */}
              <p>my ex's best friend<small>(by Machine Gun Kelly & BlackBear)</small></p>
            </div>
            <div>
              <h4>Podcasts:</h4>
              <p>SyntaxFM</p>
              <p>Frontend Happy Hour</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="experience-container">
      <h1>Previous Experience</h1>
      <div className="roles">
        {previousExp.map((exp, key) => {
          return <div key={key} className="experience">
            <div id={exp.id} className="experience-info">
              <div ref={experienceHeader} className="experience-header">

                <h3>{exp.name}</h3>

                <div className="endHeaderContainer">
                  {exp.date && exp.date.endsWith('Present') ? <p className='current'>current</p> :
                    exp.roles && exp.roles.filter(roles => roles.date.endsWith('Present')).map(key => <p className='current' key={key}>current</p>)}
                  <button onClick={(event) => ToggleItem(event)} className='toggle'>+</button>
                </div>
              </div>
            </div>

            {exp.name === 'General Assembly' || exp.name === 'Code First Girls' ?
              <div className='multiple-role-info'>
                {exp.roles.map((role, key) => {
                  return <div key={key} className='roles-header'>
                    <div className="expanded-header">
                      <p>{role.role}</p>
                      <strong>{role.date}</strong>
                      <button onClick={(e) => expand(e)} className="toggle">+</button>
                    </div>
                    <div className="expanded-info">
                      <p>{role.description}</p>
                    </div>
                  </div>
                })}
              </div>
              :
              <div className="expMoreInfo">
                <div className='single-expereince-expand'>
                  <p>{exp.role} </p>
                  <strong>{exp.date}</strong>
                  <p>{exp.description}</p>
                </div>
              </div>

            }


          </div>
        })}
      </div>
    </div>
  </section>
}

export default AboutMe