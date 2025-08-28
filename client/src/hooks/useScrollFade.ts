import { useState, useEffect, useRef } from 'react';

export function useScrollFade() {
  const [opacity, setOpacity] = useState(1);
  const [blur, setBlur] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const element = elementRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate visibility based on element position
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const elementHeight = rect.height;
      
      // Fade zones (in pixels from viewport edges)
      const fadeZone = 200;
      
      let newOpacity = 1;
      let newBlur = 0;
      
      // Fade out when scrolling up (element moving down)
      if (elementTop > windowHeight - fadeZone) {
        const fadeProgress = (elementTop - (windowHeight - fadeZone)) / fadeZone;
        newOpacity = Math.max(0, 1 - fadeProgress);
        newBlur = Math.min(10, fadeProgress * 10);
      }
      // Fade out when scrolling down (element moving up)
      else if (elementBottom < fadeZone) {
        const fadeProgress = (fadeZone - elementBottom) / fadeZone;
        newOpacity = Math.max(0, 1 - fadeProgress);
        newBlur = Math.min(10, fadeProgress * 10);
      }
      // Fade in when element is in viewport
      else if (elementTop < fadeZone && elementTop >= 0) {
        const fadeProgress = elementTop / fadeZone;
        newOpacity = Math.max(0.1, 1 - fadeProgress * 0.3);
        newBlur = Math.min(3, fadeProgress * 3);
      }
      // Fade in when element bottom is approaching viewport bottom
      else if (elementBottom > windowHeight - fadeZone && elementBottom <= windowHeight) {
        const fadeProgress = (windowHeight - elementBottom) / fadeZone;
        newOpacity = Math.max(0.1, 1 - fadeProgress * 0.3);
        newBlur = Math.min(3, fadeProgress * 3);
      }
      
      setOpacity(newOpacity);
      setBlur(newBlur);
    };

    // Initial calculation
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    elementRef,
    style: {
      opacity,
      filter: `blur(${blur}px)`,
      transition: 'opacity 0.3s ease-out, filter 0.3s ease-out'
    }
  };
}