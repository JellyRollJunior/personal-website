import { MobileExperience } from "../MobileExperience.jsx";
import { MobileIntro } from "../MobileIntro.jsx";
import { MobileWorks } from "../MobileWorks.jsx";

const MOBILE_SECTIONS = [
    { id: 'intro', label: 'intro', labelFull: 'Introduction', Component: MobileIntro },
    { id: 'works', label: 'works', labelFull: 'Works', Component: MobileWorks },
    { id: 'experience', label: 'exp', labelFull: 'Experience', Component: MobileExperience },
    // { id: 'skills', label: 'skills' },
    // { id: 'about', label: 'about' },
    // { id: 'contact', label: 'contact' },
];

export { MOBILE_SECTIONS };
