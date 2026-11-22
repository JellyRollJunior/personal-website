import { MobileAboutMe } from '../MobileAboutMe.jsx';
import { MobileContact } from '../MobileContact.jsx';
import { MobileExperience } from '../MobileExperience.jsx';
import { MobileIntro } from '../MobileIntro.jsx';
import { MobileSkills } from '../MobileSkills.jsx';
import { MobileWorks } from '../MobileWorks.jsx';

const MOBILE_SECTIONS = [
    {
        id: 'intro',
        label: 'intro',
        labelFull: 'Brandon Lin',
        Component: MobileIntro,
    },
    { id: 'works', label: 'works', labelFull: 'Works', Component: MobileWorks },
    {
        id: 'experience',
        label: 'exp',
        labelFull: 'Experience',
        Component: MobileExperience,
    },
    {
        id: 'skills',
        label: 'skills',
        labelFull: 'Skills',
        Component: MobileSkills,
    },
    {
        id: 'about',
        label: 'about',
        labelFull: 'About Me',
        Component: MobileAboutMe,
    },
    {
        id: 'contact',
        label: 'contact',
        labelFull: 'Contact',
        Component: MobileContact,
    },
];

export { MOBILE_SECTIONS };
