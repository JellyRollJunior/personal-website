/* Chiikawa News Network */
import cnnChat from '../assets/projects/chiikawaNewsNetwork/chat.webp';
import cnnHome from '../assets/projects/chiikawaNewsNetwork/home.webp';
import cnnMobile from '../assets/projects/chiikawaNewsNetwork/mobile.webp';
import cnnProfile from '../assets/projects/chiikawaNewsNetwork/profile.webp';
/* Chiikawa I Spy */
import cisGameplay from '../assets/projects/chiikawaISpy/gameplay.gif';
import cisStart from '../assets/projects/chiikawaISpy/start-page.png';
/* Foods of Taiwan */
import fotHome from '../assets/projects/foodsOfTaiwan/foods-page.gif';
import fotCategories from '../assets/projects/foodsOfTaiwan/categories-page.gif';
/* Socket Lovers */
import slChat from '../assets/projects/socketLovers/creating-chat.gif';
import slProfile from '../assets/projects/socketLovers/edit-profile.gif';
/* Sailor Moon Memory */
import smmHome from '../assets/projects/sailorMoonMemory/memory-home.png';
import smmWin from '../assets/projects/sailorMoonMemory/memory-win.png';
/* Tech */
import react from '../assets/icons/react.svg';
import nodejs from '../assets/icons/nodejs.svg';
import express from '../assets/icons/express.svg';
import prisma from '../assets/icons/prisma.svg';
import socketio from '../assets/icons/socketio.svg';
import jest from '../assets/icons/jest.svg';
import pg from '../assets/icons/postgresql.svg';
import js from '../assets/icons/js.svg';
import html from '../assets/icons/html.svg';
import ejs from '../assets/icons/ejs.svg';

/* Project Data */
const CNN_IMAGES = [cnnChat, cnnHome, cnnMobile, cnnProfile];
const CNN_STACK = [
    { icon: react, name: 'React' },
    { icon: nodejs, name: 'NodeJS' },
    { icon: express, name: 'Express' },
    { icon: prisma, name: 'PrismaORM' },
    { icon: socketio, name: 'Socket.IO' },
];
const CIS_IMAGES = [cisGameplay, cisStart];
const CIS_STACK = [
    { icon: react, name: 'React' },
    { icon: nodejs, name: 'NodeJS' },
    { icon: express, name: 'Express' },
    { icon: prisma, name: 'PrismaORM' },
    { icon: jest, name: 'Jest' },
];
const FOT_IMAGES = [fotHome, fotCategories];
const FOT_STACK = [
    { icon: js, name: 'Javascript' },
    { icon: html, name: 'HTML' },
    { icon: ejs, name: 'EJS' },
    { icon: nodejs, name: 'NodeJS' },
    { icon: express, name: 'Express' },
    { icon: pg, name: 'PostgreSQL' },
];
const SL_IMAGES = [slChat, slProfile];
const SL_STACK = [
    { icon: react, name: 'React' },
    { icon: nodejs, name: 'NodeJS' },
    { icon: express, name: 'Express' },
    { icon: prisma, name: 'PrismaORM' },
    { icon: socketio, name: 'Socket.IO' },
];
const SMM_IMAGES = [smmHome, smmWin];
const SMM_STACK = [{ icon: react, name: 'React' }];

/* Projects */
const CHIIKAWA_NEWS_NETWORK = {
    title: 'Chiikawa News Network',
    description:
        'Social networking by and for Chiikawa enjoyers. Message friends in real time through private and public chats, share posts, customize your profile, and interact through likes & comments!',
    techStackArray: CNN_STACK,
    images: CNN_IMAGES,
    repoLink: 'https://github.com/JellyRollJunior/chiikawa-news-network',
    projectLink: 'https://chiikawa-news-network.netlify.app/',
};
const CHIIKAWA_I_SPY = {
    title: 'Chiikawa I Spy',
    description:
        'Play a rousing game of I Spy with Chiikawa and friends! Can you spot all the cute critters?',
    techStackArray: CIS_STACK,
    images: CIS_IMAGES,
    repoLink: 'https://github.com/JellyRollJunior/i-spy-chiikawa',
    projectLink: 'https://i-spy-chiikawa.netlify.app/',
};
const SAILOR_MOON_MEMORY = {
    title: 'Sailor Moon Memory',
    description: 'Play a game of memory with sailor moon powered by Giphy!',
    techStackArray: SMM_STACK,
    images: SMM_IMAGES,
    repoLink: 'https://github.com/JellyRollJunior/sailor-moon-memory',
    projectLink: 'https://sailor-moon-memory.netlify.app/',
};
const SOCKET_LOVERS = {
    title: 'Socket Lovers',
    description:
        'Real time messaging app with a clean minimal design. Message friends in real time through private and public chats, and customize your profile!',
    techStackArray: SL_STACK,
    images: SL_IMAGES,
    repoLink: 'https://github.com/JellyRollJunior/socket-lovers',
};
const FOODS_OF_TAIWAN = {
    title: 'Foods of Taiwan',
    description:
        'A user generated database of Taiwanese foods! Create/edit/delete foods & food categories with all entries stored on a remote SQL database',
    techStackArray: FOT_STACK,
    images: FOT_IMAGES,
    repoLink: 'https://github.com/JellyRollJunior/foods-of-taiwan',
};

export {
    CHIIKAWA_NEWS_NETWORK,
    CHIIKAWA_I_SPY,
    SAILOR_MOON_MEMORY,
    SOCKET_LOVERS,
    FOODS_OF_TAIWAN,
};
