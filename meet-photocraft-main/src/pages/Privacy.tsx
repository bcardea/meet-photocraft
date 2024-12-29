import React from 'react';
import { LegalPage } from '../components/Legal/LegalPage';
import { privacyContent } from './content/privacyContent';

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="12-2024"
      content={privacyContent}
    />
  );
}