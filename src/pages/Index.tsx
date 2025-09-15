import { useState } from "react";
import { HeroSection } from "@/components/assessment/HeroSection";
import Assessment from "./Assessment";

const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | 'assessment'>('home');

  const handleStartAssessment = () => {
    setCurrentView('assessment');
  };

  const handleAssessmentComplete = () => {
    // Assessment completed - results are shown in the Assessment component
  };

  if (currentView === 'assessment') {
    return <Assessment onComplete={handleAssessmentComplete} />;
  }

  return <HeroSection onStartAssessment={handleStartAssessment} />;
};

export default Index;
