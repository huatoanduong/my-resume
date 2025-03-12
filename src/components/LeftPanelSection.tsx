import Contact from "@components/Contact";
import Education from "@components/Education";
import Skill from "@components/Skill";
import React, { ReactNode } from 'react';

const LeftPanelSection = ({ title, children }: LeftPanelSectionProps) => {

  return (
    <div>
      <Contact />
      <Education />
      <Skill />
    </div>
  );
};

export interface LeftPanelSectionProps {
  title?: string;
  children?: ReactNode;
}

export default LeftPanelSection;