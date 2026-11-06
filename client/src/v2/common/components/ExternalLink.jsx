// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';

import { useState } from 'react';

const ExternalLink = ({ className, href, children }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <a
      className={`relative ${className}`}
      href={href}
      target="_blank"
      rel="noopener"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {children}
      {isHover && (
        <motion.div
          className="external-link-highlight absolute bottom-px left-0 h-0.5 w-full rounded-lg"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        />
      )}
    </a>
  );
};

export { ExternalLink };
