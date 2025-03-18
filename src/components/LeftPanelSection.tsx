import Contact from "@components/Contact";
import Certificate from "@components/Certificate";
import Skill from "@components/Skill";
import React, { ReactNode } from "react";

const LeftPanelSection = ({ title, children }: LeftPanelSectionProps) => {
  return (
    <div>
      <Contact />
      <Certificate />
      <Skill />
    </div>
  );
};

export interface LeftPanelSectionProps {
  title?: string;
  children?: ReactNode;
}

export default LeftPanelSection;
