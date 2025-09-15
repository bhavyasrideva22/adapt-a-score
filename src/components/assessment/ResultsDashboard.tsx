import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Users, 
  MessageCircle, 
  Target, 
  Download, 
  Share2,
  Star,
  Brain,
  Heart,
  Zap
} from "lucide-react";

interface AssessmentResults {
  communication: {
    score: number;
    style: string;
    subscores: {
      clarity: number;
      listening: number;
      toneAwareness: number;
      feedbackHandling: number;
    };
    strengths: string[];
    blindSpots: string[];
  };
  collaboration: {
    score: number;
    style: string;
    subscores: {
      teamAdaptability: number;
      trustBuilding: number;
      conflictManagement: number;
      sharedOwnership: number;
    };
  };
  contextual: {
    score: number;
    digitalVsInPersonGap: string;
    contexts: {
      oneOnOne: number;
      groupMeetings: number;
      conflictZones: number;
      digitalEnvironments: number;
    };
  };
  coach: {
    profile: string;
    scores: {
      clarityComprehension: number;
      opennessFeedback: number;
      alignmentEmpathy: number;
      conflictNavigation: number;
      harmonyFollowthrough: number;
    };
  };
  overall: {
    collaborationQuotient: number;
    recommendation: string;
    topGrowthArea: string;
    teamFit: string[];
  };
}

interface ResultsDashboardProps {
  results: AssessmentResults;
}

export const ResultsDashboard = ({ results }: ResultsDashboardProps) => {
  const ScoreCard = ({ 
    title, 
    score, 
    icon: Icon, 
    description, 
    gradient = false 
  }: { 
    title: string; 
    score: number; 
    icon: any; 
    description: string; 
    gradient?: boolean;
  }) => (
    <Card className={`p-6 ${gradient ? 'gradient-assessment text-primary-foreground' : 'shadow-card border-card-border'}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg ${gradient ? 'bg-white/20' : 'bg-primary/10'}`}>
            <Icon className={`h-5 w-5 ${gradient ? 'text-white' : 'text-primary'}`} />
          </div>
          <h3 className="font-semibold">{title}</h3>
        </div>
        <div className="text-2xl font-bold">{score}</div>
      </div>
      <p className={`text-sm ${gradient ? 'text-white/80' : 'text-muted-foreground'}`}>{description}</p>
      <Progress 
        value={score} 
        className={`mt-3 h-2 ${gradient ? 'bg-white/20' : ''}`}
      />
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-muted/30 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Assessment Complete</Badge>
          <h1 className="text-4xl font-bold mb-4">Your Social Adaptability Profile</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover your unique collaboration style and get personalized recommendations for growth.
          </p>
        </div>

        {/* Overall Score */}
        <Card className="p-8 mb-8 gradient-assessment text-primary-foreground shadow-result">
          <div className="text-center">
            <div className="text-6xl font-bold mb-2">{results.overall.collaborationQuotient}</div>
            <h2 className="text-2xl font-semibold mb-2">Collaboration Quotient</h2>
            <p className="text-xl opacity-90 mb-4">{results.overall.recommendation}</p>
            <div className="flex justify-center space-x-2">
              {results.overall.teamFit.map((fit) => (
                <Badge key={fit} variant="secondary" className="bg-white/20 text-white">
                  {fit}
                </Badge>
              ))}
            </div>
          </div>
        </Card>

        {/* Core Scores */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <ScoreCard
            title="Communication Intelligence"
            score={results.communication.score}
            icon={MessageCircle}
            description={`Style: ${results.communication.style}`}
          />
          <ScoreCard
            title="Collaboration Intelligence"
            score={results.collaboration.score}
            icon={Users}
            description={`Style: ${results.collaboration.style}`}
          />
          <ScoreCard
            title="Contextual Agility"
            score={results.contextual.score}
            icon={Brain}
            description={`Digital gap: ${results.contextual.digitalVsInPersonGap}`}
          />
        </div>

        {/* COACH Profile */}
        <Card className="p-8 mb-8 shadow-feature border-card-border">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Target className="mr-3 h-6 w-6 text-primary" />
            COACH Diagnostic Profile
          </h2>
          <div className="text-center mb-6">
            <Badge variant="outline" className="text-lg px-4 py-2 font-semibold">
              {results.coach.profile}
            </Badge>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {Object.entries(results.coach.scores).map(([key, score]) => (
              <div key={key} className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">{score}</div>
                <div className="text-sm text-muted-foreground capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
                <Progress value={score} className="mt-2 h-1" />
              </div>
            ))}
          </div>
        </Card>

        {/* Detailed Breakdown */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Communication Breakdown */}
          <Card className="p-6 shadow-card border-card-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <MessageCircle className="mr-2 h-5 w-5 text-primary" />
              Communication Breakdown
            </h3>
            <div className="space-y-4">
              {Object.entries(results.communication.subscores).map(([key, score]) => (
                <div key={key} className="flex justify-between items-center">
                  <span className="capitalize text-sm">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">{score}</span>
                    <Progress value={score} className="w-20 h-2" />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-card-border">
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-sm font-medium">Strengths:</span>
                {results.communication.strengths.map((strength) => (
                  <Badge key={strength} variant="secondary" className="text-xs">
                    {strength}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium">Growth Areas:</span>
                {results.communication.blindSpots.map((spot) => (
                  <Badge key={spot} variant="outline" className="text-xs">
                    {spot}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>

          {/* Context Heatmap */}
          <Card className="p-6 shadow-card border-card-border">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Brain className="mr-2 h-5 w-5 text-primary" />
              Context Performance
            </h3>
            <div className="space-y-4">
              {Object.entries(results.contextual.contexts).map(([context, score]) => {
                const getColorClass = (score: number) => {
                  if (score >= 80) return 'bg-success';
                  if (score >= 60) return 'bg-warning';
                  return 'bg-destructive';
                };
                
                return (
                  <div key={context} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm capitalize">{context.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="font-semibold">{score}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full ${getColorClass(score)}`}
                        style={{ width: `${score}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Growth Recommendation */}
        <Card className="p-8 mb-8 shadow-feature border-card-border">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <TrendingUp className="mr-3 h-6 w-6 text-success" />
            Your Growth Plan
          </h2>
          <div className="bg-success/10 border border-success/20 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-success/20 rounded-lg">
                <Star className="h-5 w-5 text-success" />
              </div>
              <div>
                <h3 className="font-semibold text-success mb-2">Top Priority: {results.overall.topGrowthArea}</h3>
                <p className="text-muted-foreground mb-4">
                  Focus on improving your digital communication skills. Practice the "Pause-Read-Send" protocol 
                  and ask for feedback on your digital tone in team settings.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Week 1-2</h4>
                    <p className="text-muted-foreground">Practice feedback reflection using the 3W method</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Week 3-4</h4>
                    <p className="text-muted-foreground">Digital tone calibration exercises</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Week 5-6</h4>
                    <p className="text-muted-foreground">Conflict simulation and role-play</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gradient-primary text-primary-foreground px-8">
            <Download className="mr-2 h-5 w-5" />
            Download Full Report
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            <Share2 className="mr-2 h-5 w-5" />
            Share Results
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            <Heart className="mr-2 h-5 w-5" />
            Save to Profile
          </Button>
        </div>
      </div>
    </div>
  );
};