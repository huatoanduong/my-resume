import React, { ReactNode } from 'react';

const LeftPanelBlock = ({ title, children }: LeftPanelBlockProps) => {

  return (
    <div className="left-panel-block">
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export interface LeftPanelBlockProps {
  title?: string;
  children?: ReactNode;
}

export default LeftPanelBlock;