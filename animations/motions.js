// Sidebar
export const sidebar = {
  hidden: { x: "-100%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, type: "tween" } },
};

// Home Section
export const container = {
  hidden: { y: "100%" },
  visible: {
    y: 0,
    transition: {
      delay: 1.5,
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
  },
};

// About section
export const mainImg = {
  hidden: { scale: 0 },
  visible: { rotate: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 20 } },
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};

export const textAnim = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
};

export const resumeBtn = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, rotate: [0, 20, 0] },
};
