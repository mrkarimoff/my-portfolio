// Home Section
export const container = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};

// Icons
export const icon = {
  hover: { rotate: [0, 90, -90, 0], transition: { duration: 2 }, cursor: "pointer" },
};

export const iconNode = {
  hover: {
    rotate: [0, 10, -10, 0],
    scale: 1.5,
    transition: { duration: 1, type: "keyframes", ease: "easeInOut" },
    cursor: "pointer",
  },
};

// Section title
export const title = {
  hidden: { x: "-100%" },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 25,
    },
  },
};
