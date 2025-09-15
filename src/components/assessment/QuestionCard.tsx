import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export interface Question {
  id: string;
  type: 'multiple_choice' | 'slider' | 'likert';
  title: string;
  description?: string;
  scenario?: string;
  options?: Array<{
    value: string;
    label: string;
  }>;
  sliderMin?: number;
  sliderMax?: number;
  sliderLabel?: string;
  traits?: string[];
}

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: string | number) => void;
  onNext: () => void;
  currentAnswer?: string | number;
}

export const QuestionCard = ({ question, onAnswer, onNext, currentAnswer }: QuestionCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | number>(currentAnswer || '');

  const handleAnswerSelect = (answer: string | number) => {
    setSelectedAnswer(answer);
    onAnswer(answer);
  };

  const renderQuestion = () => {
    switch (question.type) {
      case 'multiple_choice':
        return (
          <RadioGroup 
            value={selectedAnswer as string} 
            onValueChange={handleAnswerSelect}
            className="space-y-4"
          >
            {question.options?.map((option, index) => (
              <div key={option.value} className="flex items-start space-x-3 p-4 rounded-lg border border-card-border hover:bg-muted/50 transition-colors">
                <RadioGroupItem value={option.value} id={option.value} className="mt-0.5" />
                <Label htmlFor={option.value} className="flex-1 cursor-pointer leading-relaxed">
                  <span className="font-medium text-sm text-primary mr-2">
                    {String.fromCharCode(65 + index)})
                  </span>
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        );

      case 'slider':
        return (
          <div className="space-y-6">
            <div className="px-4">
              <Slider
                value={[selectedAnswer as number || question.sliderMin || 0]}
                onValueChange={(value) => handleAnswerSelect(value[0])}
                max={question.sliderMax || 10}
                min={question.sliderMin || 0}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>{question.sliderMin || 0} - Strongly Disagree</span>
                <span className="font-medium text-primary">
                  {selectedAnswer || question.sliderMin || 0}
                </span>
                <span>{question.sliderMax || 10} - Strongly Agree</span>
              </div>
            </div>
          </div>
        );

      case 'likert':
        const likertOptions = [
          { value: '1', label: 'Strongly Disagree' },
          { value: '2', label: 'Disagree' },
          { value: '3', label: 'Somewhat Disagree' },
          { value: '4', label: 'Neutral' },
          { value: '5', label: 'Somewhat Agree' },
          { value: '6', label: 'Agree' },
          { value: '7', label: 'Strongly Agree' }
        ];
        
        return (
          <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
            {likertOptions.map((option) => (
              <Button
                key={option.value}
                variant={selectedAnswer === option.value ? "default" : "outline"}
                className="h-auto p-3 text-center"
                onClick={() => handleAnswerSelect(option.value)}
              >
                <div className="space-y-1">
                  <div className="font-semibold">{option.value}</div>
                  <div className="text-xs">{option.label}</div>
                </div>
              </Button>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="p-8 shadow-feature border-card-border max-w-4xl mx-auto">
      <div className="space-y-6">
        {question.scenario && (
          <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-primary">
            <h4 className="font-semibold mb-2">Scenario</h4>
            <p className="text-muted-foreground">{question.scenario}</p>
          </div>
        )}
        
        <div>
          <h3 className="text-xl font-semibold mb-3">{question.title}</h3>
          {question.description && (
            <p className="text-muted-foreground mb-6">{question.description}</p>
          )}
        </div>

        {renderQuestion()}

        {question.traits && (
          <div className="flex flex-wrap gap-2 pt-4 border-t border-card-border">
            <span className="text-sm text-muted-foreground">Measures:</span>
            {question.traits.map((trait) => (
              <span key={trait} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                {trait}
              </span>
            ))}
          </div>
        )}

        <div className="flex justify-end pt-6">
          <Button 
            onClick={onNext}
            disabled={!selectedAnswer && selectedAnswer !== 0}
            className="px-8"
          >
            Next Question
          </Button>
        </div>
      </div>
    </Card>
  );
};