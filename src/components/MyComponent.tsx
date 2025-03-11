import React, { FC } from 'react';

const MyComponent = ({ title, description }: MyComponentProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div >
  );
};

interface MyComponentProps {
  title: string;
  description?: string;
}

export { MyComponent };
export type { MyComponentProps };
