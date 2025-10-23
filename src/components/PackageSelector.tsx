import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface Service {
  name: string;
  description: string;
}

const services: Service[] = [
  {
    name: "Followers Growth",
    description: "Increase your follower count with targeted audience"
  },
  {
    name: "Engagement Boost",
    description: "Improve likes, comments, and shares on your content"
  },
  {
    name: "Content Strategy",
    description: "Professional content planning and optimization"
  },
  {
    name: "Analytics & Reporting",
    description: "Track your growth with detailed analytics dashboard"
  },
  {
    name: "Community Management",
    description: "Professional management of your social media community"
  },
  {
    name: "Influencer Collaboration",
    description: "Connect with relevant influencers in your niche"
  }
];

interface PackageSelectorProps {
  platform: string;
  onClose: () => void;
}

const PackageSelector = ({ platform, onClose }: PackageSelectorProps) => {
  const { toast } = useToast();

  const handleSelectService = (service: Service) => {
    // Create mailto link
    const subject = `Service Quotation Request - ${platform}`;
    const body = `Hello,

I would like to request a quotation for the following service:

Platform: ${platform}
Service: ${service.name}
Description: ${service.description}

Please provide me with pricing details and available packages for this service.

I'm interested in payment via USDT/USDC.

Thank you!`;

    window.location.href = `mailto:info@boostconnect.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    toast({
      title: "Request Sent!",
      description: "Your email client has been opened. We'll send you a quotation soon!",
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-6xl animate-fade-in">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute -top-12 right-0 hover:bg-primary/20"
        >
          <X className="w-6 h-6" />
        </Button>

        <div className="mb-8 text-center">
          <h3 className="text-3xl font-bold mb-2">{platform} Services</h3>
          <p className="text-muted-foreground">Select a service to request a custom quotation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.name}
              className="relative overflow-hidden bg-gradient-card backdrop-blur-xl border-border hover:shadow-glow transition-all duration-300"
            >
              <div className="p-6">
                <h4 className="text-xl font-bold mb-3">{service.name}</h4>
                <p className="text-muted-foreground text-sm mb-6">{service.description}</p>
                <Button
                  onClick={() => handleSelectService(service)}
                  className="w-full bg-gradient-primary hover:shadow-glow"
                >
                  Request Quotation
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">Payment Methods Accepted</p>
          <div className="flex justify-center gap-4">
            <div className="px-6 py-3 rounded-lg bg-gradient-card border border-border">
              <span className="font-semibold text-primary">USDT</span>
            </div>
            <div className="px-6 py-3 rounded-lg bg-gradient-card border border-border">
              <span className="font-semibold text-secondary">USDC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageSelector;
