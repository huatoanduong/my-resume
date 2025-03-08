import React from 'react';
import { MyComponentProps } from '../types';

const MyComponent: React.FC<MyComponentProps> = ({ title, description }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default MyComponent;