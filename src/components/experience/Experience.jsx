import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>Quais skills eu tenho?</h5>
      <h2>Minha Experiencia</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Desenvolvedor Frontend</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experiente</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experiente</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediário</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediário</small>
              </div>              
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>JSF</h4>
              <small className='text-light'>Experiente</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND*/}
        <div className="experience__backend">
        <h3>Desenvolvedor Backend</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Java</h4>
              <small className='text-light'>Experiente</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experiente</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Jboss RedHat</h4>
              <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/> 
              <div>
              <h4>Docker</h4>
              <small className='text-light'>Intermediário</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Azure</h4>
              <small className='text-light'>Intermediário</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF BACKEND*/}
      </div>
    </section>
  )
}

export default experience