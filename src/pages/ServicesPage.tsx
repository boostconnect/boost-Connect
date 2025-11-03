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
  {
    name: "Youtube",
    icon: YoutubeIcon,
    gradient: "from-red-500 to-red-700",
    description: "Expand your YouTube channel reach",
    details: "Grow your YouTube presence with video optimization, subscriber growth campaigns, and engagement strategies to build a thriving channel."
  },
  {
    name: "Spotify",
    icon: Music,
    gradient: "from-green-500 to-green-700",
    description: "Boost your Spotify artist profile",
    details: "Increase your Spotify streams, followers, and playlist placements with targeted promotion campaigns and audience engagement strategies."
  },
  {
    name: "Twitch",
    icon: Video,
    gradient: "from-purple-500 to-purple-700",
    description: "Grow your Twitch streaming audience",
    details: "Expand your Twitch channel with viewer engagement campaigns, follower growth strategies, and community building for streamers."
  },
  {
    name: "Tumblr",
    icon: Hash,
    gradient: "from-indigo-600 to-blue-700",
    description: "Amplify your Tumblr presence",
    details: "Boost your Tumblr blog with follower growth campaigns, content amplification, and engagement strategies tailored for creative communities."
  },
  {
    name: "Reddit",
    icon: MessageCircle,
    gradient: "from-orange-500 to-red-600",
    description: "Build authority on Reddit",
    details: "Grow your Reddit presence with karma building, subreddit engagement, and community participation strategies to establish credibility."
  },
  {
    name: "Deezer",
    icon: Music,
    gradient: "from-pink-500 to-purple-600",
    description: "Enhance your Deezer music profile",
    details: "Increase your Deezer streams and followers with targeted music promotion campaigns and playlist placement strategies."
  },
  {
    name: "Binance Square",
    icon: TrendingUp,
    gradient: "from-yellow-500 to-orange-600",
    description: "Boost your Binance Square influence",
    details: "Expand your reach on Binance Square with follower growth, engagement strategies, and community building in the crypto space."
  },
  {
    name: "Bluesky",
    icon: Cloud,
    gradient: "from-sky-300 to-blue-500",
    description: "Grow your Bluesky network",
    details: "Build your presence on Bluesky with strategic follower growth, engagement campaigns, and community networking in this emerging platform."
  },
  {
    name: "Vimeo",
    icon: Video,
    gradient: "from-blue-400 to-cyan-600",
    description: "Expand your Vimeo channel",
    details: "Grow your Vimeo presence with video promotion, follower acquisition, and engagement strategies tailored for creative professionals."
  },
  {
    name: "Dailymotion",
    icon: Video,
    gradient: "from-blue-600 to-indigo-700",
    description: "Boost your Dailymotion channel",
    details: "Increase your Dailymotion views and subscribers with targeted video promotion and audience growth campaigns."
  },
  {
    name: "Shazam",
    icon: Music,
    gradient: "from-blue-500 to-indigo-600",
    description: "Increase your Shazam recognition",
    details: "Boost your music discoverability on Shazam with targeted campaigns to increase recognition and listener engagement."
  },
  {
    name: "Trovo",
    icon: Gamepad2,
    gradient: "from-green-400 to-teal-600",
    description: "Grow your Trovo gaming audience",
    details: "Expand your Trovo streaming channel with viewer engagement, follower growth, and gaming community building strategies."
  },
];

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
