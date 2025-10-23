import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Service {
  id: string;
  name: string;
  description: string;
  quality: string;
  speed: string;
}

const services: Service[] = [
  {
    id: "1",
    name: "Followers Growth",
    description: "Increase your follower count with targeted audience",
    quality: "High",
    speed: "Fast"
  },
  {
    id: "2",
    name: "Engagement Boost",
    description: "Improve likes, comments, and shares on your content",
    quality: "Premium",
    speed: "Instant"
  },
  {
    id: "3",
    name: "Content Strategy",
    description: "Professional content planning and optimization",
    quality: "Premium",
    speed: "Medium"
  },
  {
    id: "4",
    name: "Analytics & Reporting",
    description: "Track your growth with detailed analytics dashboard",
    quality: "High",
    speed: "Fast"
  },
  {
    id: "5",
    name: "Community Management",
    description: "Professional management of your social media community",
    quality: "Premium",
    speed: "Medium"
  },
  {
    id: "6",
    name: "Influencer Collaboration",
    description: "Connect with relevant influencers in your niche",
    quality: "High",
    speed: "Medium"
  }
];

interface PackageSelectorProps {
  platform: string;
  onClose: () => void;
}

const PackageSelector = ({ platform, onClose }: PackageSelectorProps) => {
  const { toast } = useToast();
  const [selectedService, setSelectedService] = useState<string>("");
  const [accountLink, setAccountLink] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");

  const selectedServiceData = services.find(s => s.id === selectedService);

  const handleSubmit = () => {
    if (!selectedService || !accountLink || !quantity) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before requesting a quotation.",
        variant: "destructive"
      });
      return;
    }

    const service = services.find(s => s.id === selectedService);
    
    // Create mailto link
    const subject = `Service Quotation Request - ${platform}`;
    const body = `Hello,

I would like to request a quotation for the following service:

Platform: ${platform}
Service: ${service?.name}
Description: ${service?.description}
Account/Page Link: ${accountLink}
Requested Quantity: ${quantity}

Quality: ${service?.quality}
Speed: ${service?.speed}

Please provide me with pricing details and available packages for this service.

I'm interested in payment via USDT/USDC.

Thank you!`;

    window.location.href = `mailto:info@boostconnect.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    toast({
      title: "Request Sent!",
      description: "Your email client has been opened. We'll send you a quotation soon!",
    });

    // Reset form
    setSelectedService("");
    setAccountLink("");
    setQuantity("");
  };

  return (
    <div className="space-y-6">
      {/* Service Selection */}
      <div>
        <label className="block text-sm font-medium mb-2">Service</label>
        <Select value={selectedService} onValueChange={setSelectedService}>
          <SelectTrigger className="w-full h-12 bg-background border-2">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent className="bg-popover z-50">
            {services.map((service) => (
              <SelectItem key={service.id} value={service.id} className="text-sm py-3">
                <div className="flex flex-col gap-1">
                  <div className="font-medium">{service.name}</div>
                  <div className="text-xs text-muted-foreground">
                    💎 {service.quality} | ⚡ Speed: {service.speed}
                  </div>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {selectedServiceData && (
          <p className="text-xs text-muted-foreground mt-2">
            {selectedServiceData.description}
          </p>
        )}
      </div>

      {/* Account Link */}
      <div>
        <label className="block text-sm font-medium mb-2">Link</label>
        <Input
          type="url"
          placeholder="Enter your account/page URL"
          value={accountLink}
          onChange={(e) => setAccountLink(e.target.value)}
          className="h-12 bg-background border-2"
        />
        <p className="text-xs text-muted-foreground mt-1">
          Provide the link to your social media account or specific post
        </p>
      </div>

      {/* Quantity */}
      <div>
        <label className="block text-sm font-medium mb-2">Quantity</label>
        <Input
          type="number"
          placeholder="Enter quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="10"
          max="50000"
          className="h-12 bg-background border-2"
        />
        <p className="text-xs text-primary mt-1">
          Min: 10 - Max: 50,000
        </p>
      </div>

      {/* Submit Button */}
      <Button
        onClick={handleSubmit}
        className="w-full h-12 bg-gradient-primary hover:shadow-glow text-lg font-medium"
      >
        Request Quotation
      </Button>

      {/* Payment Info */}
      <div className="text-center pt-4 border-t">
        <p className="text-sm text-muted-foreground mb-3">Payment Methods Accepted</p>
        <div className="flex justify-center gap-4">
          <div className="px-4 py-2 rounded-lg bg-gradient-card border border-border">
            <span className="font-semibold text-primary text-sm">USDT</span>
          </div>
          <div className="px-4 py-2 rounded-lg bg-gradient-card border border-border">
            <span className="font-semibold text-secondary text-sm">USDC</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageSelector;
