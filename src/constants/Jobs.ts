/* eslint-disable max-len */
import { v4 as uuidv4 } from 'uuid'

export const Jobs = [
  {
    id: uuidv4(),
    title: 'Desenvolvedor React.js na Guiavet (2022 - Atual)',
    company: 'LabCinco',
    href: 'https://guia.vet',
    description:
      'Desenvolvo funcionalidades para a plataforma web usando React + TypeScript em uma startup especializada no controle de saúde e bem estar de animais de estimação.',
    media: '/static/img/guiavet.png',
  },
  {
    id: uuidv4(),
    title: 'Desenvolvedor Mobile na Mereo (2021 - 2022)',
    company: 'Mereo',
    href: 'https://mereo.com',
    description:
      'Durante 11 meses, desenvolvi funcionalidades para o aplicativo principal usando React Native + TypeScript em uma HR Tech cujo produto é uma plataforma integrada para gestão de pessoas e organizações.',
    media: '/static/img/mereo.jpg',
  },
  {
    id: uuidv4(),
    title: 'Desenvolvedor Full-Stack na LabCinco/Bigou Delivery (2021)',
    company: 'LabCinco',
    href: 'https://labcinco.com',
    description:
      'Durante 7 meses, desenvolvi funcionalidades e dei manutenção em plataformas web e mobile usando Next, React, React Native e Vue em uma startup de tecnologia do Sudeste de Minas Gerais que tem como principal produto uma plataforma de delivery.',
    media: '/static/img/bigou.png',
  },
]
