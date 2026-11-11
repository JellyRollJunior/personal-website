/* Imports */
import { FaCss3Alt, FaNodeJs, FaJava } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { DiRedis } from 'react-icons/di';
import { VscVscodeInsiders } from 'react-icons/vsc';
import {
  SiTanstack,
  SiVite,
  SiReactrouter,
  SiReact,
  SiFramer,
  SiEjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiExpress,
  SiSocketdotio,
  SiPassport,
  SiZod,
  SiPrisma,
  SiPostgresql,
  SiNeon,
  SiSupabase,
  SiGit,
  SiGithub,
  SiNpm,
  SiPnpm,
  SiTurborepo,
  SiDocker,
  SiNginx,
  SiLinux,
  SiRender,
  SiNetlify,
  SiKoyeb,
  SiVitest,
  SiJest,
  SiSelenium,
  SiJenkins,
  SiPostman,
} from 'react-icons/si';

const LANGUAGES = [
  { icon: SiJavascript, label: 'JavaScript' },
  { icon: SiTypescript, label: 'TypeScript' },
  { icon: SiHtml5, label: 'HTML5' },
  { icon: FaCss3Alt, label: 'CSS3' },
];

const FRONTEND = [
  { icon: SiReact, label: 'React' },
  { icon: RiTailwindCssFill, label: 'Tailwind CSS' },
  { icon: SiVite, label: 'Vite' },
  { icon: SiTanstack, label: 'TanStack Query' },
  { icon: SiReactrouter, label: 'React Router' },
  { icon: SiFramer, label: 'Framer Motion' },
  { icon: SiEjs, label: 'EJS' },
];

const BACKEND = [
  { icon: FaNodeJs, label: 'Node.js' },
  { icon: SiExpress, label: 'Express' },
  { icon: SiSocketdotio, label: 'Socket.IO' },
  { icon: SiPassport, label: 'Passport' },
  { icon: SiZod, label: 'Zod' },
];

const DATA = [
  { icon: SiPostgresql, label: 'PostgreSQL' },
  { icon: SiPrisma, label: 'Prisma' },
  { icon: DiRedis, label: 'Redis' },
  { icon: SiNeon, label: 'Neon' },
  { icon: SiSupabase, label: 'Supabase' },
];

const TOOLS = [
  { icon: SiGit, label: 'Git' },
  { icon: SiGithub, label: 'GitHub' },
  { icon: SiNpm, label: 'npm' },
  { icon: SiPnpm, label: 'pnpm' },
  { icon: SiTurborepo, label: 'Turborepo' },
  { icon: VscVscodeInsiders, label: 'VS Code' },
  { icon: SiPostman, label: 'Postman' },
];

const DEPLOY = [
  { icon: SiDocker, label: 'Docker' },
  { icon: SiNginx, label: 'Nginx' },
  { icon: SiLinux, label: 'Linux' },
  { icon: SiRender, label: 'Render' },
  { icon: SiNetlify, label: 'Netlify' },
  { icon: SiKoyeb, label: 'Koyeb' },
];

const TESTING = [
  { icon: SiVitest, label: 'Vitest' },
  { icon: SiJest, label: 'Jest' },
  { icon: FaJava, label: 'Java' },
  { icon: SiSelenium, label: 'Selenium' },
  { icon: SiJenkins, label: 'Jenkins' },
];

const SKILLS = Object.freeze({
  Languages: LANGUAGES,
  Frontend: FRONTEND,
  Backend: BACKEND,
  Data: DATA,
  Tools: TOOLS,
  Deploy: DEPLOY,
  Testing: TESTING,
});

export { SKILLS };
