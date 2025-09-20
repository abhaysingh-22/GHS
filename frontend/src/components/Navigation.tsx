import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Brain, 
  BookOpen, 
  MessageCircle, 
  Users, 
  Trophy, 
  BarChart3, 
  User, 
  Home 
} from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/mood", label: "Mood", icon: Heart },
    { path: "/habits", label: "Habits", icon: Brain },
    { path: "/journal", label: "Journal", icon: BookOpen },
    { path: "/community", label: "Community", icon: Users },
    { path: "/achievements", label: "Progress", icon: Trophy },
    // { path: "/insights", label: "Insights", icon: BarChart3 },
    { path: "/companion", label: "Eliza Ai", icon: MessageCircle },
    { path: "/dashboard", label: "Dashboard", icon: Home },
    { path: "/profile", label: "Profile", icon: User },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/dashboard" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            MindfulSpace
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link key={path} to={path}>
                <Button 
                  variant={location.pathname === path ? "default" : "ghost"}
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Icon size={16} />
                  <span className="hidden lg:inline">{label}</span>
                </Button>
              </Link>
            ))}
          </div>

          {/* <div className="flex items-center space-x-2">
            <Link to="/profile">
              <Button variant="outline" size="sm">
                <User size={16} />
              </Button>
            </Link>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;