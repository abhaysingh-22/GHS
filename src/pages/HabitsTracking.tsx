import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import { Droplets, Moon, Dumbbell, Smartphone, Coffee, Book } from "lucide-react";

const HabitsTracking = () => {
  const [completedHabits, setCompletedHabits] = useState<string[]>([]);

  const habits = [
    { id: "water", name: "Drink 8 glasses of water", icon: Droplets, target: 8, current: 6, color: "text-blue-500" },
    { id: "sleep", name: "8 hours of sleep", icon: Moon, target: 8, current: 7.5, color: "text-purple-500" },
    { id: "exercise", name: "30 minutes exercise", icon: Dumbbell, target: 30, current: 20, color: "text-green-500" },
    { id: "screen", name: "Limit screen time", icon: Smartphone, target: 4, current: 5.5, color: "text-orange-500", inverse: true },
    { id: "meditation", name: "10 minutes meditation", icon: Coffee, target: 10, current: 10, color: "text-indigo-500" },
    { id: "reading", name: "Read for 20 minutes", icon: Book, target: 20, current: 15, color: "text-teal-500" },
  ];

  const toggleHabit = (habitId: string) => {
    setCompletedHabits(prev => 
      prev.includes(habitId) 
        ? prev.filter(id => id !== habitId)
        : [...prev, habitId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Navigation />
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold bg-gradient-wellness bg-clip-text text-transparent">
              Daily Habits Tracker
            </h1>
            <p className="text-muted-foreground">Build consistent healthy routines for better wellbeing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {habits.map(({ id, name, icon: Icon, target, current, color, inverse }) => {
              const progress = inverse ? Math.max(0, (target - current) / target * 100) : (current / target) * 100;
              const isCompleted = completedHabits.includes(id);
              
              return (
                <Card key={id} className="bg-gradient-card shadow-card border-0">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Icon className={`w-6 h-6 ${color}`} />
                        <CardTitle className="text-lg">{name}</CardTitle>
                      </div>
                      <Checkbox
                        checked={isCompleted}
                        onCheckedChange={() => toggleHabit(id)}
                        className="w-5 h-5"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>
                          {inverse ? "Target: less than" : "Progress:"} {current}/{target} 
                          {id === "water" ? " glasses" : id === "sleep" ? " hours" : id === "exercise" || id === "meditation" || id === "reading" ? " minutes" : id === "screen" ? " hours" : ""}
                        </span>
                        <span>{Math.round(progress)}%</span>
                      </div>
                      <Progress 
                        value={Math.min(100, progress)} 
                        className="h-2"
                      />
                      {progress >= 100 && (
                        <p className="text-xs text-wellness-green font-medium">✓ Goal achieved!</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader>
              <CardTitle>Weekly Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
                  <div key={day} className="text-center">
                    <p className="text-sm font-medium mb-2">{day}</p>
                    <div className="grid grid-cols-1 gap-1">
                      {[1, 2, 3, 4].map((habit) => (
                        <div
                          key={habit}
                          className={`w-full h-2 rounded ${
                            Math.random() > 0.3 ? "bg-wellness-green" : "bg-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HabitsTracking;