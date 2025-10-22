import { Card } from "@/components/ui/card";
import { Instagram, Facebook, Twitter, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import PackageSelector from "@/components/PackageSelector";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const platforms = [
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
    name: "Discord",
    icon: MessageCircle,
    gradient: "from-indigo-500 to-purple-600",
    description: "Scale your Discord server engagement",
    details: "Grow your Discord community with member recruitment campaigns, server optimization, event planning, and moderation services to create a thriving community space."
  },
];

const ServicesPage = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Navbar />
      
      <main className="pt-24 pb-16 relative">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              Professional social media growth campaigns powered by Web3 technology. 
              Choose your platform and start growing your brand today.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <Card
                  key={platform.name}
                  className="group relative overflow-hidden bg-gradient-card backdrop-blur-xl border-border hover:shadow-glow transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-8 relative z-10">
                    <div className="flex items-start gap-6 mb-4">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${platform.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold mb-2">{platform.name}</h3>
                        <p className="text-muted-foreground text-lg">{platform.description}</p>
                      </div>
                    </div>
                    <p className="text-foreground/80 mb-6">{platform.details}</p>
                    <button
                      onClick={() => setSelectedPlatform(platform.name)}
                      className="px-6 py-3 bg-gradient-primary rounded-lg font-medium hover:shadow-glow transition-all duration-300"
                    >
                      View Packages
                    </button>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                </Card>
              );
            })}
          </div>

          {/* Package Selector */}
          {selectedPlatform && (
            <PackageSelector 
              platform={selectedPlatform} 
              onClose={() => setSelectedPlatform(null)} 
            />
          )}

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
