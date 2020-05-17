import React, { useRef, useEffect, useState } from 'react'
import Typist from 'react-typist'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'
import Skills from './Skills'



const Home = (props) => {

  useEffect(() => {
    if (window.performance) {
      if (performance.navigation.type === 1) {
        header.current.style.animation = 'none'
        header.current.style.right = '0'
        header.current.style.top = '0'
        header.current.style.position = 'fixed'
      } else {
        header.current.style.animation = 'slideIn linear 5s'
        header.current.style.animationFillMode = 'forwards'
      }
    }
  })

  console.log(performance.navigation)


  const header = useRef()

  return <main>
    <section className="homepage">
      <div className="introduction">
        <Typist startDelay={5000} avgTypingDelay={98}>
          <p>Hey there! I'm Annie. </p>
          <p> I'm a Fullstack Software Developer based in London.</p>
        </Typist>
      </div>
      <div ref={header} className="header">
        <h1>Annie Kayal</h1>
        <div className="navbar">
          <ul>
            <li><a href='#about-me'>about.</a></li>
            <li><a href='#skills'>skills.</a></li>
            <li><a href='#projects'>work.</a></li>
            <li><a href='#contact'>get in touch.</a></li>
          </ul>
        </div>
      </div>
      <div className="currently showAvailable">
        <p>CURRENTLY LOOKING FOR OPPORTUNITIES </p>
      </div>
    </section>
    <AboutMe props={props} />
    <Skills />
    <Projects />
    <Contact />
  </main>
}

export default Home