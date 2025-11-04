import {
  Instagram,
  Facebook,
  Send,
  MessageCircle,
  Linkedin,
  YoutubeIcon,
  Twitter,
  Music2,
  Globe,
  GithubIcon,
  type LucideIcon
} from "lucide-react";

// Custom X (Twitter) icon component
const XIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

// Type for platform configuration
export interface PlatformConfig {
  icon: typeof XIcon | LucideIcon;
  gradient: string;
  defaultDescription?: string;
}

// Platform icons and gradients mapping
export const platformConfigs: Record<string, PlatformConfig> = {
  "X": {
    icon: XIcon,
    gradient: "from-neutral-700 to-neutral-900",
    defaultDescription: "Boost your X presence with real followers and engagement"
  },
  "Twitter": {
    icon: XIcon,
    gradient: "from-neutral-700 to-neutral-900",
    defaultDescription: "Boost your Twitter presence with real followers and engagement"
  },
  "Telegram": {
    icon: Send,
    gradient: "from-sky-400 to-blue-500",
    defaultDescription: "Grow your Telegram channels with active members"
  },
  "Youtube": {
    icon: YoutubeIcon,
    gradient: "from-red-500 to-red-600",
    defaultDescription: "Increase YouTube views and subscribers"
  },
  "YouTube": {
    icon: YoutubeIcon,
    gradient: "from-red-500 to-red-600",
    defaultDescription: "Increase YouTube views and subscribers"
  },
  "Facebook": {
    icon: Facebook,
    gradient: "from-blue-600 to-indigo-600",
    defaultDescription: "Get more Facebook followers and engagement"
  },
  "Discord": {
    icon: MessageCircle,
    gradient: "from-indigo-500 to-purple-500",
    defaultDescription: "Build engaged Discord communities"
  },
  "Instagram": {
    icon: Instagram,
    gradient: "from-pink-500 to-purple-500",
    defaultDescription: "Grow your Instagram following and engagement"
  },
  "LinkedIn": {
    icon: Linkedin,
    gradient: "from-blue-400 to-blue-600",
    defaultDescription: "Expand your professional network on LinkedIn"
  },
  "TikTok": {
    icon: Music2,
    gradient: "from-black to-neutral-900",
    defaultDescription: "Boost your TikTok presence and followers"
  },
  "GitHub": {
    icon: GithubIcon,
    gradient: "from-gray-700 to-gray-900",
    defaultDescription: "Increase your GitHub project visibility"
  }
};

// Function to get platform configuration
export function getPlatformConfig(platformName: string): PlatformConfig {
  // Try to find exact match
  const exactMatch = platformConfigs[platformName];
  if (exactMatch) return exactMatch;

  // Try case-insensitive match
  const lowercaseName = platformName.toLowerCase();
  const match = Object.entries(platformConfigs).find(
    ([key]) => key.toLowerCase() === lowercaseName
  );
  if (match) return match[1];

  // Default fallback for unknown platforms
  return {
    icon: Globe,
    gradient: "from-gray-500 to-gray-600",
    defaultDescription: `Boost your ${platformName} presence and engagement`
  };
}