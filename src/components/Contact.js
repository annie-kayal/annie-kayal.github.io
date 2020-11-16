import React, { useState } from 'react'
import EmailJS from 'emailjs-com'

import Footer from './Footer'
import Email from './Email'


const Contact = () => {
  const [email, setEmail] = useState({ user_email: '', email_subject: '', email_content: '' })
  const [success, setSucces] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    const data = { ...email, [name]: value }
    setEmail(data)
  }

  function handleSubmit() {
    console.log('hello')


    const service_id = 'outlook'
    const template_id = 'portfolio_email'



    EmailJS.sendForm(service_id, template_id, event.target, 'user_EjXBcq7W8iPixdhtAJ7kr')
      .then((res) => {
        setSucces(res.text)
      })
      .catch((err) => {
        alert(err.text)
      })
  }


  return <section className='contact'>
    <div className='get-in-touch'>
      <h1>Get In Touch</h1>
      <div className="logos">
        <div className="icon"><a rel="noopener noreferrer" target='_blank' href='https://github.com/annie-kayal'><i className="fab fa-github"></i></a></div>
        <div className="icon"><a rel="noopener noreferrer" target='_blank' href='https://www.linkedin.com/in/anniekayal/'><i className="fab fa-linkedin"></i></a></div>
      </div>
    </div>
    <div className="email-me"><h2>Or Email Me <i className="fas fa-arrow-down"></i></h2></div>
    {success === '' ?
      <Email
        email={email}
        handleChange={(e) => handleChange(e)}
        handleSubmit={() => handleSubmit()}
      />
      : success === 'OK' ?
        <div className="email-sent">
          <h1>Thanks for your email! I'll get back to you as soon as I can.</h1>
        </div>
        :
        null}
    <Footer />
  </section>

}
export default Contact