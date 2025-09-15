import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, MessageCircle, TrendingUp, Zap } from "lucide-react";

interface HeroSectionProps {
  onStartAssessment: () => void;
}

export const HeroSection = ({ onStartAssessment }: HeroSectionProps) => {
  const features = [
    {
      icon: MessageCircle,
      title: "Communication Intelligence",
      description: "Assess clarity, listening, and tone awareness"
    },
    {
      icon: Users,
      title: "Collaboration Intelligence", 
      description: "Evaluate team adaptability and trust-building"
    },
    {
      icon: TrendingUp,
      title: "Growth Insights",
      description: "Get personalized development recommendations"
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Professional scoring with detailed visualizations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-muted/30">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Collaboration & Communication Intelligence Suite
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-assessment bg-clip-text text-transparent">
            Social Adaptability Assessment
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            In our fast-changing, culturally diverse, and digitally driven world, how you interact with others — especially in new, tense, or unfamiliar environments — is a critical success factor. Discover how you navigate team diversity, communication shifts, and digital collaboration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="gradient-primary text-primary-foreground font-semibold px-8 py-6 text-lg shadow-feature hover:shadow-lg transition-all duration-300"
              onClick={onStartAssessment}
            >
              Start Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="text-sm text-muted-foreground">
              ⏱️ Takes 15-20 minutes • 📊 Instant results
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 text-center shadow-card hover:shadow-feature transition-all duration-300 border-card-border">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        {/* What You'll Discover */}
        <Card className="p-8 shadow-feature border-card-border">
          <h2 className="text-2xl font-bold mb-6 text-center">What You'll Discover</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🧭</div>
              <h3 className="font-semibold mb-2">Your Communication Style</h3>
              <p className="text-sm text-muted-foreground">From "Empathic Clarifier" to "Direct Navigator" - understand your unique approach</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-semibold mb-2">Collaboration Strengths</h3>
              <p className="text-sm text-muted-foreground">See how you build trust, handle conflict, and adapt in team environments</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="font-semibold mb-2">Growth Opportunities</h3>
              <p className="text-sm text-muted-foreground">Get a personalized 4-6 week development plan with actionable insights</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};