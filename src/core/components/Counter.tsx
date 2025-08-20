import React, { FC } from 'react';
import CountUp from 'react-countup';

interface IProps {
  value: string;
  className?: string;
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  duration?: number;
}

const Counter: FC<IProps> = ({
  value,
  className,
  element = 'p',
  duration = 2.75,
}) => {
  const characters = value.split(/[\W\d]+/).join('');
  const numbers = value.split(/[^\d]+/).join('');
  const specialCharacters = value.split(/[A-Za-z0-9]+/).join('');

  const CountElement = element || 'span';

  return (
    <CountUp
      suffix={` ${characters || specialCharacters}`}
      redraw={true}
      start={0}
      end={Number(numbers)}
      enableScrollSpy
      scrollSpyOnce
      duration={duration}
    >
      {({ countUpRef }) =>
        React.createElement(CountElement, {
          ref: countUpRef,
          className: className, // Pass className to the specified HTML element
        })
      }
    </CountUp>
  );
};

export default Counter;
