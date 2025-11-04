import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import PackageSelector from "@/components/PackageSelector";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { supabase } from "@/integrations/supabase/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getPlatformConfig } from "@/lib/platform-utils";

const ServicesPage = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");
  const [selectedPlatform2, setSelectedPlatform2] = useState<string>("");
  const [availablePlatforms, setAvailablePlatforms] = useState<string[]>([]);

  useEffect(() => {
    fetchAvailablePlatforms();
  }, []);

  const fetchAvailablePlatforms = async () => {
    const { data } = await supabase
      .from("services")
      .select("platform")
      .order("platform");

    if (data) {
      const uniquePlatforms = [...new Set(data.map(item => item.platform))];
      setAvailablePlatforms(uniquePlatforms);
    }
  };


  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Navbar />
      
      <main className="pt-24 pb-16 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Professional social media growth campaigns powered by Web3 technology. 
              Choose your platform and start growing your brand today.
            </p>
          </div>

          {/* Service Selection Form */}
          <Card className="bg-gradient-card backdrop-blur-xl border-border p-6 md:p-8 mb-12">
            <div className="space-y-6">
              {/* Search By Category */}
              <div>
                <label className="block text-sm font-medium mb-2">Search By Category</label>
                <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
                  <SelectTrigger className="w-full h-12 bg-background border-2">
                    <SelectValue placeholder="Select a platform" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover z-50">
                    {availablePlatforms.map((platformName) => {
                      const config = getPlatformConfig(platformName);
                      const Icon = config.icon;
                      return (
                        <SelectItem key={platformName} value={platformName} className="text-base py-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${config.gradient} flex items-center justify-center`}>
                              {typeof Icon === 'function' && Icon.length === 0 ? (
                                <Icon />
                              ) : (
                                <Icon className="w-4 h-4 text-white" />
                              )}
                            </div>
                            <span>{platformName}</span>
                          </div>
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>

              {/* Service Selector - shown when platform is selected */}
              {selectedPlatform && (
                <PackageSelector 
                  platform={selectedPlatform} 
                  onClose={() => setSelectedPlatform("")} 
                />
              )}
            </div>
          </Card>

          {/* Second Service Selection Form */}
          <Card className="bg-gradient-card backdrop-blur-xl border-border p-6 md:p-8 mb-12">
            <div className="space-y-6">
              {/* Search By Category */}
              <div>
                <label className="block text-sm font-medium mb-2">Add Another Service</label>
                <Select value={selectedPlatform2} onValueChange={setSelectedPlatform2}>
                  <SelectTrigger className="w-full h-12 bg-background border-2">
                    <SelectValue placeholder="Select a platform" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover z-50">
                    {availablePlatforms.map((platformName) => {
                      const config = getPlatformConfig(platformName);
                      const Icon = config.icon;
                      return (
                        <SelectItem key={platformName} value={platformName} className="text-base py-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${config.gradient} flex items-center justify-center`}>
                              {typeof Icon === 'function' && Icon.length === 0 ? (
                                <Icon />
                              ) : (
                                <Icon className="w-4 h-4 text-white" />
                              )}
                            </div>
                            <span>{platformName}</span>
                          </div>
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>

              {/* Service Selector - shown when platform is selected */}
              {selectedPlatform2 && (
                <PackageSelector 
                  platform={selectedPlatform2} 
                  onClose={() => setSelectedPlatform2("")} 
                />
              )}
            </div>
          </Card>


          {/* Why Choose Us Section */}
          <div className="mt-24 text-center">
            <h2 className="text-4xl font-bold mb-8">Why Choose Our Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 bg-gradient-card backdrop-blur-xl border-border">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-3">Fast Growth</h3>
                <p className="text-muted-foreground">
                  See real results within days with our proven growth strategies
                </p>
              </Card>
              <Card className="p-8 bg-gradient-card backdrop-blur-xl border-border">
                <div className="text-5xl mb-4">🔒</div>
                <h3 className="text-2xl font-bold mb-3">100% Safe</h3>
                <p className="text-muted-foreground">
                  Platform-compliant methods that protect your account
                </p>
              </Card>
              <Card className="p-8 bg-gradient-card backdrop-blur-xl border-border">
                <div className="text-5xl mb-4">💎</div>
                <h3 className="text-2xl font-bold mb-3">Web3 Payments</h3>
                <p className="text-muted-foreground">
                  Secure crypto payments with USDT & USDC
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
