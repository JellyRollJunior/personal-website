import {
  // Languages
  JAVASCRIPT,
  TYPESCRIPT,
  HTML5,
  CSS3,
  JAVA,
  // Frontend
  REACT,
  TAILWIND,
  VITE,
  TANSTACK_QUERY,
  REACT_ROUTER,
  FRAMER_MOTION,
  EJS,
  // Backend
  NODE,
  EXPRESS,
  SOCKET_IO,
  PASSPORT,
  ZOD,
  // Data
  POSTGRESQL,
  PRISMA,
  REDIS,
  NEON,
  SUPABASE,
  // Tools
  GIT,
  GITHUB,
  NPM,
  PNPM,
  TURBOREPO,
  VS_CODE,
  POSTMAN,
  // Deploy
  DOCKER,
  NGINX,
  LINUX,
  RENDER,
  NETLIFY,
  KOYEB,
  // Testing
  VITEST,
  JEST,
  SELENIUM,
  JENKINS,
} from './iconLabelPairs.js';

const LANGUAGES = {
  id: 'languages',
  title: 'Languages',
  icons: [JAVASCRIPT, TYPESCRIPT, HTML5, CSS3, JAVA],
};

const FRONTEND = {
  id: 'frontend',
  title: 'Frontend',
  icons: [
    REACT,
    TAILWIND,
    VITE,
    TANSTACK_QUERY,
    REACT_ROUTER,
    FRAMER_MOTION,
    EJS,
  ],
};

const BACKEND = {
  id: 'backend',
  title: 'Backend',
  icons: [NODE, EXPRESS, SOCKET_IO, PASSPORT, ZOD],
};

const DATA = {
  id: 'data',
  title: 'Data',
  icons: [POSTGRESQL, PRISMA, REDIS, NEON, SUPABASE],
};

const TOOLS = {
  id: 'tools',
  title: 'Tools',
  icons: [GIT, GITHUB, NPM, PNPM, TURBOREPO, VS_CODE, POSTMAN],
};

const DEPLOY = {
  id: 'deploy',
  title: 'Deploy',
  icons: [DOCKER, NGINX, LINUX, RENDER, NETLIFY, KOYEB],
};

const TESTING = {
  id: 'testing',
  title: 'Testing',
  icons: [VITEST, JEST, SELENIUM, JENKINS],
};

const SKILLS = Object.freeze([
  TESTING,
  FRONTEND,
  LANGUAGES,
  BACKEND,
  TOOLS,
  DEPLOY,
  DATA,
]);

export { SKILLS };
