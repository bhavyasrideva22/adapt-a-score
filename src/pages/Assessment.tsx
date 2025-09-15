import { useState } from "react";
import { AssessmentProgress } from "@/components/assessment/AssessmentProgress";
import { QuestionCard } from "@/components/assessment/QuestionCard";
import { ResultsDashboard } from "@/components/assessment/ResultsDashboard";
import { assessmentSections, mockResults } from "@/data/assessmentQuestions";

interface AssessmentProps {
  onComplete?: () => void;
}

const Assessment = ({ onComplete }: AssessmentProps) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [isComplete, setIsComplete] = useState(false);

  const currentSection = assessmentSections[currentSectionIndex];
  const currentQuestion = currentSection?.questions[currentQuestionIndex];
  
  const handleAnswer = (answer: string | number) => {
    if (currentQuestion) {
      setAnswers(prev => ({
        ...prev,
        [currentQuestion.id]: answer
      }));
    }
  };

  const handleNext = () => {
    const isLastQuestionInSection = currentQuestionIndex === currentSection.questions.length - 1;
    const isLastSection = currentSectionIndex === assessmentSections.length - 1;

    if (isLastQuestionInSection) {
      if (isLastSection) {
        // Assessment complete
        setIsComplete(true);
        onComplete?.();
      } else {
        // Move to next section
        setCurrentSectionIndex(prev => prev + 1);
        setCurrentQuestionIndex(0);
      }
    } else {
      // Move to next question
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  if (isComplete) {
    return <ResultsDashboard results={mockResults} />;
  }

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-muted/30">
      <AssessmentProgress
        currentSection={currentSectionIndex + 1}
        totalSections={assessmentSections.length}
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={currentSection.questions.length}
        sectionName={currentSection.name}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <p className="text-muted-foreground">{currentSection.description}</p>
        </div>
        
        <QuestionCard
          question={currentQuestion}
          onAnswer={handleAnswer}
          onNext={handleNext}
          currentAnswer={answers[currentQuestion.id]}
        />
      </div>
    </div>
  );
};

export default Assessment;