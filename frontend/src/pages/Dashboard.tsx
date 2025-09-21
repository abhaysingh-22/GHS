import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Brain, BookOpen, MessageCircle, Users, Trophy, Activity, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const Dashboard = () => {
  const { theme } = useTheme();
  
  const cards = [
    {
      title: "Mood Tracking",
      description: "Track your daily emotions",
      icon: Heart,
      path: "/mood",
      buttonText: "Track Mood",
      gradient: "bg-gradient-primary",
      buttonVariant: "default"
    },
    {
      title: "Habits",
      description: "Build healthy routines",
      icon: Brain,
      path: "/habits",
      buttonText: "View Habits",
      gradient: "bg-gradient-wellness",
      buttonVariant: "secondary"
    },
    {
      title: "Journal",
      description: "Reflect on your experiences",
      icon: BookOpen,
      path: "/journal",
      buttonText: "Write Entry",
      gradient: "bg-gradient-calm",
      buttonVariant: "outline"
    },
    {
      title: "AI Companion",
      description: "Chat with your AI guide",
      icon: MessageCircle,
      path: "/companion",
      buttonText: "Start Chat",
      gradient: "bg-gradient-primary",
      buttonVariant: "default"
    },
    {
      title: "Community",
      description: "Connect with others",
      icon: Users,
      path: "/community",
      buttonText: "Join Community",
      gradient: "bg-gradient-wellness",
      buttonVariant: "secondary"
    },
    {
      title: "Achievements",
      description: "Celebrate your progress",
      icon: Trophy,
      path: "/achievements",
      buttonText: "View Progress",
      gradient: "bg-gradient-calm",
      buttonVariant: "outline"
    }
  ];

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-background to-muted/50 dark:from-background dark:to-primary/5 transition-colors duration-300">
      <Navigation />
      
      <div className="container mx-auto px-4 h-[calc(100vh-4rem)] pt-20 flex flex-col">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center space-y-2 mb-6"
        >
          <h1 className="text-3xl font-bold bg-gradient-primary dark:bg-gradient-hero-dark bg-clip-text text-transparent">
            Welcome to Your Wellness Journey
          </h1>
          <p className="text-sm text-muted-foreground">Track your mood, build healthy habits, and grow with AI-powered insights</p>
        </motion.div>

        <div className="flex gap-6 mb-6 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex-1"
          >
            <Card className="bg-card/50 dark:bg-card/30 backdrop-blur-sm border border-border/40 h-full overflow-hidden shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" /> 
                  <span>Your Wellness Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg bg-primary/5 dark:bg-primary/10 border border-primary/10 p-3 text-center">
                  <p className="text-sm text-muted-foreground">Quick wellness stats will appear here as you use the app</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex-1"
          >
            <Card className="bg-card/50 dark:bg-card/30 backdrop-blur-sm border border-border/40 h-full overflow-hidden shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-primary" /> 
                  <span>Recent Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg bg-primary/5 dark:bg-primary/10 border border-primary/10 p-3 text-center">
                  <p className="text-sm text-muted-foreground">Your achievements will appear here as you progress</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 overflow-y-auto pb-4 flex-1 custom-scrollbar">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="flex"
              >
                <Card className="bg-card/50 dark:bg-card/30 backdrop-blur-sm border border-border/40 hover:border-primary/20 shadow-sm hover:shadow-md transition-all duration-200 w-full">
                  <CardContent className="p-4 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-8 h-8 ${card.gradient} rounded-full flex items-center justify-center shadow-sm`}>
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="font-medium text-base">{card.title}</h3>
                    </div>
                    
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-1">{card.description}</p>
                    
                    <div className="mt-auto">
                      <Link to={card.path} className="w-full">
                        <Button 
                          variant={card.buttonVariant as any} 
                          size="sm" 
                          className="w-full text-xs h-8 flex items-center justify-between group"
                        >
                          {card.buttonText}
                          <ArrowRight className="w-3 h-3 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;