import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FadeInOnScroll({
  children,
  direction = 'up', // up, down, left, right, none
  delay = 0,
  duration = 0.6,
  once = true
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: once,
    margin: "-100px" // Trigger animation 100px before element enters viewport
  });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 40, opacity: 0 };
      case 'down':
        return { y: -40, opacity: 0 };
      case 'left':
        return { x: 40, opacity: 0 };
      case 'right':
        return { x: -40, opacity: 0 };
      default:
        return { opacity: 0 };
    }
  };

  const getAnimatePosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { y: 0, opacity: 1 };
      case 'left':
      case 'right':
        return { x: 0, opacity: 1 };
      default:
        return { opacity: 1 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={isInView ? getAnimatePosition() : getInitialPosition()}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.25, 0.4, 0.25, 1] // Custom easing for smooth animation
      }}
    >
      {children}
    </motion.div>
  );
}

// Variant for staggered children animations
export function FadeInStagger({ children, staggerDelay = 0.1 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

// Individual item for staggered animations
export function FadeInStaggerItem({ children, direction = 'up' }) {
  const getInitialY = () => {
    switch (direction) {
      case 'up': return 20;
      case 'down': return -20;
      default: return 0;
    }
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: getInitialY() },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 }
        }
      }}
    >
      {children}
    </motion.div>
  );
}
