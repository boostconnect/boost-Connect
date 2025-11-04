import { Card } from "@/components/ui/card";
import {
  YoutubeIcon,
  LinkedinIcon,
  Music2,
  Send,
  MessageCircle,
  Radio,
  Share2,
  Newspaper,
  Play,
  Coins,
  Globe
} from "lucide-react";
import { useState } from "react";
import PackageSelector from "./PackageSelector";

// Custom X (Twitter) icon component
const XIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const categories = [
  {
    name: "Social Media",
    platforms: [
      {
        name: "X (Twitter)",
        icon: XIcon,
        gradient: "from-neutral-700 to-neutral-900",
        description: "Boost your X presence with real followers and engagement"
      },
      {
        name: "YouTube",
        icon: YoutubeIcon,
        gradient: "from-red-500 to-red-600",
        description: "Increase YouTube views and subscribers"
      },
      {
        name: "LinkedIn",
        icon: LinkedinIcon,
        gradient: "from-blue-400 to-blue-600",
        description: "Expand your professional network on LinkedIn"
      },
      {
        name: "TikTok",
        icon: Music2,
        gradient: "from-black to-neutral-900",
        description: "Boost your TikTok presence and followers"
      }
    ]
  },
  {
    name: "Messaging & Communities",
    platforms: [
      {
        name: "Telegram",
        icon: Send,
        gradient: "from-sky-400 to-blue-500",
        description: "Grow your Telegram channels with active members"
      },
      {
        name: "Discord",
        icon: MessageCircle,
        gradient: "from-indigo-500 to-purple-500",
        description: "Build engaged Discord communities"
      },
      {
        name: "Reddit",
        icon: Share2,
        gradient: "from-orange-500 to-red-500",
        description: "Boost your Reddit community and engagement"
      }
    ]
  },
  {
    name: "Music & Streaming",
    platforms: [
      {
        name: "Spotify",
        icon: Music2,
        gradient: "from-green-500 to-green-700",
        description: "Grow your Spotify presence and listeners"
      },
      {
        name: "Deezer",
        icon: Radio,
        gradient: "from-purple-500 to-purple-700",
        description: "Increase your Deezer plays and followers"
      },
      {
        name: "Twitch",
        icon: Play,
        gradient: "from-purple-600 to-purple-800",
        description: "Grow your Twitch channel and viewership"
      }
    ]
  },
  {
    name: "Video Platforms",
    platforms: [
      {
        name: "Vimeo",
        icon: Play,
        gradient: "from-blue-500 to-blue-700",
        description: "Boost your Vimeo views and engagement"
      },
      {
        name: "Rumble",
        icon: Play,
        gradient: "from-green-600 to-green-800",
        description: "Grow your Rumble channel audience"
      },
      {
        name: "FanVue",
        icon: Play,
        gradient: "from-pink-500 to-pink-700",
        description: "Expand your FanVue following and content reach"
      }
    ]
  },
  {
    name: "Other Platforms",
    platforms: [
      {
        name: "Medium",
        icon: Newspaper,
        gradient: "from-green-600 to-green-800",
        description: "Build your Medium blog audience"
      },
      {
        name: "Binance Square",
        icon: Coins,
        gradient: "from-yellow-400 to-yellow-600",
        description: "Grow your Binance Square presence"
      }
    ]
  }
];

const Services = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500">Our Services</h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Professional social media growth campaigns powered by Web3 technology. Choose your platform and start growing your brand today.
          </p>
        </div>

        {categories.map((category, categoryIndex) => (
          <div key={category.name} className="mb-12">
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500">
              {category.name}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {category.platforms.map((platform, platformIndex) => {
                const Icon = platform.icon;
                const delay = categoryIndex * 0.2 + platformIndex * 0.1;
                
                return (
                  <Card
                    key={platform.name}
                    className="group relative overflow-hidden bg-gradient-card backdrop-blur-xl border-border hover:shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 flex flex-col"
                    onClick={() => setSelectedPlatform(platform.name)}
                    style={{ animationDelay: `${delay}s` }}
                  >
                    <div className="p-6 relative z-10 flex flex-col h-full">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${platform.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {typeof platform.icon === 'function' ? (
                          <platform.icon />
                        ) : (
                          <Icon className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <div className="flex-1 min-h-0">
                        <h3 className="text-lg font-bold mb-2">{platform.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{platform.description}</p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-border/30">
                        <span className="text-sm font-medium text-primary flex items-center gap-1">
                          View Services 
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  </Card>
                );
              })}
            </div>
          </div>
        ))}

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
