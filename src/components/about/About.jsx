import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Conheça um pouco </h5>
      <h2>Sobre mim</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experiencia</h5>
              <small>3+ Anos em projeto</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clientes</h5>
              <small>3+ Clientes</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projetos</h5>
              <small>20+ Completos</small>
            </article>
          </div>

          <p>
            Olá, meu nome é Marcos Henrique e sou um desenvolvedor full stack apaixonado por criar soluções eficientes e inovadoras. Com mais de 3 anos de experiência em desenvolvimento e manutenção de softwares, já trabalhei em diversos projetos desafiadores. Durante minha carreira, tive a oportunidade de trabalhar com uma ampla gama de tecnologias e linguagens de programação, como Java 8+, Angular, Vuejs, Docker, MySql, MongoDB. Além disso, estou sempre em busca de aprender novas tecnologias e habilidades para me manter atualizado com as últimas tendências do mercado.
          </p>
          <p>
            Um dos meus principais diferenciais como desenvolvedor é a minha capacidade de entender as necessidades do usuário final e transformá-las em soluções práticas e intuitivas. Sempre me preocupo em desenvolver soluções escaláveis, fáceis de usar e que agreguem valor para o negócio. Estou sempre em busca de novas oportunidades para me desafiar e contribuir para o sucesso de projetos inovadores.
          </p>
          <p>
            Se você procura um desenvolvedor full stack com habilidades técnicas sólidas e uma mentalidade de resolução de problemas, não hesite em entrar em contato comigo. Estou pronto para contribuir para o sucesso do seu projeto.
          </p>
          <a href="#contact" className='btn btn-primary'>Vamos Conversar!</a>
        </div>
      </div>
    </section>
  )
}

export default About