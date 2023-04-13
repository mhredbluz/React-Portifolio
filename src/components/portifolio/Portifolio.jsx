import React from 'react'
import './portifolio.css'
import IMG1 from '../../assets/portifolio1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import BRV from '../../assets/breve.jpeg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Microserviço robusto e escalável utilizando Spring Boot',
    github: 'https://github.com/mhredbluz/microserviceSpring'
  },
  {
    id: 2,
    image: BRV,
    title: 'Aplicação utilizando kafka na integração de microserviços',
    github: 'https://github.com/mhredbluz'
  },
  {
    id: 3,
    image: BRV,
    title: 'Task Manager desenvolvido em Java',
    github: 'https://github.com/mhredbluz'
  }
]

const Portifolio = () => {
  return (
    <section id='portifolio'>
      <h5>Meus projetos</h5>
      <h2>Portifolio</h2>

      <div className="container portifolio__container">
        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className='portifolio__item'>
          <div className="portifolio__item-image">
            <img src={image} alt={title} />          
          </div>
          <h3>{title}</h3>
          <div className="portifolio__item-cta">
            <a href={github} className='btn'>Github</a>
          </div>
        </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portifolio