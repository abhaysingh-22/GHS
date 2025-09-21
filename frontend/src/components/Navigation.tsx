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
  Home,
  Menu,
  Settings,
  LogOut
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: Home },
    { path: "/mood", label: "Mood", icon: Heart },
    { path: "/habits", label: "Habits", icon: Brain },
    { path: "/journal", label: "Journal", icon: BookOpen },
    { path: "/community", label: "Community", icon: Users },
    { path: "/achievements", label: "Progress", icon: Trophy },
    // { path: "/insights", label: "Insights", icon: BarChart3 },
    { path: "/companion", label: "Eliza AI", icon: MessageCircle },
    { path: "/profile", label: "Profile", icon: User },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 dark:bg-background/70 backdrop-blur-md border-b border-border/40 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/dashboard" className="text-xl font-bold bg-gradient-primary dark:bg-gradient-hero-dark bg-clip-text text-transparent">
              MindfulSpace
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center ml-6 space-x-1">
              {navItems.slice(0, 5).map((item) => (
                <Link to={item.path} key={item.path}>
                  <Button 
                    variant={location.pathname === item.path ? "secondary" : "ghost"} 
                    size="sm" 
                    className="flex items-center gap-1.5 text-xs h-8"
                  >
                    <item.icon className="h-3.5 w-3.5" />
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <ThemeToggle />
            
            <Link to="/mood">
              <Button 
                variant={location.pathname === "/mood" ? "secondary" : "ghost"} 
                size="icon" 
                className="rounded-full"
              >
                <Heart className="h-5 w-5 text-rose-500" />
              </Button>
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Navigation</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {navItems.map((item) => (
                  <Link to={item.path} key={item.path}>
                    <DropdownMenuItem className={location.pathname === item.path ? "bg-accent" : ""}>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.label}</span>
                    </DropdownMenuItem>
                  </Link>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;