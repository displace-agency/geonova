
import React from 'react';
import LegalHeader from '../../Sections/Legal/LegalHeader';

const PrivacyPage = () => {
  return (
    <>
      <LegalHeader title="Privacy Policy" lastUpdated="September 15, 2025" />
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[800px] mx-auto text-secondary leading-relaxed space-y-12">
          
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-primary uppercase tracking-tight">1. Introduction</h3>
            <p>
              Geonova Systems ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-primary uppercase tracking-tight">2. The Data We Collect</h3>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-primary uppercase tracking-tight">3. How We Use Your Data</h3>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-primary uppercase tracking-tight">4. Data Security</h3>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-primary uppercase tracking-tight">5. Contact Details</h3>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:privacy@geonova.systems" className="text-primary hover:underline">privacy@geonova.systems</a>.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default PrivacyPage;