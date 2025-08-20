'use client';
import React from 'react';
import Ticker from 'react-ticker';
import { RenderWithReact17 } from 'render-with-react17';

interface IProps {
  className?: HTMLElement['className'];
  direction?: 'toRight' | 'toLeft';
}

const Marquee: React.FCC<IProps> = ({ children, direction = 'toLeft' }) => {
  return (
    <RenderWithReact17>
      <Ticker direction={direction}>
        {({ index }) => <div>{children}</div>}
      </Ticker>
    </RenderWithReact17>
  );
};

export default Marquee;
