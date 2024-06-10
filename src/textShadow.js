// src/hooks/useTextShadow.js

import { useEffect } from 'react';

const useTextShadow = () => {
  useEffect(() => {
    const applyTextShadows = () => {
      const colorClasses = [
        'text-red-500',
        'text-blue-500',
        'text-green-500',
        'text-green-600',
        'text-green-50',
        'text-green-800',
        'text-yellow-500',
        'text-purple-500'
      ];

      colorClasses.forEach(colorClass => {
        const elements = document.querySelectorAll(`.${colorClass}`);
        const shadowClass = `textshadow-${colorClass.replace('text-', '')}`;
        elements.forEach(element => {
          element.classList.add(shadowClass);
        });
      });
    };

    const observer = new MutationObserver(applyTextShadows);

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    applyTextShadows(); // Apply the shadows initially

    return () => {
      observer.disconnect();
    };
  }, []);
};

export default useTextShadow;