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
  price: string;
  features: string[];
  quality: string;
  countries?: string;
  speed?: string;
}

const platformServices: Record<string, Service[]> = {
  "X (Twitter)": [
    {
      id: "7858-Twitter( X.com) Followers",
      name: "X Followers",
      description: "Grow your X followers with real, active users",
      price: "Depending on quantity",
      features: ["Choose your Audienec", "Instant Delivery", "Up to 500-day"],
      quality: "HQ",
      countries: "UK-S.KORIA-JAPAN-INDIA-INDONESIA GERMANY"
    }
  ],
  "Telegram": [
    {
      id: "telegram_1",
      name: "Telegram Members",
      description: "Add real members to your channel or group",
      price: "From $15",
      features: ["Real accounts", "Active members", "No drop guarantee"],
      quality: "High",
      speed: "Fast"
    },
    {
      id: "telegram_2",
      name: "Telegram Views",
      description: "Increase post views and reach",
      price: "From $3",
      features: ["Instant delivery", "High retention", "Bulk packages available"],
      quality: "Premium",
      speed: "Instant"
    },
    {
      id: "telegram_3",
      name: "Telegram Reactions",
      description: "Boost engagement with post reactions",
      price: "From $8",
      features: ["Custom reactions", "Fast delivery", "Safe methods"],
      quality: "High",
      speed: "Fast"
    }
  ],
  "Instagram": [
    {
      id: "instagram_1",
      name: "Instagram Followers",
      description: "Grow your Instagram following organically",
      price: "From $12",
      features: ["High-quality followers", "Gradual delivery", "60-day refill"],
      quality: "Premium",
      speed: "Medium"
    },
    {
      id: "instagram_2",
      name: "Instagram Likes",
      description: "Boost your post engagement with likes",
      price: "From $2",
      features: ["Instant start", "Real accounts", "Safe delivery"],
      quality: "High",
      speed: "Instant"
    },
    {
      id: "instagram_3",
      name: "Instagram Story Views",
      description: "Increase your story visibility",
      price: "From $1",
      features: ["Fast delivery", "High retention", "Anonymous views"],
      quality: "High",
      speed: "Fast"
    }
  ],
  "Facebook": [
    {
      id: "facebook_1",
      name: "Facebook Page Likes",
      description: "Grow your page with targeted likes",
      price: "From $20",
      features: ["Real users", "Targeted by country", "30-day guarantee"],
      quality: "Premium",
      speed: "Medium"
    },
    {
      id: "facebook_2",
      name: "Facebook Post Engagement",
      description: "Boost likes, comments, and shares",
      price: "From $8",
      features: ["Full engagement", "Instant start", "High quality"],
      quality: "High",
      speed: "Fast"
    },
    {
      id: "facebook_3",
      name: "Facebook Video Views",
      description: "Increase your video reach and views",
      price: "From $5",
      features: ["Real views", "High retention", "Fast delivery"],
      quality: "Premium",
      speed: "Fast"
    }
  ],
  "Discord": [
    {
      id: "discord_1",
      name: "Discord Members",
      description: "Add active members to your server",
      price: "From $18",
      features: ["Real accounts", "Active users", "No drop guarantee"],
      quality: "High",
      speed: "Fast"
    },
    {
      id: "discord_2",
      name: "Discord Server Boosts",
      description: "Boost your server level and perks",
      price: "From $30",
      features: ["Instant delivery", "Secure method", "Permanent boosts"],
      quality: "Premium",
      speed: "Instant"
    },
    {
      id: "discord_3",
      name: "Discord Engagement Package",
      description: "Increase server activity and engagement",
      price: "From $25",
      features: ["Active members", "Regular activity", "Custom package"],
      quality: "Premium",
      speed: "Medium"
    }
  ]
};

interface PackageSelectorProps {
  platform: string;
  onClose: () => void;
}

const PackageSelector = ({ platform, onClose }: PackageSelectorProps) => {
  const { toast } = useToast();
  const [selectedService, setSelectedService] = useState<string>("");
  const [accountLink, setAccountLink] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");

  const services = platformServices[platform] || [];
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
Starting Price: ${service?.price}
Account/Page Link: ${accountLink}
Requested Quantity: ${quantity}

Features:
${service?.features.map(f => `- ${f}`).join('\n')}

Quality: ${service?.quality}
Speed: ${service?.speed}

Please provide me with the exact pricing for this quantity.

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
                  <div className="text-xs text-primary font-semibold">{service.price}</div>
                  <div className="text-xs text-muted-foreground">
                    💎 {service.quality} | ⚡ {service.speed}
                  </div>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {selectedServiceData && (
          <div className="mt-3 p-3 rounded-lg bg-muted/50 border border-border">
            <p className="text-sm text-muted-foreground mb-2">
              {selectedServiceData.description}
            </p>
            <p className="text-sm font-semibold text-primary mb-2">
              {selectedServiceData.price}
            </p>
            <div className="space-y-1">
              {selectedServiceData.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="text-primary">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
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
