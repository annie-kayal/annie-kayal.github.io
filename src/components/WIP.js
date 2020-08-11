import React from 'react'

const WIP = ({ ToggleModal, modalOpen }) => {

  function close(e) {
    ToggleModal(false)
    console.log('hello')
  }

  console.log(modalOpen)

  return <section>
    {modalOpen === true ?
      <div onClick={(e) => close(e)} className="modal is-active">
        <div onClick={(e) => close(e) } className="modal-background"></div>
        <div className="modal-content">
          
          <h2>Whoops!</h2>
          <p>This is still a work in progress and yet to be deployed!</p>
          <p>In the mean time, check out the other projects I've done.</p>
          <p>Interested to chat?</p>
          <p>Drop me an email below or message me on <a href='https://www.linkedin.com/in/anniekayal/'>LinkedIn.</a></p>
          <strong>Click anywhere to close.</strong>
        </div>
      </div> :
      null}
  </section>
}

export default WIP