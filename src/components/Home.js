import React, { useRef, useEffect, useState } from 'react'
import disableScroll from 'disable-scroll'
import Typist from 'react-typist'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'
import Skills from './Skills'
import WIP from './WIP'



const Home = (props) => {

  const header = useRef()
  const homepage = useRef()
  const [canScroll, setScroll] = useState(false)


  useEffect(() => {
    if (window.performance) {
      if (performance.navigation.type === 1) {
        header.current.style.animation = 'none'
        header.current.style.right = '0'
        header.current.style.top = '0'
        header.current.style.position = 'fixed'
        setScroll(true)
      }

      if (canScroll === false) {
        disableScroll.on()
      } else {
        disableScroll.off()
      }
    }
  })

  return (
    <main>

      <section ref={homepage} className="homepage">
        <div className="introduction">
          <Typist startDelay={5000}>
            <p>Hey there! I'm Annie. </p>
            <p> I'm a Fullstack Software Engineer based in London. </p>
          </Typist>
          <div onAnimationEnd={() => setScroll(true)} className="innerBorder">
            <div className="bulletPoints">
              <span>•</span>
              <span>•</span>
            </div>

            <p> BUILDING A POKEDEX</p>
            <p>FRONTEND DEVELOPER <span>&#64;</span>FEAST-IT</p>

            <div className="bulletPoints">
              <span>•</span>
              <span>•</span>
            </div>
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
  )
}

export default Home