
/**
 * Initialize intersection observer for scroll reveal animations
 */
export const initScrollReveal = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elements = document.querySelectorAll('.reveal');
  elements.forEach(el => observer.observe(el));
};

/**
 * Initialize smooth scrolling for anchor links
 */
export const initSmoothScroll = () => {
  const handleAnchorClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
      const targetId = target.getAttribute('href');
      const targetElement = document.querySelector(targetId || '');
      
      if (targetElement) {
        e.preventDefault();
        
        // Add a small offset to account for fixed header
        const headerHeight = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  document.addEventListener('click', handleAnchorClick);
  
  return () => {
    document.removeEventListener('click', handleAnchorClick);
  };
};
