
import React from 'react';
import LegalHeader from '../../Sections/Legal/LegalHeader';

const TermsPage = () => {
  return (
    <>
      <LegalHeader title="Terms of Service" lastUpdated="September 15, 2025" />
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[800px] mx-auto text-secondary leading-relaxed space-y-12">
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-primary uppercase tracking-tight">1. Agreement to Terms</h3>
            <p>
              By accessing or using the Geonova Systems website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-primary uppercase tracking-tight">2. Intellectual Property Rights</h3>
            <p>
              Other than the content you own, under these Terms, Geonova Systems and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-primary uppercase tracking-tight">3. Restrictions</h3>
            <p>
              You are specifically restricted from all of the following:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Publishing any Website material in any other media;</li>
              <li>Selling, sublicensing and/or otherwise commercializing any Website material;</li>
              <li>Publicly performing and/or showing any Website material;</li>
              <li>Using this Website in any way that is or may be damaging to this Website;</li>
              <li>Using this Website in any way that impacts user access to this Website;</li>
              <li>Using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-primary uppercase tracking-tight">4. Limitation of Liability</h3>
            <p>
              In no event shall Geonova Systems, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Geonova Systems, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-primary uppercase tracking-tight">5. Governing Law & Jurisdiction</h3>
            <p>
              These Terms will be governed by and interpreted in accordance with the laws of the State of California, and you submit to the non-exclusive jurisdiction of the state and federal courts located in California for the resolution of any disputes.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default TermsPage;