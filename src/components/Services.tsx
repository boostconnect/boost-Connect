import { Card } from "@/components/ui/card";
import { platformConfigs } from "@/lib/platform-utils";
import { useState } from "react";
import PackageSelector from "./PackageSelector";

const platforms = Object.entries(platformConfigs)
  .filter(([name]) => !["Twitter", "YouTube"].includes(name)) // Filter out duplicates
  .map(([name, config]) => ({
    name,
    icon: config.icon,
    gradient: config.gradient,
    description: config.defaultDescription
  }));

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <Card
                key={platform.name}
                className="group relative overflow-hidden bg-gradient-card backdrop-blur-xl border-border hover:shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 flex flex-col"
                onClick={() => setSelectedPlatform(platform.name)}
                style={{ animationDelay: `${index * 0.1}s` }}
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
