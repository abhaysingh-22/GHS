import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Brain, BookOpen, MessageCircle, Users, Trophy, ArrowRight, CheckCircle } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Heart,
      title: "Mood Tracking",
      description: "Track your daily emotions with intuitive tools and beautiful visualizations"
    },
    {
      icon: Brain,
      title: "Habit Building", 
      description: "Develop healthy routines with smart reminders and progress tracking"
    },
    {
      icon: BookOpen,
      title: "Digital Journaling",
      description: "Reflect and process through guided journaling with AI insights"
    },
    {
      icon: MessageCircle,
      title: "AI Companion",
      description: "24/7 support from your personal AI wellness guide"
    },
    {
      icon: Users,
      title: "Safe Community",
      description: "Connect anonymously with others on similar wellness journeys"
    },
    {
      icon: Trophy,
      title: "Gamified Progress",
      description: "Stay motivated with achievements, streaks, and wellness challenges"
    }
  ];

  const benefits = [
    "Science-based mental health tracking",
    "AI-powered personalized insights",
    "Privacy-first anonymous community",
    "Crisis detection and support resources",
    "Habit correlation analysis",
    "Progress gamification and rewards"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary-soft/10">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              MindfulSpace
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-gradient-primary hover:opacity-90">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent leading-tight">
                Your Mental Health,
                <br />
                <span className="bg-gradient-wellness bg-clip-text text-transparent">Beautifully Tracked</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                AI-powered wellness platform that helps you understand patterns, build healthy habits, and find support on your mental health journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-mood">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="shadow-soft">
                  View Demo
                </Button>
              </Link>
            </div>

            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4">Trusted by 10,000+ people on their wellness journey</p>
              <div className="flex justify-center items-center gap-8 opacity-60">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 bg-muted rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Everything You Need for
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Mental Wellness</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools backed by research to support your mental health journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="bg-card/50 backdrop-blur-sm shadow-card border-0 hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 shadow-mood">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Choose
                <span className="bg-gradient-wellness bg-clip-text text-transparent"> MindfulSpace?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-wellness-green mt-0.5 flex-shrink-0" />
                    <p className="text-lg text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-card p-8 rounded-2xl shadow-soft">
                <h3 className="text-2xl font-bold mb-4">Privacy First Approach</h3>
                <p className="text-muted-foreground mb-6">
                  Your mental health data is encrypted, secure, and never shared without your explicit consent. 
                  Anonymous community features let you connect safely with others.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-wellness-green" />
                    End-to-end encryption
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-wellness-green" />
                    Anonymous community posting
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-wellness-green" />
                    HIPAA compliant
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Transform Your Mental Health Journey?
            </h2>
            <p className="text-xl text-white/80">
              Join thousands who've discovered better wellbeing through mindful tracking and AI-powered insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" variant="secondary" className="shadow-soft">
                  Start Free Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  I Have an Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              MindfulSpace
            </div>
            <p className="text-muted-foreground">
              Supporting mental wellness with technology, compassion, and community.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
              <Link to="/support" className="hover:text-primary">Support</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
