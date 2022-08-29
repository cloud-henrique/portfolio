/* eslint-disable max-len */
import { v4 as uuidv4 } from 'uuid'

export const Links = {
  homepage: 'https://claudiohenrique.vercel.app',
  github: 'https://github.com/claudiohenrique-dev',
  linkedin: 'https://linkedin.com/in/cloud-henrique',
  telegram: 'https://t.me/cloud_henrique',
  email: 'mailto:00claudio.henrique@gmail.com',

  internal: [
    { key: uuidv4(), name: 'Sobre', href: '#about' },
    { key: uuidv4(), name: 'Projetos', href: '#projects' },
    { key: uuidv4(), name: 'Experiências', href: '#experiences' },
    { key: uuidv4(), name: 'Contato', href: '#contact' },
  ],

  projects: [
    {
      key: uuidv4(),
      title: 'JASTA',
      description: 'J.A.S.T.A. - Just Another Silly Todo App',
      href: 'https://jasta.vercel.app',
      media: '/static/img/jasta.png',
    },
    {
      key: uuidv4(),
      title: 'Lyrics Search',
      description:
        'Deseja cantar sua música favorita com seu artista favorito? Confira! (Site para achar letras de músicas consumindo uma API externa).',
      href: 'https://claudiohenrique-dev.github.io/lyrics-search',
      media: '/static/img/lyrics-search.png',
    },
    {
      key: uuidv4(),
      title: 'Techflix',
      description:
        'Plataforma de vídeos recomendados para iniciantes em programação ou entusiastas de tecnologias, estilo Netflix.',
      href: 'https://techflix.01ch01.vercel.app',
      media: '/static/img/techflix.png',
    },
  ],
}
