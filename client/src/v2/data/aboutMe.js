import imageIcon from './../assets/icons/image.svg';
import sick from './../assets/images/sick-fit.jpeg';
import onyx from './../assets/images/onny-pie.jpeg';
import prefire from './../assets/images/pottery-prefire.jpeg';

const SICK_FIT = {
    id: 'about:fashion',
    icon: imageIcon,
    title: 'sick-fit.jpg',
    src: sick,
};

const ONYX = {
    id: 'about:onyx',
    icon: imageIcon,
    title: 'onyx.jpg',
    src: onyx,
};

const POTTERY = {
    id: 'about:pottery',
    icon: imageIcon,
    title: 'pottery-prefire.jpg',
    src: prefire,
};

const ABOUT_ME_IMAGES = [SICK_FIT, ONYX, POTTERY];

const INTERESTS = [
    'fashion',
    'music',
    'pottery',
    'gaming',
    'art-and-design',
    'food',
    'onyx',
];

export { ABOUT_ME_IMAGES, INTERESTS };
