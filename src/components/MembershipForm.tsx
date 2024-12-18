import React from 'react';
import { Modal } from './ui/Modal';

interface MembershipFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MembershipForm({ isOpen, onClose }: MembershipFormProps) {
  React.useEffect(() => {
    // Load HubSpot form script
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "44659598",
          formId: "1qxGlptJMRtCwG7cxErYEqAsxhz5",
          target: '#hubspotForm'
        });
      }
    });

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Apply for Membership</h2>
        <p className="mt-2 text-gray-600">Fill out the form below to get started</p>
      </div>
      <div id="hubspotForm"></div>
    </Modal>
  );
}