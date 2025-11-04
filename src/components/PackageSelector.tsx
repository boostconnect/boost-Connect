import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
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

// Removed hardcoded services - now fully dynamic from database

interface PackageSelectorProps {
  platform: string;
  onClose: () => void;
}

const PackageSelector = ({ platform, onClose }: PackageSelectorProps) => {
  const { toast } = useToast();
  const [selectedService, setSelectedService] = useState<string>("");
  const [accountLink, setAccountLink] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, [platform]);

  const fetchServices = async () => {
    const { data } = await supabase
      .from("services")
      .select("*")
      .eq("platform", platform);

    if (data) {
      const mappedServices: Service[] = data.map(service => ({
        id: service.id,
        name: service.service_name,
        description: service.description || "",
        price: service.price,
        features: service.features || [],
        quality: service.quality || "",
        countries: service.countries || undefined,
        speed: service.speed || undefined,
      }));
      setServices(mappedServices);
    }
  };

  const selectedServiceData = services.find(s => s.id === selectedService);

  const renderServiceDetails = () => {
    if (!selectedServiceData) return null;
    return (
      <div className="mt-6 p-6 bg-muted/50 rounded-lg">
        <h4 className="font-semibold mb-4">Service Details</h4>
        <div className="space-y-3">
          {selectedServiceData.description && (
            <p className="text-sm text-muted-foreground">{selectedServiceData.description}</p>
          )}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {selectedServiceData.quality && (
              <div>
                <span className="text-sm font-medium">Quality:</span>
                <p className="text-sm text-muted-foreground">{selectedServiceData.quality}</p>
              </div>
            )}
            {selectedServiceData.speed && (
              <div>
                <span className="text-sm font-medium">Speed:</span>
                <p className="text-sm text-muted-foreground">{selectedServiceData.speed}</p>
              </div>
            )}
          </div>
          {selectedServiceData.features && selectedServiceData.features.length > 0 && (
            <div className="mt-4">
              <span className="text-sm font-medium">Features:</span>
              <ul className="mt-2 space-y-1">
                {selectedServiceData.features.map((feature, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-center">
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderServiceDetails = () => {
    if (!selectedServiceData) return null;
    return (
      <Card className="mt-6 p-6">
        <h4 className="font-semibold mb-4 text-lg">Service Details</h4>
        <div className="space-y-4">
          {selectedServiceData.description && (
            <div className="pb-4 border-b">
              <p className="text-sm text-muted-foreground">{selectedServiceData.description}</p>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <span className="text-sm font-medium block mb-1">Price</span>
              <p className="text-lg font-semibold text-primary">{selectedServiceData.price}</p>
            </div>
            {selectedServiceData.quality && (
              <div>
                <span className="text-sm font-medium block mb-1">Quality</span>
                <p className="text-muted-foreground">{selectedServiceData.quality}</p>
              </div>
            )}
            {selectedServiceData.speed && (
              <div>
                <span className="text-sm font-medium block mb-1">Delivery Speed</span>
                <p className="text-muted-foreground">{selectedServiceData.speed}</p>
              </div>
            )}
          </div>
          {selectedServiceData.features && selectedServiceData.features.length > 0 && (
            <div className="pt-4 border-t">
              <span className="text-sm font-medium mb-2 block">Features:</span>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {selectedServiceData.features.map((feature, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Card>
    );
  };

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
