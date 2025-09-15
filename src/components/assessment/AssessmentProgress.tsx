import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface AssessmentProgressProps {
  currentSection: number;
  totalSections: number;
  currentQuestion: number;
  totalQuestions: number;
  sectionName: string;
}

export const AssessmentProgress = ({
  currentSection,
  totalSections,
  currentQuestion,
  totalQuestions,
  sectionName
}: AssessmentProgressProps) => {
  const overallProgress = ((currentSection - 1) * 100 + (currentQuestion / totalQuestions) * 100) / totalSections;
  
  return (
    <div className="w-full bg-card p-6 border-b border-card-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <Badge variant="outline" className="mb-2">
              Section {currentSection} of {totalSections}
            </Badge>
            <h2 className="font-semibold text-lg">{sectionName}</h2>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Overall Progress</div>
            <div className="font-semibold">{Math.round(overallProgress)}%</div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Question {currentQuestion} of {totalQuestions}</span>
            <span>{Math.round((currentQuestion / totalQuestions) * 100)}% of section</span>
          </div>
          <Progress value={(currentQuestion / totalQuestions) * 100} className="h-2" />
        </div>
      </div>
    </div>
  );
};