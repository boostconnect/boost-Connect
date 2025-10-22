import { Card } from "@/components/ui/card";
import { Instagram, Facebook, Twitter, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import PackageSelector from "./PackageSelector";

const platforms = [
  {
    name: "Instagram",
    icon: Instagram,
    gradient: "from-purple-600 to-pink-600",
    description: "Grow your Instagram presence with targeted campaigns"
  },
  {
    name: "Facebook",
    icon: Facebook,
    gradient: "from-blue-600 to-blue-800",
    description: "Expand your Facebook reach and engagement"
  },
  {
    name: "X (Twitter)",
    icon: Twitter,
    gradient: "from-sky-400 to-blue-600",
    description: "Build your X following with strategic campaigns"
  },
  {
    name: "Telegram",
    icon: Send,
    gradient: "from-blue-400 to-blue-600",
    description: "Boost your Telegram community growth"
  },
  {
    name: "Discord",
    icon: MessageCircle,
    gradient: "from-indigo-500 to-purple-600",
    description: "Scale your Discord server engagement"
  },
];

const Services = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose your platform and select the perfect package to grow your audience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <Card
                key={platform.name}
                className="group relative overflow-hidden bg-gradient-card backdrop-blur-xl border-border hover:shadow-glow cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => setSelectedPlatform(platform.name)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-8 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{platform.name}</h3>
                  <p className="text-muted-foreground">{platform.description}</p>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
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
