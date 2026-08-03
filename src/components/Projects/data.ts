import type { IconType } from 'react-icons'
import {
  SiReact,
  SiTypescript,
  SiSass,
  SiStorybook,
  SiRedux,
  SiWebpack,
  SiMapbox,
  SiReactrouter,
  SiLottiefiles,
  SiNextdotjs,
  SiGraphql,
  SiGatsby,
  SiTailwindcss,
  SiStyledcomponents,
  SiFirebase,
  SiJquery,
  SiHandlebarsdotjs,
} from 'react-icons/si'

// brentford project
import ProjectBrentford from '../../assets/projects/brentford/project-brentford.webp'
import ProjectLogoBrentford from '../../assets/projects/brentford/project-logo-brentford.webp'
import ProjectBrentfordImage1 from '../../assets/projects/brentford/project-brentford-image1.webp'
import ProjectBrentfordImage2 from '../../assets/projects/brentford/project-brentford-image2.webp'

// southampton project
import ProjectSouthampton from '../../assets/projects/southampton/project-southampton.webp'
import ProjectLogoSouthampton from '../../assets/projects/southampton/project-logo-southampton.webp'
import ProjectSouthamptonImage1 from '../../assets/projects/southampton/project-southampton-image1.webp'
import ProjectSouthamptonImage2 from '../../assets/projects/southampton/project-southampton-image2.webp'

// other project
import ProjectOther from '../../assets/projects/other/project-other.webp'
import ProjectLogoOther from '../../assets/projects/other/project-logo-other.webp'
import ProjectOtherImage1 from '../../assets/projects/other/project-other-image1.webp'
import ProjectOtherImage2 from '../../assets/projects/other/project-other-image2.webp'

// web3 project
import ProjectWeb3 from '../../assets/projects/web3/project-web3.webp'

export interface Tech {
  icon: IconType
  name: string
}

export interface ProjectType {
  id: number
  name: string
  text: string
  tech: Tech[]
  imageSrc: string
  imageArray: [string, string]
  logoSrc: string
  link?: string
}

export const projectsData: ProjectType[] = [
  {
    id: 1,
    name: 'Brentford FC',
    text: 'Led front-end development, delivering pixel-perfect designs in React, TypeScript and Sass with Storybook. Collaborated closely with designers, PMs, clients and backend engineers to hit tight deadlines and ship the main and supplementary sites.',
    tech: [
      { icon: SiReact, name: 'React' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiSass, name: 'Sass' },
      { icon: SiStorybook, name: 'Storybook' },
      { icon: SiRedux, name: 'Redux' },
      { icon: SiWebpack, name: 'Webpack' },
      { icon: SiMapbox, name: 'Mapbox' },
    ],
    imageSrc: ProjectBrentford,
    imageArray: [ProjectBrentfordImage1, ProjectBrentfordImage2],
    logoSrc: ProjectLogoBrentford,
    link: 'https://www.brentfordfc.com/en',
  },
  {
    id: 2,
    name: 'Southampton FC',
    text: 'Led front-end development, iterating closely with designers on pixel-perfect UI in React, TypeScript and Sass with Storybook. Built the video streaming section, integrated with a .NET backend, and worked with PMs and backend engineers to meet deadlines.',
    tech: [
      { icon: SiReact, name: 'React' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiSass, name: 'Sass' },
      { icon: SiStorybook, name: 'Storybook' },
      { icon: SiRedux, name: 'Redux' },
      { icon: SiWebpack, name: 'Webpack' },
      { icon: SiReactrouter, name: 'React Router' },
      { icon: SiLottiefiles, name: 'Lottie' },
    ],
    imageSrc: ProjectSouthampton,
    imageArray: [ProjectSouthamptonImage2, ProjectSouthamptonImage1],
    logoSrc: ProjectLogoSouthampton,
    link: 'https://www.southamptonfc.com/en',
  },
  {
    id: 3,
    name: 'Other Work',
    text: 'Built multiple projects in React and Next.js at various digital agencies and maintained a large portfolio of legacy client sites including PSG and Team GB. Ran A/B tests and shipped features across varied tech stacks for brands including Louis Vuitton, Estée Lauder and Emirates, while also conducting code reviews and mentoring junior developers.',
    tech: [
      { icon: SiReact, name: 'React' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiNextdotjs, name: 'Next.js' },
      { icon: SiGraphql, name: 'GraphQL' },
      { icon: SiGatsby, name: 'Gatsby' },
      { icon: SiTailwindcss, name: 'Tailwind CSS' },
      { icon: SiStyledcomponents, name: 'Styled Components' },
      { icon: SiFirebase, name: 'Firebase' },
      { icon: SiJquery, name: 'jQuery' },
      { icon: SiHandlebarsdotjs, name: 'Handlebars' },
    ],
    imageSrc: ProjectOther,
    imageArray: [ProjectOtherImage1, ProjectOtherImage2],
    logoSrc: ProjectLogoOther,
    link: 'https://www.psg.fr/en',
  },
  {
    id: 4,
    name: 'Web3 Project',
    text: '',
    tech: [],
    imageSrc: ProjectWeb3,
    imageArray: [ProjectBrentfordImage1, ProjectBrentfordImage2],
    logoSrc: '',
    link: 'https://www.brentfordfc.com/en',
  },
]
