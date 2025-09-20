import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  Calendar, 
  Brain, 
  Heart,
  AlertCircle,
  Lightbulb,
  Target
} from "lucide-react";

const Insights = () => {
  const moodTrends = [
    { day: "Mon", mood: 7 },
    { day: "Tue", mood: 6 },
    { day: "Wed", mood: 8 },
    { day: "Thu", mood: 5 },
    { day: "Fri", mood: 9 },
    { day: "Sat", mood: 8 },
    { day: "Sun", mood: 7 }
  ];

  const correlations = [
    {
      factor: "Exercise",
      impact: "+23%",
      type: "positive",
      description: "Days with exercise show 23% better mood"
    },
    {
      factor: "Sleep Quality",
      impact: "+18%",
      type: "positive", 
      description: "Good sleep (7+ hours) improves mood significantly"
    },
    {
      factor: "Screen Time",
      impact: "-15%",
      type: "negative",
      description: "High screen time (6+ hours) correlates with lower mood"
    },
    {
      factor: "Social Interaction",
      impact: "+12%",
      type: "positive",
      description: "Social activities boost your overall wellbeing"
    }
  ];

  const predictions = [
    {
      type: "warning",
      title: "Potential Stress Period",
      description: "Based on your patterns, you might experience increased stress this Thursday. Consider scheduling relaxation time.",
      confidence: "78%"
    },
    {
      type: "positive",
      title: "Mood Boost Expected",
      description: "Your weekend activities typically improve your mood. Plan something you enjoy!",
      confidence: "85%"
    }
  ];

  const recommendations = [
    {
      category: "Immediate",
      title: "Take a 10-minute walk",
      reason: "Your mood dipped yesterday, and movement often helps you recover",
      priority: "high"
    },
    {
      category: "This Week",
      title: "Schedule social time",
      reason: "You haven't had social interaction in 4 days, which usually affects your mood",
      priority: "medium"
    },
    {
      category: "Long-term",
      title: "Establish evening routine",
      reason: "Inconsistent sleep patterns are impacting your daily mood stability",
      priority: "medium"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Navigation />
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AI-Powered Insights
            </h1>
            <p className="text-muted-foreground">Discover patterns and predictions in your wellness journey</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Mood Trends */}
            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Mood Trends (This Week)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Simple mood chart visualization */}
                  <div className="flex items-end justify-between h-32 px-4">
                    {moodTrends.map((day) => (
                      <div key={day.day} className="flex flex-col items-center">
                        <div 
                          className="bg-gradient-primary rounded-t-sm mb-2 transition-all duration-300 hover:opacity-80"
                          style={{ height: `${day.mood * 10}px`, width: '20px' }}
                        />
                        <span className="text-xs text-muted-foreground">{day.day}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-wellness-green">7.1</p>
                      <p className="text-xs text-muted-foreground">Average</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">9</p>
                      <p className="text-xs text-muted-foreground">Highest</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-orange-500">5</p>
                      <p className="text-xs text-muted-foreground">Lowest</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Correlation Analysis */}
            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  What Affects Your Mood
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {correlations.map((correlation, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        {correlation.type === 'positive' ? (
                          <TrendingUp className="w-5 h-5 text-wellness-green" />
                        ) : (
                          <TrendingDown className="w-5 h-5 text-orange-500" />
                        )}
                        <div>
                          <p className="font-medium text-sm">{correlation.factor}</p>
                          <p className="text-xs text-muted-foreground">{correlation.description}</p>
                        </div>
                      </div>
                      <span className={`font-bold text-sm ${
                        correlation.type === 'positive' ? 'text-wellness-green' : 'text-orange-500'
                      }`}>
                        {correlation.impact}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Predictions */}
          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                AI Predictions & Early Warnings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {predictions.map((prediction, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-lg border ${
                      prediction.type === 'warning' 
                        ? 'bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-800' 
                        : 'bg-wellness-green-soft/20 border-wellness-green/30'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {prediction.type === 'warning' ? (
                        <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5" />
                      ) : (
                        <TrendingUp className="w-5 h-5 text-wellness-green mt-0.5" />
                      )}
                      <div>
                        <h3 className="font-medium mb-1">{prediction.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{prediction.description}</p>
                        <p className="text-xs text-muted-foreground">Confidence: {prediction.confidence}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Recommendations */}
          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Personalized Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                    <div className={`p-2 rounded-full ${
                      rec.priority === 'high' 
                        ? 'bg-orange-100 dark:bg-orange-900/30' 
                        : 'bg-primary-soft/20'
                    }`}>
                      <Target className={`w-4 h-4 ${
                        rec.priority === 'high' ? 'text-orange-600' : 'text-primary'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-medium">{rec.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded ${
                          rec.priority === 'high' 
                            ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400'
                            : 'bg-primary-soft/20 text-primary'
                        }`}>
                          {rec.category}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{rec.reason}</p>
                      <Button size="sm" variant="outline">
                        Try This
                      </Button>
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

export default Insights;