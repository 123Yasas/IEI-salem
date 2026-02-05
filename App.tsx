
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { DetailedDescription } from './components/DetailedDescription';
import { OfficeBearers } from './components/OfficeBearers';
import { FeedbackForm } from './components/FeedbackForm';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <DetailedDescription />
        <OfficeBearers />
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
