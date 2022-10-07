import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <div>
              <h4>HTML</h4>
              </div>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill/>
              <div>
              <h4>CSS</h4>
              </div>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill/>
              <div>
              <h4>JavaScript</h4>
              </div>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill/>
              <div>
              <h4>Bootstrap</h4>
              </div>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill/>
              <div>
              <h4>JSF</h4>
              </div>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND*/}
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <div>
              <h4>Java</h4>
              </div>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <div>
              <h4>MySQL</h4>
              </div>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <div>
              <h4>Jboss RedHat</h4>
              </div>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <div>
              <h4>Docker</h4>
              </div>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill/>
              <div>
              <h4>Azure</h4>
              </div>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>
        {/* END OF BACKEND*/}
      </div>
    </section>
  )
}

export default experience