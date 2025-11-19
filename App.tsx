
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Features from './components/Features';
import EarningCalculator from './components/EarningCalculator';
import ProposalGen from './components/ProposalGen';
import ResourceHub from './components/ResourceHub';
import Contact from './components/Contact';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <InfoSection />
          <Features />
          <ResourceHub />
          <EarningCalculator />
          <ProposalGen />
          <Contact />
        </main>
        <footer className="bg-gray-50 py-12 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <span className="text-xl font-bold text-gray-900">Upwork Profile <span className="text-upwork-green">Mastery</span></span>
                    <p className="text-gray-500 text-sm mt-2">Empowering Ethiopian Freelancers.</p>
                </div>
                <div className="text-center md:text-right">
                    <p className="text-sm text-gray-500">
                        Disclaimer: This is an educational fan-made project.<br/>Not affiliated with Upwork Global Inc.
                    </p>
                </div>
            </div>
        </footer>
      </div>
    </LanguageProvider>
  );
};

export default App;
