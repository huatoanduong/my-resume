import LeftPanelBlock from "@components/shared/LeftPanelBlock";
import React, { ReactNode } from "react";
import { skillsSelector } from "selectors";
import { useStoreProfile } from "store";

const Skill = ({}: SkillProps) => {
  const skils = useStoreProfile(skillsSelector);

  return (
    <LeftPanelBlock title="Skill">
      {skils.map((skill, index) => (
        <div key={index}>
          <p>{skill.name}</p>
          <p>{skill.experience}</p>
        </div>
      ))}
    </LeftPanelBlock>
  );
};

export interface SkillProps {}

export default Skill;
