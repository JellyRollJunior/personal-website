import buildIcon from './../../../assets/icons/build.svg';
import mailIcon from './../../../assets/icons/mail.svg';
import personIcon from './../../../assets/icons/person.svg';
import workHistoryIcon from './../../../assets/icons/work_history.svg';
import codeIcon from './../../../assets/icons/code.svg';
import starIcon from './../../../assets/icons/star.svg';

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
        icon: personIcon,
        labelFull: 'Brandon Lin',
        Component: MobileIntro,
    },
    {
        id: 'works',
        label: 'works',
        icon: buildIcon,
        labelFull: 'Works',
        Component: MobileWorks,
    },
    {
        id: 'experience',
        label: 'exp',
        icon: workHistoryIcon,
        labelFull: 'Experience',
        Component: MobileExperience,
    },
    {
        id: 'skills',
        label: 'skills',
        icon: codeIcon,
        labelFull: 'Skills',
        Component: MobileSkills,
    },
    {
        id: 'about',
        label: 'about',
        icon: starIcon,
        labelFull: 'About Me',
        Component: MobileAboutMe,
    },
    {
        id: 'contact',
        label: 'contact',
        icon: mailIcon,
        labelFull: 'Contact',
        Component: MobileContact,
    },
];

export { MOBILE_SECTIONS };
