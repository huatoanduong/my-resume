import React from 'react';

const MyComponent: React.FC<MyComponentProps> = ({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
export interface MyComponentProps {
  title?: string;
  description?: string;
}

export default MyComponent;