import React, { useState } from 'react';
import ScrambleText from '../ui/ScrambleText';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  {
    title: "Aerial Intelligence & Mapping",
    points: [
      "Drone-based spatial data collection for millimeter-accurate topography.",
      "Real-time landscape monitoring to detect erosion, water flow, and vegetation density.",
      "Automated flight paths for consistent seasonal tracking."
    ]
  },
  {
    title: "Environmental Analytics",
    points: [
      "Deep soil health tracking identifying nutrient deficiencies and organic matter levels.",
      "Biodiversity identification using acoustic and visual biomarkers.",
      "Early warning systems for drought, fire risk, and crop disease."
    ]
  },
  {
    title: "Agricultural Intelligence",
    points: [
      "Yield prediction models based on historical climate data and current soil conditions.",
      "Crop planning optimization to maximize output while restoring land health.",
      "Farm management insights delivered directly to mobile interfaces."
    ]
  },
  {
    title: "Open-Source Platform",
    points: [
      "Community-driven development allowing farmers to customize tools.",
      "Shared database of sustainable practices and success metrics.",
      "Adaptable hardware support for third-party sensors and drones."
    ]
  }
];

const TechSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 md:px-12 border-b border-primary/5 bg-background relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

          {/* Left Column - Header */}
          <div className="lg:w-1/2 h-fit lg:sticky lg:top-32 self-start order-1 relative z-10">
            <span className="text-xs font-mono text-secondary mb-6 block uppercase tracking-widest">Our Technology</span>

            <div className="text-3xl md:text-5xl font-medium leading-tight mb-8 md:mb-12 min-h-[3rem]">
              <ScrambleText
                text="Intelligence for the Land"
                className="text-primary"
              />
            </div>

            <p className="text-secondary text-lg leading-relaxed max-w-xl">
              Our platform combines cutting-edge drone technology, environmental sensors, and machine learning to deliver actionable insights for sustainable land management.
            </p>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:w-1/2 relative z-10 order-2">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="border border-primary/10 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
                  >
                    <span className="text-lg font-medium text-primary">{feature.title}</span>
                    <motion.span
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-2xl text-secondary"
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <ul className="space-y-3">
                            {feature.points.map((point, pointIndex) => (
                              <li key={pointIndex} className="flex items-start gap-3 text-secondary">
                                <span className="text-accent mt-1.5">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
