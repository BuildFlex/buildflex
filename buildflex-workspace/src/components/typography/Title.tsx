import React from 'react';

interface TitleProps {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5;
}

const Title: React.FC<TitleProps> = ({ children, level }) => {
  const className = 'font-lato font-bold text-natural-dark-500';
  const sizeClass = {
    1: 'text-4xl',
    2: 'text-3xl',
    3: 'text-2xl',
    4: 'text-xl',
    5: 'text-lg',
  }[level];

  switch (level) {
    case 1:
      return <h1 className={`${className} ${sizeClass}`}>{children}</h1>;
    case 2:
      return <h2 className={`${className} ${sizeClass}`}>{children}</h2>;
    case 3:
      return <h3 className={`${className} ${sizeClass}`}>{children}</h3>;
    case 4:
      return <h4 className={`${className} ${sizeClass}`}>{children}</h4>;
    case 5:
      return <h5 className={`${className} ${sizeClass}`}>{children}</h5>;
    default:
      return null;
  }
};

export default Title;
