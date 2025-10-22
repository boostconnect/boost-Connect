import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface Package {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

const packages: Package[] = [
  {
    name: "Starter",
    price: "$99",
    features: [
      "1,000 targeted followers",
      "Basic engagement boost",
      "7-day campaign",
      "Email support"
    ]
  },
  {
    name: "Growth",
    price: "$299",
    popular: true,
    features: [
      "5,000 targeted followers",
      "Advanced engagement",
      "14-day campaign",
      "Priority support",
      "Analytics dashboard"
    ]
  },
  {
    name: "Pro",
    price: "$599",
    features: [
      "15,000 targeted followers",
      "Premium engagement",
      "30-day campaign",
      "24/7 dedicated support",
      "Advanced analytics",
      "Custom strategy"
    ]
  }
];

interface PackageSelectorProps {
  platform: string;
  onClose: () => void;
}

const PackageSelector = ({ platform, onClose }: PackageSelectorProps) => {
  const { toast } = useToast();
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const handleSelectPackage = (pkg: Package) => {
    setSelectedPackage(pkg);
    
    // Create mailto link
    const subject = `Social Media Campaign Request - ${platform}`;
    const body = `Hello,

I would like to request a ${pkg.name} package for ${platform}.

Package Details:
- Platform: ${platform}
- Package: ${pkg.name}
- Price: ${pkg.price}

Features:
${pkg.features.map(f => `- ${f}`).join('\n')}

Please contact me to discuss payment options (USDT/USDC) and campaign details.

Thank you!`;

    window.location.href = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    toast({
      title: "Request Sent!",
      description: "Your email client has been opened. We'll contact you soon!",
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
          <h3 className="text-3xl font-bold mb-2">{platform} Packages</h3>
          <p className="text-muted-foreground">Select the perfect package for your growth goals</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={`relative overflow-hidden bg-gradient-card backdrop-blur-xl border-border hover:shadow-glow transition-all duration-300 ${
                pkg.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-primary text-white px-4 py-1 text-sm font-semibold">
                  POPULAR
                </div>
              )}
              <div className="p-8">
                <h4 className="text-2xl font-bold mb-2">{pkg.name}</h4>
                <div className="mb-6">
                  <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {pkg.price}
                  </span>
                  <span className="text-muted-foreground"> /campaign</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => handleSelectPackage(pkg)}
                  className={`w-full ${
                    pkg.popular
                      ? 'bg-gradient-primary hover:shadow-glow'
                      : 'bg-card border border-primary text-primary hover:bg-primary/10'
                  }`}
                >
                  Select Package
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
