import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to detect when an element is visible in the viewport
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - A number between 0 and 1 indicating the percentage of the element's visibility needed to trigger the callback
 * @param {string} options.root - The element that is used as the viewport for checking visibility (null = browser viewport)
 * @param {string} options.rootMargin - Margin around the root element (format: "10px 20px 30px 40px")
 * @returns {Object} An object containing the ref to attach to the element and a boolean indicating if the element is in view
 */
export const useIntersection = (options = {}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // If the ref hasn't been assigned to an element yet, return early
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      // Update our state when observer callback fires
      setInView(entry.isIntersecting);
    }, {
      threshold: options.threshold || 0,
      root: options.root || null,
      rootMargin: options.rootMargin || '0px',
    });

    const currentRef = ref.current;
    observer.observe(currentRef);

    return () => {
      // Clean up the observer when the component unmounts
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.threshold, options.root, options.rootMargin, ref]);

  return { ref, inView };
}; 