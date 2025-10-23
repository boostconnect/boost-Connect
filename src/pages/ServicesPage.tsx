import { Card } from "@/components/ui/card";
import { Instagram, Facebook, Twitter, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import PackageSelector from "@/components/PackageSelector";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const platforms = [
  {
    name: "X (Twitter)",
    icon: Twitter,
    gradient: "from-sky-400 to-blue-600",
    description: "Build your X following with strategic campaigns",
    details: "Accelerate your X growth with trending topic engagement, strategic posting schedules, retweet campaigns, and authentic community building to establish your brand voice."
  },
  {
    name: "Telegram",
    icon: Send,
    gradient: "from-blue-400 to-blue-600",
    description: "Boost your Telegram community growth",
    details: "Expand your Telegram channel or group with targeted member acquisition, engagement strategies, and community management to build a loyal and active audience."
  },
  {
    name: "Instagram",
    icon: Instagram,
    gradient: "from-purple-600 to-pink-600",
    description: "Grow your Instagram presence with targeted campaigns",
    details: "Our Instagram growth service includes strategic content planning, hashtag optimization, engagement tactics, and influencer collaboration to maximize your reach and follower growth."
  },
  {
    name: "Facebook",
    icon: Facebook,
    gradient: "from-blue-600 to-blue-800",
    description: "Expand your Facebook reach and engagement",
    details: "Boost your Facebook page with targeted ad campaigns, community management, viral content creation, and data-driven strategies to increase your audience and engagement rates."
  },
  {
    name: "Discord",
    icon: MessageCircle,
    gradient: "from-indigo-500 to-purple-600",
    description: "Scale your Discord server engagement",
    details: "Grow your Discord community with member recruitment campaigns, server optimization, event planning, and moderation services to create a thriving community space."
  },
];

const ServicesPage = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");

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
                    {platforms.map((platform) => {
                      const Icon = platform.icon;
                      return (
                        <SelectItem key={platform.name} value={platform.name} className="text-base py-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${platform.gradient} flex items-center justify-center`}>
                              <Icon className="w-4 h-4 text-white" />
                            </div>
                            <span>{platform.name}</span>
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
