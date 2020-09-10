import React, { useRef, useEffect, useState } from 'react'
import Typist from 'react-typist'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'
import Skills from './Skills'
import WIP from './WIP'



const Home = (props) => {
  const header = useRef()
  useEffect(() => {
    if (window.performance) {
      if (performance.navigation.type === 1) {
        header.current.style.animation = 'none'
        header.current.style.right = '0'
        header.current.style.top = '0'
        header.current.style.position = 'fixed'
      } else if (performance.navigation.type === 0) {
        header.current.style.animation = 'slideIn forwards linear 5s'
      }
    }
  })

  const [infoShowing, setInfo] = useState(true)
  const currently = useRef()
  const ToggleInfo = (e) => {
    setInfo(!infoShowing)
    console.log(infoShowing)
    if (infoShowing) {
      currently.current.style.animation = 'showInfo forwards linear 0.8s'
    } else {
      currently.current.style.animation = 'hideInfo forwards linear 0.8s'
    }

  }

  return <main>

    <section className="homepage">
      <div className="introduction">
        <Typist startDelay={5000}>
          <p>Hey there! I'm Annie. </p>
          <p> I'm a Fullstack Software Engineer based in London. </p>
        </Typist>
        <div className="learn-more">
          <span onClick={(e) => ToggleInfo(e)} className="icon">
            <i className="fas fa-info-circle"></i>
          </span>
          <p>
            Click to learn more
          </p>
        </div>
      </div>
      <div ref={header} className="header">
        <div>
          <h1>Annie Kayal</h1>
        </div>
        <div className="navbar">
          <ul>
            <li><a href='#about-me'>about.</a></li>
            <li><a href='#skills'>skills.</a></li>
            <li><a href='#projects'>work.</a></li>
            <li><a href='#contact'>get in touch.</a></li>
          </ul>
        </div>
      </div>
      <div ref={currently} className="currently">
        <p><span>•</span> INSTRCUTOR AT CODE FIRST GIRLS </p>
        <p><span>•</span> BUILDING A POKEDEX</p>
        <p><span>•</span> LOOKING FOR OPPORTUNITIES</p>
      </div>
    </section>
    <div id="about-me"></div>
    <AboutMe />
    <div id='skills'></div>
    <Skills />
    <div id='projects'></div>
    <Projects props={props} />
    <div id='contact'></div>
    <Contact />
    <WIP />
  </main>
}

export default Home