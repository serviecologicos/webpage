export const useScrollTo = () => {
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const headerHeight = 73; // Altura del navbar
    const topPosition = element.offsetTop - headerHeight;

    // Usar scrollTo con behavior smooth
    window.scrollTo({
      top: topPosition,
      behavior: 'smooth'
    });
  };

  return { scrollToElement };
};
