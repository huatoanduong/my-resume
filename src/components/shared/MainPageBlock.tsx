import React, { ReactNode } from 'react';

const MainPageBlock = ({ title, children }: MainPageBlockProps) => {

  return (
    <div className="left-panel-block">
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export interface MainPageBlockProps {
  title?: string;
  children?: ReactNode;
}

export default MainPageBlock;