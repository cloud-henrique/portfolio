import monitorandoImg from '../assets/img/projects/monitorando.png'
import lyricsImg from '../assets/img/projects/lyrics-search.png'
import techflixImg from '../assets/img/projects/techflix.png'

const Links = {
  homepage: 'https://claudiohenrique.vercel.app',
  github: 'https://github.com/claudiohenrique-dev',
  linkedin: 'https://linkedin.com/in/cloud-henrique',
  telegram: 'https://t.me/cloud_henrique',
  email: 'mailto:00claudio.henrique@gmail.com',

  internal: [
    { key: 0, name: 'Sobre', href: '#about' },
    { key: 1, name: 'Projetos', href: '#projects' },
    { key: 2, name: 'Experiências', href: '#experiences' },
    { key: 3, name: 'Contato', href: '#contact' },
  ],

  projects: [
    {
      key: 0,
      title: 'Monitorando',
      description:
        'Rede Colaborativa de Monitoria Digital e Troca de Conhecimentos (MVP de um Hackathon da faculdade).',
      href: 'https://claudiohenrique-dev.github.io/monitorando',
      media: monitorandoImg,
    },
    {
      key: 1,
      title: 'Lyrics Search',
      description:
        'Deseja cantar sua música favorita com seu artista favorito? Confira! (Site para achar letras de músicas consumindo uma API externa).',
      href: 'https://claudiohenrique-dev.github.io/lyrics-search',
      media: lyricsImg,
    },
    {
      key: 2,
      title: 'Techflix',
      description:
        'Plataforma de vídeos recomendados para iniciantes em programação ou entusiastas de tecnologias, estilo Netflix.',
      href: 'https://techflix.01ch01.vercel.app',
      media: techflixImg,
    },
  ],
}

export default Links
