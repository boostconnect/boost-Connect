import { Card } from "@/components/ui/card";
import { Instagram, Facebook, Twitter, Send, MessageCircle, YoutubeIcon, Music, Video, Hash, Globe, TrendingUp, Cloud, Gamepad2 } from "lucide-react";
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

// Icon mapping for platforms
const platformIcons: Record<string, any> = {
  "X (Twitter)": Twitter,
  "Telegram": Send,
  "Instagram": Instagram,
  "Facebook": Facebook,
  "Discord": MessageCircle,
  "Youtube": YoutubeIcon,
  "Spotify": Music,
  "Twitch": Video,
  "Tumblr": Hash,
  "Reddit": MessageCircle,
  "Deezer": Music,
  "Binance Square": TrendingUp,
  "Bluesky": Cloud,
  "Vimeo": Video,
  "Dailymotion": Video,
  "Shazam": Music,
  "Trovo": Gamepad2,
};

const platformGradients: Record<string, string> = {
  "X (Twitter)": "from-sky-400 to-blue-600",
  "Telegram": "from-blue-400 to-blue-600",
  "Instagram": "from-purple-600 to-pink-600",
  "Facebook": "from-blue-600 to-blue-800",
  "Discord": "from-indigo-500 to-purple-600",
  "Youtube": "from-red-500 to-red-700",
  "Spotify": "from-green-500 to-green-700",
  "Twitch": "from-purple-500 to-purple-700",
  "Tumblr": "from-indigo-600 to-blue-700",
  "Reddit": "from-orange-500 to-red-600",
  "Deezer": "from-pink-500 to-purple-600",
  "Binance Square": "from-yellow-500 to-orange-600",
  "Bluesky": "from-sky-300 to-blue-500",
  "Vimeo": "from-blue-400 to-cyan-600",
  "Dailymotion": "from-blue-600 to-indigo-700",
  "Shazam": "from-blue-500 to-indigo-600",
  "Trovo": "from-green-400 to-teal-600",
};

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

  const getPlatformIcon = (platformName: string) => {
    return platformIcons[platformName] || Globe;
  };

  const getPlatformGradient = (platformName: string) => {
    return platformGradients[platformName] || "from-gray-400 to-gray-600";
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
                      const Icon = getPlatformIcon(platformName);
                      const gradient = getPlatformGradient(platformName);
                      return (
                        <SelectItem key={platformName} value={platformName} className="text-base py-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                              <Icon className="w-4 h-4 text-white" />
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
                      const Icon = getPlatformIcon(platformName);
                      const gradient = getPlatformGradient(platformName);
                      return (
                        <SelectItem key={platformName} value={platformName} className="text-base py-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                              <Icon className="w-4 h-4 text-white" />
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
