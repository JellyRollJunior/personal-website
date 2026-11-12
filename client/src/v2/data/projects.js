/* Trickcal Bug Tracker */
import tbtMove from './../assets/images/trickcalBugTracker/move-ticket.gif';
import tbtBoard from './../assets/images/trickcalBugTracker/boards-dark.png';
import tbtTicket from './../assets/images/trickcalBugTracker/boards-ticket.png';
/* Chiikawa News Network */
import cnnChat from './../assets/images/chiikawaNewsNetwork/chat.webp';
import cnnHome from './../assets/images/chiikawaNewsNetwork/home.webp';
import cnnMobile from './../assets/images/chiikawaNewsNetwork/mobile.webp';
import cnnProfile from './../assets/images/chiikawaNewsNetwork/profile.webp';
/* Chiikawa I Spy */
import cisGameplay from './../assets/images/chiikawaISpy/gameplay.gif';
import cisStart from './../assets/images/chiikawaISpy/start-page.png';
/* Sailor Moon Memory */
import smmHome from './../assets/images/sailorMoonMemory/memory-home.png';
import smmLoading from './../assets/images/sailorMoonMemory/memory-loading.gif';

import {
    SiExpress,
    SiPrisma,
    SiSocketdotio,
    SiJavascript,
    SiReact,
    SiTypescript,
    SiTanstack,
    SiRedis,
    SiPostgresql,
    SiZod,
    SiDocker,
} from 'react-icons/si';

/* Icon Label Pairs */
const EXPRESS = { icon: SiExpress, label: 'Express' };
const PRISMA = { icon: SiPrisma, label: 'Prisma' };
const SOCKET_IO = { icon: SiSocketdotio, label: 'Socket.IO' };
const JAVASCRIPT = { icon: SiJavascript, label: 'JavaScript' };
const REACT = { icon: SiReact, label: 'React' };
const TYPESCRIPT = { icon: SiTypescript, label: 'TypeScript' };
const TANSTACK = { icon: SiTanstack, label: 'TanStack' };
const REDIS = { icon: SiRedis, label: 'Redis' };
const POSTGRESQL = { icon: SiPostgresql, label: 'PostgreSQL' };
const ZOD = { icon: SiZod, label: 'Zod' };
const DOCKER = { icon: SiDocker, label: 'Docker' };

/* Projects */
const TRICKCAL_BUG_TRACKER = {
    id: 'trickcal-bug-tracker',
    title: 'Trickcal Bug Tracker',
    description:
        'A Kanban board where your whole team stays in sync. Every create, edit, delete, or move syncs to everyone the moment it happens. No refreshing needed.',
    images: [tbtMove, tbtBoard, tbtTicket],
    stackIcons: [
        TYPESCRIPT,
        REACT,
        TANSTACK,
        EXPRESS,
        PRISMA,
        SOCKET_IO,
        REDIS,
        ZOD,
        DOCKER,
    ],
    repoLink: 'https://github.com/JellyRollJunior/trickcal-bug-tracker',
    demoLink: 'https://trickcal-bug-tracker.netlify.app/',
};

const CHIIKAWA_NEWS_NETWORK = {
    id: 'chiikawa-news-network',
    title: 'Chiikawa News Network',
    description:
        'Social networking by and for Chiikawa enjoyers. Message friends in real time through private and public chats, share posts, customize your profile, and interact through likes & comments!',
    images: [cnnHome, cnnMobile, cnnProfile, cnnChat],
    stackIcons: [JAVASCRIPT, REACT, EXPRESS, PRISMA, POSTGRESQL, SOCKET_IO],
    repoLink: 'https://github.com/JellyRollJunior/chiikawa-news-network',
    demoLink: 'https://chiikawa-news-network.netlify.app/',
};

const CHIIKAWA_I_SPY = {
    id: 'chiikawa-i-spy',
    title: 'Chiikawa I Spy',
    description:
        'Play a rousing game of I Spy with Chiikawa and friends! Can you spot all the cute critters?',
    images: [cisGameplay, cisStart],
    repoLink: 'https://github.com/JellyRollJunior/i-spy-chiikawa',
    demoLink: 'https://i-spy-chiikawa.netlify.app/',
};

const SAILOR_MOON_MEMORY = {
    id: 'sailor-moon-memory',
    title: 'Sailor Moon Memory',
    description: 'Play a game of memory with sailor moon powered by Giphy!',
    images: [smmHome, smmLoading],
    repoLink: 'https://github.com/JellyRollJunior/ts-memory',
    demoLink: 'https://sailor-moon-memory.netlify.app/',
};

const PROJECTS = [
    TRICKCAL_BUG_TRACKER,
    CHIIKAWA_NEWS_NETWORK,
    CHIIKAWA_I_SPY,
    SAILOR_MOON_MEMORY,
];

export { PROJECTS };

export {
    TRICKCAL_BUG_TRACKER,
    CHIIKAWA_NEWS_NETWORK,
    CHIIKAWA_I_SPY,
    SAILOR_MOON_MEMORY,
};
