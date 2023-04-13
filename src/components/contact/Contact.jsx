import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ut7klrl', 'template_fd5fku7', form.current, 'g4q54ebBtmBa9de6w');

    e.target.reset()
  };

  

  return (
    <section id='contact'>
      <h5>Entre em contato</h5>
      <h2>Fale Comigo</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mhredbluz@gmail.com</h5>
            <a href="mailto:mhredbluz@gmail.com">Mande uma mensagem</a>
          </article>
          <article className='contact__option'>
            <BsInstagram className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>@mhredbluz</h5>
            <a href="https://www.linkedin.com/in/marcos-henrique-soares-dutra/">Mande uma mensagem</a>
          </article>
          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+5511984622119</h5>
            <a href="https://wa.me/5511984622119">Mande uma mensagem</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Seu nome completo' required />
          <input type="text" name='email' placeholder='Seu Email' required />
          <textarea name="message" id="7" placeholder='Sua Mensagem...' required ></textarea>
          <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact