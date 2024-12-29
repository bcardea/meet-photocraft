import React from 'react';
import { LegalPage } from '../components/Legal/LegalPage';
import { termsContent } from './content/termsContent';

export default function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      lastUpdated="12-2024"
      content={termsContent}
    />
  );
}