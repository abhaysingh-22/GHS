import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import { Send, Mic, MicOff, Bot, User } from "lucide-react";

const AICompanion = () => {
  const [message, setMessage] = useState("");
  const [isListening, setIsListening] = useState(false);

  const conversation = [
    {
      id: 1,
      type: "ai",
      message: "Hello! I'm here to support you on your wellness journey. How are you feeling today?",
      timestamp: "2 minutes ago"
    },
    {
      id: 2,
      type: "user",
      message: "I've been feeling a bit overwhelmed with work lately.",
      timestamp: "1 minute ago"
    },
    {
      id: 3,
      type: "ai",
      message: "I understand that work stress can feel overwhelming. Let's explore some strategies together. What specific aspect of work is causing you the most stress?",
      timestamp: "Just now"
    }
  ];

  const quickActions = [
    "I'm feeling anxious",
    "Help me with breathing exercises",
    "I need motivation",
    "Suggest a coping strategy",
    "I want to talk about my day",
    "Help me set a goal"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Navigation />
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-2 mb-6">
            <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Your AI Wellness Companion
            </h1>
            <p className="text-muted-foreground">A supportive guide for your mental health journey</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <Card className="bg-gradient-card shadow-card border-0 h-[600px] flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bot className="w-5 h-5 text-primary" />
                    Chat with Your AI Guide
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                    {conversation.map((msg) => (
                      <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`flex items-start gap-3 max-w-[80%] ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            msg.type === 'ai' ? 'bg-gradient-primary' : 'bg-secondary'
                          }`}>
                            {msg.type === 'ai' ? (
                              <Bot className="w-4 h-4 text-white" />
                            ) : (
                              <User className="w-4 h-4 text-secondary-foreground" />
                            )}
                          </div>
                          <div className={`p-3 rounded-lg ${
                            msg.type === 'ai' 
                              ? 'bg-muted text-muted-foreground' 
                              : 'bg-gradient-primary text-white'
                          }`}>
                            <p className="text-sm">{msg.message}</p>
                            <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <div className="flex-1 relative">
                      <Input
                        placeholder="Type your message here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="pr-10"
                        onKeyPress={(e) => e.key === 'Enter' && message.trim() && setMessage("")}
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsListening(!isListening)}
                        className={`absolute right-1 top-1/2 transform -translate-y-1/2 ${
                          isListening ? 'text-red-500' : 'text-muted-foreground'
                        }`}
                      >
                        {isListening ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
                      </Button>
                    </div>
                    <Button 
                      disabled={!message.trim()}
                      onClick={() => setMessage("")}
                      className="bg-gradient-primary hover:opacity-90"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-card shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {quickActions.map((action, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="w-full justify-start text-left h-auto py-2 px-3"
                        onClick={() => setMessage(action)}
                      >
                        {action}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-lg">Crisis Support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-destructive/10 rounded-lg">
                    <p className="text-sm font-medium text-destructive mb-2">Emergency Help</p>
                    <p className="text-xs text-muted-foreground mb-2">If you're in crisis, reach out immediately:</p>
                    <Button variant="destructive" size="sm" className="w-full">
                      Call 988 (Crisis Lifeline)
                    </Button>
                  </div>
                  <div className="p-3 bg-primary-soft/20 rounded-lg">
                    <p className="text-sm font-medium mb-1">Text Support</p>
                    <p className="text-xs text-muted-foreground">Text HOME to 741741</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-lg">Your Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Sessions this week</span>
                    <span className="font-medium">5</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Mood improvement</span>
                    <span className="font-medium text-wellness-green">+15%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Coping strategies learned</span>
                    <span className="font-medium">12</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICompanion;