import { Card } from "@/components/ui/card";
import { Instagram, Facebook, Twitter, Send, MessageCircle, Icon, Linkedin, YoutubeIcon } from "lucide-react";
import { useState } from "react";
import PackageSelector from "./PackageSelector";

const platforms = [
  {
    name: "X (Twitter)",
    icon: Twitter,
    gradient: "from-blue-500 to-blue-600",
    description: "Increase your X visibility with authentic followers, likes, and retweets"
  },
  {
    name: "Telegram",
    icon: Send,
    gradient: "from-sky-400 to-blue-500",
    description: "Grow your Telegram channels and groups with real, active members"
  },
  {
    name: "Youtube",
    icon: YoutubeIcon,
    gradient: "from-red-500 to-red-600",
    description: "Boost your YouTube presence with views, likes, and subscribers"
  },
  {
    name: "Facebook",
    icon: Facebook,
    gradient: "from-blue-600 to-indigo-600",
    description: "Enhance your Facebook reach with followers, likes, and engagement"
  },
  {
    name: "Discord",
    icon: MessageCircle,
    gradient: "from-indigo-500 to-purple-500",
    description: "Build active Discord communities with genuine members"
  },
];

const Services = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Professional social media growth campaigns powered by Web3 technology. Choose your platform and start growing your brand today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <Card
                key={platform.name}
                className="group relative overflow-hidden bg-gradient-card backdrop-blur-xl border-border hover:shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1"
                onClick={() => setSelectedPlatform(platform.name)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-8 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{platform.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{platform.description}</p>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </Card>
            );
          })}
        </div>

        {selectedPlatform && (
          <PackageSelector 
            platform={selectedPlatform} 
            onClose={() => setSelectedPlatform(null)} 
          />
        )}
      </div>
    </section>
  );
};

export default Services;
