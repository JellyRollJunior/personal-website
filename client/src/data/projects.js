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
import smmHome from '../assets/projects/sailorMoonMemory/index.png';
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

/* Project Data */
const cnnImages = [cnnChat, cnnHome, cnnMobile, cnnProfile];
const cnnTechStack = [
    { icon: react, name: 'React' },
    { icon: nodejs, name: 'NodeJS' },
    { icon: express, name: 'Express' },
    { icon: prisma, name: 'PrismaORM' },
    { icon: socketio, name: 'Socket.IO' },
];
const cisImages = [cisGameplay, cisStart];
const cisTechStack = [
    { icon: react, name: 'React' },
    { icon: nodejs, name: 'NodeJS' },
    { icon: express, name: 'Express' },
    { icon: prisma, name: 'PrismaORM' },
    { icon: jest, name: 'Jest' },
];
const fotImages = [fotHome, fotCategories];
const fotTechStack = [
    { icon: js, name: 'Javascript' },
    { icon: html, name: 'HTML' },
    { icon: js, name: 'EJS' },
    { icon: nodejs, name: 'NodeJS' },
    { icon: express, name: 'Express' },
    { icon: pg, name: 'PostgreSQL' },
];
const slImages = [slChat, slProfile];
const slTechStack = [
    { icon: react, name: 'React' },
    { icon: nodejs, name: 'NodeJS' },
    { icon: express, name: 'Express' },
    { icon: prisma, name: 'PrismaORM' },
    { icon: socketio, name: 'Socket.IO' },
];
const smmImages = [smmHome];
const smmTechStack = [{ icon: react, name: 'React' }];
/* Project Lists */
const otherProjectsList = [
    {
        title: 'Foods of Taiwan',
        description:
            'A user generated database of Taiwanese foods! Create/edit/delete foods & food categories with all entries stored on a remote SQL database',
        techStackArray: fotTechStack,
        images: fotImages,
    },
    {
        title: 'Sailor Moon Memory',
        description: 'Play a game of memory with sailor moon powered by Giphy!',
        techStackArray: smmTechStack,
        images: smmImages,
    },
    {
        title: 'Socket Lovers',
        description:
            'Real time messaging app with a clean minimal design. Message friends in real time through private and public chats, and customize your profile!',
        techStackArray: slTechStack,
        images: slImages,
    },
];

export { cnnImages, cnnTechStack, cisImages, cisTechStack, otherProjectsList };
