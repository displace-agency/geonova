import React from 'react';
import RevealText from '../../ui/RevealText';

const ThesisSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 border-b border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="lg:w-1/3">
            <span className="text-xs font-mono text-secondary mb-6 block uppercase tracking-widest">Our Thesis</span>
            <h2 className="text-3xl md:text-5xl font-medium leading-tight uppercase tracking-tight">
               Technology must work in service of the soil.
            </h2>
          </div>

          <div className="lg:w-2/3 space-y-8 text-secondary leading-relaxed text-lg">
            <p className="text-primary font-medium text-2xl leading-tight mb-8">
               At Geonova Systems, we believe that the next agricultural revolution won't be chemical—it will be digital and biological. We are building the tools to understand the complexity of the natural world, allowing farmers and conservationists to work with nature rather than against it.
            </p>
            <p>
               Our lands are degrading at an alarming rate. Soil health is declining, biodiversity is vanishing, and climate instability threatens food security globally. The problem isn't a lack of intent, but a lack of visibility. You cannot heal what you cannot see. Geonova bridges this gap by deploying autonomous networks of sensors and drones to create a real-time digital twin of the landscape.
            </p>
            <p>
               We are creating the Nova Core: a foundation model for environmental health. By training AI on vast datasets of soil chemistry, spectral imagery, and weather patterns, we can predict droughts, identify disease outbreaks, and prescribe restorative actions before damage occurs. This is agricultural intelligence that scales from a single family farm to entire national forests.
            </p>
            <p>
               We believe in an open future. The challenges facing our planet are too great for walled gardens. That is why our platform is built on open standards, empowering a global community of developers, scientists, and growers to share data and solutions.
            </p>
            <p>
               This is the most critical engineering challenge of our time. We are not just building software; we are engineering the recovery of our home.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ThesisSection;