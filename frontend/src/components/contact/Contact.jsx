import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/place/Sri+Krishna+College+Of+Technology/@10.9276015,76.9257675,17z/data=!4m6!3m5!1s0x3ba85b823c4ca3d5:0x23416a992879b7c4!8m2!3d10.9276015!4d76.9257675!16s%2Fg%2F11xjs80l_?entry=ttu'
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Nava India Coimbatore</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> learnspace@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +91 9787558519</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
