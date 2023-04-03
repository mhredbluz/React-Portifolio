import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>O que eu posso oferecer</h5>
      <h2>Serviços</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Back End</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Desenvolvimento de aplicações back-end usando as tecnologias mais populares do ecossistema Java, como Spring, Hibernate, JPA, Struts, JSF, entre outras.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Integração de sistemas através do desenvolvimento de APIs RESTful e SOAP, utilizando frameworks como Spring MVC.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Desenvolvimento de aplicações de processamento de dados em larga escala, usando Kafka.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Utilização de bancos de dados relacionais e não-relacionais para armazenamento e recuperação de dados, incluindo MySQL, Oracle, MongoDB, entre outros.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Desenvolvimento de aplicações escaláveis e de alta disponibilidade, utilizando tecnologias como Apache Tomcat, JBoss e Docker.</p>
            </li>
          </ul>
        </article>
       {/* END OF UI/UX */}
       <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Desenvolvimento de aplicativos web complexos usando tecnologias Java, como Spring Framework, JavaServer Faces (JSF), Java Servlets, entre outras.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Desenvolvimento de aplicativos em nuvem, utilizando tecnologias Java, como o Amazon Web Services (AWS) e o Google Cloud Platform, para fornecer soluções escaláveis e de alta disponibilidade em nuvem.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Desenvolvimento de soluções de Internet das Coisas (IoT), utilizando tecnologias Java, como o Eclipse IoT, para desenvolver soluções inovadoras de IoT.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Desenvolvimento de soluções de comércio eletrônico, utilizando tecnologias Java, como o Spring Framework e o Hibernate, para desenvolver soluções de comércio eletrônico robustas e escaláveis.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Front End</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Desenvolvimento de interfaces web responsivas e intuitivas, utilizando HTML5, CSS3 e JavaScript, seguindo as melhores práticas e padrões do mercado.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Utilização de frameworks front-end populares, como React, Vue.js e AngularJS, para o desenvolvimento de interfaces web escaláveis e de alta performance.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Integração de interfaces web com APIs RESTful e SOAP, utilizando ferramentas como Axios e Fetch API.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Manutenção e suporte a interfaces web existentes, incluindo atualização de tecnologias e correção de bugs.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Implementação de soluções de testes automatizados em interfaces web, utilizando ferramentas como Selenium e WebDriver.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION*/}
      </div>

    </section>
  )
}

export default Services