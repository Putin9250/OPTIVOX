// App.jsx
import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Preloader from "./Components/Preloader/Preloader";
import FloatingConsultButton from "./Components/FloatingConsultButton/FloatingConsultButton";
import CapabilitiesSection from "./Components/CapabilitiesSection/CapabilitiesSection";
import PrincipalsSection from "./Components/PrincipalsSection/PrincipalsSection";
import OperationalDoctrineSection from "./Components/OperationalDoctrineSection/OperationalDoctrineSection";
import CommunicationPhilosophySection from "./Components/CommunicationPhilosophySection/CommunicationPhilosophySection";
import SelectiveEngagementSection from "./Components/SelectiveEngagementSection/SelectiveEngagementSection";
import NewsletterSection from "./Components/NewsletterSection/NewsletterSection";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingFinish = () => {
    setLoading(false);
  };

  return (
    <div>
      {loading && <Preloader onFinish={handleLoadingFinish} />}
      <Navbar />
      <Hero isLoaded={!loading} />
      {/* ... rest of your content ... */}
      <FloatingConsultButton />
      <CapabilitiesSection />
      <PrincipalsSection />
      <OperationalDoctrineSection />
      <CommunicationPhilosophySection />
      <SelectiveEngagementSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default App;
