import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { 
  Trophy, 
  Medal, 
  Star, 
  Target, 
  Flame, 
  Calendar, 
  Heart,
  Brain,
  BookOpen,
  Users
} from "lucide-react";

const Achievements = () => {
  const stats = {
    totalPoints: 2450,
    level: 8,
    nextLevelPoints: 2700,
    streakDays: 12,
    completedChallenges: 23
  };

  const achievements = [
    {
      id: 1,
      title: "First Steps",
      description: "Complete your first mood entry",
      icon: Heart,
      completed: true,
      date: "March 1, 2024",
      points: 50,
      rarity: "common"
    },
    {
      id: 2,
      title: "Mindful Week",
      description: "Track your mood for 7 consecutive days",
      icon: Calendar,
      completed: true,
      date: "March 8, 2024",
      points: 150,
      rarity: "uncommon"
    },
    {
      id: 3,
      title: "Habit Hero",
      description: "Complete all daily habits for 10 days",
      icon: Target,
      completed: true,
      date: "March 15, 2024",
      points: 250,
      rarity: "rare"
    },
    {
      id: 4,
      title: "Story Teller",
      description: "Write 20 journal entries",
      icon: BookOpen,
      completed: false,
      progress: 15,
      total: 20,
      points: 200,
      rarity: "uncommon"
    },
    {
      id: 5,
      title: "Community Helper",
      description: "Receive 50 likes on community posts",
      icon: Users,
      completed: false,
      progress: 32,
      total: 50,
      points: 300,
      rarity: "rare"
    },
    {
      id: 6,
      title: "Meditation Master",
      description: "Complete 100 meditation sessions",
      icon: Brain,
      completed: false,
      progress: 78,
      total: 100,
      points: 500,
      rarity: "legendary"
    }
  ];

  const challenges = [
    {
      id: 1,
      title: "30-Day Mood Streak",
      description: "Track your mood every day for 30 days",
      daysLeft: 18,
      progress: 40,
      reward: "300 points + Special badge"
    },
    {
      id: 2,
      title: "Gratitude March",
      description: "Write one thing you're grateful for daily this month",
      daysLeft: 12,
      progress: 60,
      reward: "200 points + Gratitude badge"
    },
    {
      id: 3,
      title: "Anxiety Warrior",
      description: "Use 5 different coping strategies this week",
      daysLeft: 3,
      progress: 80,
      reward: "150 points + Warrior badge"
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common": return "text-gray-500";
      case "uncommon": return "text-green-500";
      case "rare": return "text-blue-500";
      case "legendary": return "text-purple-500";
      default: return "text-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Navigation />
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold bg-gradient-calm bg-clip-text text-transparent">
              Your Progress & Achievements
            </h1>
            <p className="text-muted-foreground">Celebrate your wellness journey milestones</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <Card className="bg-gradient-card shadow-card border-0">
              <CardContent className="text-center p-4">
                <Trophy className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                <p className="text-2xl font-bold">{stats.totalPoints}</p>
                <p className="text-xs text-muted-foreground">Total Points</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card shadow-card border-0">
              <CardContent className="text-center p-4">
                <Medal className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-2xl font-bold">Level {stats.level}</p>
                <p className="text-xs text-muted-foreground">Current Level</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card shadow-card border-0">
              <CardContent className="text-center p-4">
                <Flame className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                <p className="text-2xl font-bold">{stats.streakDays}</p>
                <p className="text-xs text-muted-foreground">Day Streak</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card shadow-card border-0">
              <CardContent className="text-center p-4">
                <Star className="w-8 h-8 mx-auto mb-2 text-wellness-green" />
                <p className="text-2xl font-bold">{stats.completedChallenges}</p>
                <p className="text-xs text-muted-foreground">Challenges</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card shadow-card border-0">
              <CardContent className="p-4">
                <p className="text-sm font-medium mb-2">Next Level</p>
                <Progress value={(stats.totalPoints / stats.nextLevelPoints) * 100} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">
                  {stats.nextLevelPoints - stats.totalPoints} points to go
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Achievements */}
            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement) => {
                    const IconComponent = achievement.icon;
                    return (
                      <div 
                        key={achievement.id} 
                        className={`p-4 rounded-lg border transition-all ${
                          achievement.completed 
                            ? 'bg-wellness-green/10 border-wellness-green/30' 
                            : 'bg-muted/30 border-muted'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-full ${
                            achievement.completed ? 'bg-wellness-green/20' : 'bg-muted'
                          }`}>
                            <IconComponent className={`w-5 h-5 ${
                              achievement.completed ? 'text-wellness-green' : 'text-muted-foreground'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className="font-medium">{achievement.title}</h3>
                              <Badge 
                                variant="outline" 
                                className={getRarityColor(achievement.rarity)}
                              >
                                {achievement.rarity}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">
                              {achievement.description}
                            </p>
                            {achievement.completed ? (
                              <div className="flex items-center justify-between">
                                <p className="text-xs text-wellness-green">
                                  Completed on {achievement.date}
                                </p>
                                <Badge className="bg-wellness-green">
                                  +{achievement.points} pts
                                </Badge>
                              </div>
                            ) : (
                              <div>
                                {achievement.progress && achievement.total && (
                                  <div className="mb-2">
                                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                                      <span>{achievement.progress}/{achievement.total}</span>
                                      <span>{Math.round((achievement.progress / achievement.total) * 100)}%</span>
                                    </div>
                                    <Progress value={(achievement.progress / achievement.total) * 100} className="h-1" />
                                  </div>
                                )}
                                <Badge variant="outline">+{achievement.points} pts</Badge>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Active Challenges */}
            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Active Challenges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {challenges.map((challenge) => (
                    <div key={challenge.id} className="p-4 bg-primary-soft/10 rounded-lg border border-primary-soft/30">
                      <h3 className="font-medium mb-1">{challenge.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {challenge.description}
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Progress</span>
                          <span>{challenge.daysLeft} days left</span>
                        </div>
                        <Progress value={challenge.progress} className="h-2" />
                        <p className="text-xs text-primary font-medium">
                          Reward: {challenge.reward}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;