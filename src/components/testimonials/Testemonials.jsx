import React from 'react'
import './testemonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Ana',
    review: "Quero destacar que você sempre demonstrou um comprometimento excepcional em suas tarefas. Sua capacidade de entregar resultados de alta qualidade dentro dos prazos estabelecidos e sua atenção aos detalhes são impressionantes. Além disso, admiro sua abordagem proativa e sua habilidade de lidar com desafios. Você é uma integrante valiosa para a equipe."
  },
  {
    avatar: AVTR2,
    name: 'Pedro',
    review: "Gostaria de ressaltar suas habilidades de comunicação eficaz e suas excelentes habilidades interpessoais. Você é capaz de criar um ambiente de trabalho colaborativo e incentivar a participação de todos. Sua capacidade de ouvir atentamente as ideias dos outros e fornecer feedback construtivo é admirável. Sua contribuição é crucial para melhorar a comunicação e a coesão da equipe."
  },
  {
    avatar: AVTR3,
    name: 'Maria',
    review: "Quero destacar sua alta criatividade e perspectiva única nos projetos. Suas constantes ideias inovadoras e soluções fora da caixa são impressionantes. Além disso, admiro sua habilidade de pensar rapidamente em situações de pressão. Sua capacidade de adaptação e sua habilidade em lidar com mudanças imprevistas são notáveis."
  },
  {
    avatar: AVTR4,
    name: 'João',
    review: 'Gostaria de salientar sua capacidade de liderança nata. Sua visão clara e sua habilidade em inspirar e motivar a equipe são notáveis. Admiro sua capacidade de delegar tarefas de forma eficiente, garantindo que cada membro da equipe esteja engajado e aproveitando ao máximo suas competências. Sua habilidade em resolver problemas e tomar decisões também é impressionante.' 
    }
]

const Testemonials = () => {
  return (
    <section id='testemonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
        <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt=''/>
          </div>
          <h5 className='client__name'>{name}</h5>
          <small className='client__review'>{review}</small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testemonials