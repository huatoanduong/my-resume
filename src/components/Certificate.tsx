import LeftPanelBlock from "@components/shared/LeftPanelBlock";
import React, { ReactNode } from "react";
import { certificatesSelector } from "selectors";
import { useStoreProfile } from "store";

const Certificate = ({}: CertificateProps) => {
  const certificates = useStoreProfile(certificatesSelector);

  return (
    <LeftPanelBlock title="Certificate">
      {certificates.map((certificate, index) => (
        <div key={index}>
          <p>{certificate.name}</p>
          <p>{certificate.institution}</p>
          <p>{certificate.year}</p>
          <p>{certificate.additionalNote}</p>
        </div>
      ))}
    </LeftPanelBlock>
  );
};

export interface CertificateProps {}

export default Certificate;
