import React from 'react'

const Email = ({ handleChange, handleSubmit, email }) => {

  const { user_email, email_subject, email_content } = email 

  return <div className="form">
    <form onSubmit={handleSubmit}>
      <input
        type='email'
        className='input'
        name='user_email'
        placeholder='Your Email Address'
        onChange={handleChange}
        value={user_email || ''}>

      </input>
      <input
        type='text'
        name='email_subject'
        className='input'
        placeholder='Subject'
        onChange={handleChange}
        value={email_subject || ''}>
      </input>
      <textarea
        className='message input'
        type='text'
        name='email_content'
        placeholder='Write your message here :)'
        value={email_content || ''}
        onChange={handleChange}>
      </textarea>
      <button>Send Email</button>
    </form>
  </div>
}

export default Email 