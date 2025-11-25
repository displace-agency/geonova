
import React from 'react';
import { ArrowRight } from '../../ui/Icons';

const DeveloperResources = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-background border-b border-primary/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Column: Documentation */}
          <div className="lg:w-1/2">
            <span className="text-xs font-mono text-secondary mb-6 block uppercase tracking-widest">Documentation</span>
            <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-8 uppercase tracking-tight text-primary">
              Get Started Building
            </h2>
            <p className="text-secondary text-lg mb-12 max-w-xl">
              Access the complete toolkit for environmental intelligence. From low-level sensor drivers to high-level analysis pipelines.
            </p>

            <div className="space-y-4 mb-12">
              <a href="#" className="group block border-l border-primary/10 pl-6 py-2 hover:border-primary transition-colors">
                <h4 className="text-lg text-primary font-medium group-hover:text-accent transition-colors mb-1 uppercase tracking-tight">API Documentation</h4>
                <p className="text-sm text-secondary font-mono">Reference for REST & GraphQL endpoints</p>
              </a>
              <a href="#" className="group block border-l border-primary/10 pl-6 py-2 hover:border-primary transition-colors">
                <h4 className="text-lg text-primary font-medium group-hover:text-accent transition-colors mb-1 uppercase tracking-tight">SDK Reference</h4>
                <p className="text-sm text-secondary font-mono">Python and JavaScript client libraries</p>
              </a>
              <a href="#" className="group block border-l border-primary/10 pl-6 py-2 hover:border-primary transition-colors">
                <h4 className="text-lg text-primary font-medium group-hover:text-accent transition-colors mb-1 uppercase tracking-tight">Integration Guides</h4>
                <p className="text-sm text-secondary font-mono">Connect custom hardware and sensors</p>
              </a>
            </div>

            <a href="#" className="group inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors">
              View Full Documentation
              <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight />
              </div>
            </a>
          </div>

          {/* Right Column: Code Snippet */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-surface border border-primary/10 rounded-sm overflow-hidden shadow-xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-primary/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="text-[10px] font-mono text-secondary uppercase tracking-widest">quick-start.ts</div>
              </div>

              {/* Code Content - Light Mode Syntax Highlighting */}
              <div className="p-6 overflow-x-auto font-mono text-xs md:text-sm leading-relaxed bg-white/50">
                  <code className="block text-primary">
                    <span className="text-secondary italic">// Quick start: Initialize Geonova client</span>
                    {'\n'}
                    <span className="text-purple-600">import</span> <span className="text-primary">{'{'} GenovaClient {'}'}</span> <span className="text-purple-600">from</span> <span className="text-green-700">'@geonova/sdk'</span>;
                    {'\n\n'}
                    <span className="text-purple-600">const</span> <span className="text-blue-600">geonova</span> = <span className="text-purple-600">new</span> <span className="text-yellow-600">GenovaClient</span>({'{'}
                    {'\n'}  <span className="text-blue-600">apiKey</span>: <span className="text-blue-600">process</span>.<span className="text-blue-600">env</span>.GEONOVA_API_KEY
                    {'\n'}
                    {'}'});
                    {'\n\n'}
                    <span className="text-secondary italic">// Fetch real-time drone data</span>
                    {'\n'}
                    <span className="text-purple-600">const</span> <span className="text-blue-600">droneData</span> = <span className="text-purple-600">await</span> <span className="text-blue-600">geonova</span>.<span className="text-blue-600">drones</span>.<span className="text-yellow-600">getLatestCapture</span>({'{'}
                    {'\n'}  <span className="text-blue-600">siteId</span>: <span className="text-green-700">'farm-123'</span>,
                    {'\n'}  <span className="text-blue-600">dataType</span>: <span className="text-green-700">'soilHealth'</span>
                    {'\n'}
                    {'}'});
                    {'\n\n'}
                    <span className="text-secondary italic">// Analyze environmental metrics</span>
                    {'\n'}
                    <span className="text-purple-600">const</span> <span className="text-blue-600">analysis</span> = <span className="text-purple-600">await</span> <span className="text-blue-600">geonova</span>.<span className="text-blue-600">ai</span>.<span className="text-yellow-600">analyze</span>(<span className="text-blue-600">droneData</span>, {'{'}
                    {'\n'}  <span className="text-blue-600">metrics</span>: [<span className="text-green-700">'biodiversity'</span>, <span className="text-green-700">'soilMoisture'</span>, <span className="text-green-700">'diseaseRisk'</span>]
                    {'\n'}
                    {'}'});
                    {'\n\n'}
                    <span className="text-blue-600">console</span>.<span className="text-yellow-600">log</span>(<span className="text-blue-600">analysis</span>.<span className="text-blue-600">insights</span>);
                  </code>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DeveloperResources;