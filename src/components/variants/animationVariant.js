export const baseContainerVariant = {
  initial: {
    x: "100vw",
    opacity: 0,
  },
  final: {
    x: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      type: "spring",
      stiffness: 120,
    //   delay: 0.5,
    },
  },
};
