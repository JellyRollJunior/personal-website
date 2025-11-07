import arrowDown from '../assets/icons/arrow-down.svg';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

const ArrowDownLink = ({ className, href = '' }) => {
  return (
    <a className={`${className}`} href={href}>
      <img src={arrowDown} />
    </a>
  );
};

export { ArrowDownLink };
