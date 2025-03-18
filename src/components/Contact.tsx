import LeftPanelBlock from "@components/shared/LeftPanelBlock";
import React, { ReactNode } from 'react';

const Contact = ({ }: ContactProps) => {
  return (
    <LeftPanelBlock title="Contact">
      <h2>Contact</h2>
    </LeftPanelBlock>
  );
};

export interface ContactProps {
}

export default Contact;