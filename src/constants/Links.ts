import media1 from './../../public/static/img/monitorando.png'
import media2 from './../../public/static/img/lyrics-search.png'
import media3 from './../../public/static/img/techflix.png'

const Links = {
  homepage: 'https://claudiohenrique.vercel.app',
  projects: [
    {
      key: 0,
      title: 'Monitorando',
      description:
        'Rede Colaborativa de Monitoria Digital e Troca de Conhecimentos.\n [MVP de um Hackathon da faculdade.]',
      href: 'https://claudiohenrique-dev.github.io/monitorando',
      media: media1,
    },
    {
      key: 1,
      title: 'Lyrics Search',
      description:
        'Deseja cantar sua música favorita com seu artistas favorito? Confira!\n [Site para achar letras de músicas consumindo uma API externa.]',
      href: 'https://claudiohenrique-dev.github.io/lyrics-search',
      media: media2,
    },
    {
      key: 2,
      title: 'Techflix',
      description:
        'Plataforma de vídeos recomendados para iniciantes em programação ou entusiastas de tecnologias, estilo Netflix.',
      href: 'https://techflix.01ch01.vercel.app',
      media: media3,
    },
  ],
  internal: [
    { key: 0, name: 'Sobre', href: '#about' },
    { key: 1, name: 'Projetos', href: '#projects' },
    { key: 2, name: 'Experiências', href: '#experiences' },
    { key: 3, name: 'Contato', href: '#contact' },
  ],
}

export default Links
