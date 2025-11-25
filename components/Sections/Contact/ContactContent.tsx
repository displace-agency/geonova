
import React from 'react';
import { ArrowRight } from '../../ui/Icons';

const ContactContent = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <section className="relative px-6 md:px-12 py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          {/* Left Column: Contact Info */}
          <div className="lg:w-1/3 space-y-16">
            <div>
              <span className="text-xs font-mono text-secondary mb-6 block uppercase tracking-widest">Get in Touch</span>
              <p className="text-xl md:text-2xl font-medium text-primary leading-relaxed uppercase tracking-tight">
                Ready to transform your land? We'd love to hear from you.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="font-medium text-sm text-primary uppercase tracking-tight mb-2">General Inquiries</h4>
                <a href="mailto:hello@geonova.systems" className="text-lg hover:text-accent transition-colors text-secondary">hello@geonova.systems</a>
              </div>
              
              <div>
                <h4 className="font-medium text-sm text-primary uppercase tracking-tight mb-2">Sales & Partnerships</h4>
                <a href="mailto:sales@geonova.systems" className="text-lg hover:text-accent transition-colors text-secondary">sales@geonova.systems</a>
              </div>

              <div>
                <h4 className="font-medium text-sm text-primary uppercase tracking-tight mb-2">Careers</h4>
                <a href="mailto:careers@geonova.systems" className="text-lg hover:text-accent transition-colors text-secondary">careers@geonova.systems</a>
              </div>

              <div>
                <h4 className="font-medium text-sm text-primary uppercase tracking-tight mb-2">Headquarters</h4>
                <p className="text-lg text-secondary">Sunnyvale, CA & Portland, OR</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:w-2/3">
            <form className="space-y-12" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="group">
                  <label htmlFor="firstName" className="block text-xs font-mono text-secondary uppercase tracking-widest mb-2 group-focus-within:text-primary transition-colors">First Name</label>
                  <input 
                    type="text" 
                    id="firstName"
                    className="w-full bg-transparent border-b border-primary/20 py-4 text-primary focus:border-primary focus:outline-none transition-colors placeholder-primary/30"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="group">
                  <label htmlFor="lastName" className="block text-xs font-mono text-secondary uppercase tracking-widest mb-2 group-focus-within:text-primary transition-colors">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName"
                    className="w-full bg-transparent border-b border-primary/20 py-4 text-primary focus:border-primary focus:outline-none transition-colors placeholder-primary/30"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="group">
                  <label htmlFor="email" className="block text-xs font-mono text-secondary uppercase tracking-widest mb-2 group-focus-within:text-primary transition-colors">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full bg-transparent border-b border-primary/20 py-4 text-primary focus:border-primary focus:outline-none transition-colors placeholder-primary/30"
                    placeholder="name@company.com"
                  />
                </div>
                <div className="group">
                  <label htmlFor="company" className="block text-xs font-mono text-secondary uppercase tracking-widest mb-2 group-focus-within:text-primary transition-colors">Organization</label>
                  <input 
                    type="text" 
                    id="company"
                    className="w-full bg-transparent border-b border-primary/20 py-4 text-primary focus:border-primary focus:outline-none transition-colors placeholder-primary/30"
                    placeholder="Organization / Farm Name"
                  />
                </div>
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-xs font-mono text-secondary uppercase tracking-widest mb-2 group-focus-within:text-primary transition-colors">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-primary/20 py-4 text-primary focus:border-primary focus:outline-none transition-colors resize-none placeholder-primary/30"
                  placeholder="Tell us about your land or project..."
                />
              </div>

              <div className="pt-8">
                <button type="submit" className="group flex items-center gap-4 text-sm font-medium bg-primary text-white px-8 py-4 hover:bg-primary/90 transition-colors rounded-sm">
                  Send Message
                  <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                    <ArrowRight />
                  </div>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactContent;