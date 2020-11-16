import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Email = ({ handleChange, handleSubmit, email }) => {

  const { user_email, email_subject, email_content } = email


  return <div className="form">
    <form>
      <div className="short-inputs">
        <label htmlFor="">Enter Your Email Address</label>
        <input
          type='email'
          className='input'
          name='user_email'
          placeholder='Your Email Address'
          onChange={handleChange}
          value={user_email || ''} />

        <label htmlFor="">& What Do You Want To Chat About?</label>
        <input
          type='text'
          name='email_subject'
          className='input'
          placeholder='Subject'
          onChange={handleChange}
          value={email_subject || ''}>
        </input>
      </div>
      <div className="message-container">
        <label htmlFor="">& Lastly, Write Your Message Below</label>
        <textarea
          className='message input'
          type='text'
          name='email_content'
          placeholder='Write your message here :)'
          value={email_content || ''}
          onChange={handleChange}>
        </textarea>
      </div>
      <Link to='/#contact'><button onClick={(e) => handleSubmit(e)}>Send Email</button></Link>
    </form>
  </div>
}

export default Email 