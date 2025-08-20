'use client';
import React, { useEffect, useState } from 'react';

interface IProps {
  texts: string[];
  fontSize: number;
}
const TextFlip: React.FC<IProps> = ({ texts, fontSize }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [texts]);

  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: fontSize,
      }}
    >
      {texts.map((text, index) => (
        <span
          key={index}
          className="absolute left-0 top-0 text-inherit opacity-0 aria-checked:animate-fade-up"
          aria-checked={index === activeIndex}
        >
          {text}
        </span>
      ))}
    </div>
  );
};

export default TextFlip;
