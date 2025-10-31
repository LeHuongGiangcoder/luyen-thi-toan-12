import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor?: "primary" | "accent";
}

export const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  accentColor = "primary" 
}: FeatureCardProps) => {
  return (
    <div className="glass glass-hover rounded-2xl p-8 space-y-6 h-full flex flex-col">
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${
        accentColor === "accent" ? "bg-gradient-accent" : "bg-gradient-primary"
      }`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      
      <div className="space-y-3 flex-grow">
        <h3 className="text-h3 font-bold text-primary font-heading">
          {title}
        </h3>
        <p className="text-body text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      
      <Button 
        variant="outline" 
        className="w-full glass border-primary/20 text-primary hover:bg-primary/10 font-semibold rounded-xl mt-auto"
      >
        Khám Phá
      </Button>
    </div>
  );
};
