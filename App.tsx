
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { NewsEvents } from './components/NewsEvents';
import { AboutSection } from './components/AboutSection';
import { MembershipSection } from './components/MembershipSection';
import { DetailedDescription } from './components/DetailedDescription';
import { OfficeBearers } from './components/OfficeBearers';
import { FeedbackForm } from './components/FeedbackForm';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-yellow-500 selection:text-[#002b5c]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <NewsEvents />
        <AboutSection />
        <MembershipSection />
        <DetailedDescription />
        <OfficeBearers />
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
