import LeftPanelBlock from "@components/shared/LeftPanelBlock";
import React, { ReactNode } from "react";
import { contactsSelector } from "selectors";
import { useStoreProfile } from "store";

const Contact = ({}: ContactProps) => {
  const contacts = useStoreProfile(contactsSelector);

  return (
    <LeftPanelBlock title="Contact">
      <h2>Contact</h2>
      {contacts.map((contact, index) => (
        <div key={index}>
          <p>{contact.type}</p>
          <p>{contact.value}</p>
        </div>
      ))}
    </LeftPanelBlock>
  );
};

export interface ContactProps {}

export default Contact;
