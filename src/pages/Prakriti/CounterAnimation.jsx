import React, { useEffect, useState, useRef } from 'react';

function CounterAnimation({ max }) {
  const [animated, setAnimated] = useState(false);
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          const duration = 3000;
          const steps = 60;
          const stepSize = Math.ceil(max / (duration / steps));
          const interval = setInterval(() => {
            setCount((prevCount) => {
              const newCount = prevCount + stepSize;
              return newCount <= max ? newCount : max;
            });
          }, duration / steps);
          setTimeout(() => {
            clearInterval(interval);
          }, duration);
        }
      },
      { threshold: 0.5 } 
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [animated, max]);

  return <p className='text-[25px]' ref={counterRef}>{count}</p>;
}

export default CounterAnimation;
