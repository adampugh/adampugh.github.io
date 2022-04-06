import PrepXP from '../images/prepxp.webp';
import PrepXPMobile from '../images/prepxp-mobile.webp';
import Kokonoka from '../images/kokonoka.webp';
import KokonokaMobile from '../images/kokonoka-mobile.webp';
import DailyHIIT from '../images/daily-hiit.webp';
import DailyHIITMobile from '../images/daily-hiit-mobile.webp';
import Portfolio from '../images/portfolio.webp';
import PortfolioMobile from '../images/portfolio-mobile.webp';

export const projects = [
    {
        image: DailyHIIT,
        device: DailyHIITMobile,
        heading: 'Daily HIIT',
        gitHubLink: 'https://github.com/adampugh/dailyhiit',
        tech: 'NEXT | TYPESCRIPT',
        text: 'DailyHIIT is a responsive web application built in Next.js, TypeScript and Tailwind that allows users to keep track of their daily workout routines via a dashboard built with Chart.js. Authentication is handled by Firebase and the app is hosted on Vercel.',
        projectLink: 'https://dailyhiit.vercel.app/',
    },
    {
        image: PrepXP,
        device: PrepXPMobile,
        heading: 'PrepXP',
        gitHubLink: 'https://github.com/adampugh/prepxp',
        tech: 'REACT | REDUX | FIREBASE',
        text: 'PrepXP is a web application built in React, Redux and Firebase that allows users to create and search for lists of job interview questions. PrepXP features a blog section created in Node and a comprehensive test suite built in Jest and Enzyme.',
        projectLink: 'https://adampugh.github.io/prepxp/',
    },
    {
        image: Kokonoka,
        device: KokonokaMobile,
        heading: 'Kokonoka',
        gitHubLink: 'https://github.com/adampugh/kokonoka-digital',
        tech: 'REACT | FRAMER MOTION',
        text: 'Kokonoka is a fully responsive digital agency website designed in Figma and built in React with custom animations using Framer Motion and GSAP. The web application is styled in SASS and hosted via Netlify.',
        projectLink: 'http://www.kokonoka.io',
    },
    {
        image: Portfolio,
        device: PortfolioMobile,
        heading: 'Portfolio',
        gitHubLink: 'https://github.com/adampugh/portfolioV2',
        tech: 'REACT | THREE.JS | SASS',
        text: 'This portfolio site is built in React and styled in SASS. Three.js and React Fiber are used to handle 3D models and custom animations are built and designed using Framer Motion and GSAP.',
        projectLink: 'adampugh.github.io',
    },
];

export const numerals = ['I', 'II', 'III', 'IV'];
