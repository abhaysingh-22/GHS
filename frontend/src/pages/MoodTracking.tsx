import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import Navigation from "@/components/Navigation";
import { Smile, Frown, Meh, Heart, Zap } from "lucide-react";

const MoodTracking = () => {
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [moodIntensity, setMoodIntensity] = useState([5]);
  const [notes, setNotes] = useState("");

  const moods = [
    { id: "happy", label: "Happy", icon: Smile, color: "mood-happy" },
    { id: "sad", label: "Sad", icon: Frown, color: "mood-sad" },
    { id: "anxious", label: "Anxious", icon: Heart, color: "mood-anxious" },
    { id: "calm", label: "Calm", icon: Meh, color: "mood-calm" },
    { id: "energetic", label: "Energetic", icon: Zap, color: "mood-energetic" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Navigation />
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              How are you feeling today?
            </h1>
            <p className="text-muted-foreground">Track your emotions and reflect on your day</p>
          </div>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader>
              <CardTitle>Select Your Mood</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {moods.map(({ id, label, icon: Icon, color }) => (
                  <button
                    key={id}
                    onClick={() => setSelectedMood(id)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedMood === id 
                        ? `border-${color} bg-${color}/10` 
                        : 'border-border hover:border-muted-foreground'
                    }`}
                  >
                    <Icon className={`w-8 h-8 mx-auto mb-2 ${selectedMood === id ? `text-${color}` : 'text-muted-foreground'}`} />
                    <p className={`text-sm font-medium ${selectedMood === id ? `text-${color}` : 'text-muted-foreground'}`}>
                      {label}
                    </p>
                  </button>
                ))}
              </div>

              {selectedMood && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Intensity Level: {moodIntensity[0]}/10
                    </label>
                    <Slider
                      value={moodIntensity}
                      onValueChange={setMoodIntensity}
                      max={10}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      What's on your mind? (Optional)
                    </label>
                    <Textarea
                      placeholder="Share your thoughts, what triggered this feeling, or what you're grateful for..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>

                  <Button className="w-full bg-gradient-primary hover:opacity-90">
                    Save Mood Entry
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0">
            <CardHeader>
              <CardTitle>Recent Mood History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[1, 2, 3].map((day) => (
                  <div key={day} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Smile className="w-5 h-5 text-mood-happy" />
                      <div>
                        <p className="font-medium">Happy</p>
                        <p className="text-sm text-muted-foreground">{day} day{day !== 1 ? 's' : ''} ago</p>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Intensity: 7/10
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

export default MoodTracking;