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
  Share2,
  Heart,
  Play,
  Radio,
  MessageSquare,
  ThumbsUp,
  User,
  Users,
  Eye,
  Star,
  Bell,
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
  // Social Media Platforms
  "Instagram": {
    icon: Instagram,
    gradient: "from-pink-500 to-purple-500",
    defaultDescription: "Instagram Followers, Likes, Views, Comments & more"
  },
  "Facebook": {
    icon: Facebook,
    gradient: "from-blue-600 to-indigo-600",
    defaultDescription: "Facebook Page Likes, Followers, Post Likes & more"
  },
  "X": {
    icon: XIcon,
    gradient: "from-neutral-700 to-neutral-900",
    defaultDescription: "X (Twitter) Followers, Likes, Retweets & more"
  },
  "Twitter": {
    icon: XIcon,
    gradient: "from-neutral-700 to-neutral-900",
    defaultDescription: "Twitter Followers, Likes, Retweets & more"
  },
  "TikTok": {
    icon: Music2,
    gradient: "from-black to-neutral-900",
    defaultDescription: "TikTok Followers, Likes, Views, Shares & more"
  },
  "YouTube": {
    icon: YoutubeIcon,
    gradient: "from-red-500 to-red-600",
    defaultDescription: "YouTube Views, Subscribers, Likes, Comments & more"
  },
  "Youtube": {
    icon: YoutubeIcon,
    gradient: "from-red-500 to-red-600",
    defaultDescription: "YouTube Views, Subscribers, Likes, Comments & more"
  },
  "Telegram": {
    icon: Send,
    gradient: "from-sky-400 to-blue-500",
    defaultDescription: "Telegram Channel Members, Post Views & more"
  },
  "Discord": {
    icon: MessageCircle,
    gradient: "from-indigo-500 to-purple-500",
    defaultDescription: "Discord Server Members, Online Members & more"
  },
  "LinkedIn": {
    icon: Linkedin,
    gradient: "from-blue-400 to-blue-600",
    defaultDescription: "LinkedIn Followers, Post Likes, Comments & more"
  },
  
  // Music Platforms
  "Spotify": {
    icon: Play,
    gradient: "from-green-500 to-green-700",
    defaultDescription: "Spotify Plays, Followers, Monthly Listeners & more"
  },
  "SoundCloud": {
    icon: Radio,
    gradient: "from-orange-500 to-red-500",
    defaultDescription: "SoundCloud Plays, Followers, Likes & more"
  },

  // Video Platforms
  "Twitch": {
    icon: Play,
    gradient: "from-purple-500 to-purple-700",
    defaultDescription: "Twitch Followers, Views, Live Stream Viewers & more"
  },
  "Vimeo": {
    icon: Play,
    gradient: "from-blue-500 to-blue-700",
    defaultDescription: "Vimeo Views, Followers, Likes & more"
  },

  // Blog & Community
  "Medium": {
    icon: MessageSquare,
    gradient: "from-green-600 to-green-800",
    defaultDescription: "Medium Followers, Claps, Article Views & more"
  },
  "Reddit": {
    icon: Share2,
    gradient: "from-orange-500 to-red-500",
    defaultDescription: "Reddit Upvotes, Followers, Awards & more"
  },
  "Quora": {
    icon: MessageSquare,
    gradient: "from-red-600 to-red-800",
    defaultDescription: "Quora Followers, Answer Views, Upvotes & more"
  },

  // Photo Sharing
  "Pinterest": {
    icon: Heart,
    gradient: "from-red-600 to-red-700",
    defaultDescription: "Pinterest Followers, Pin Saves, Board Follows & more"
  },

  // Reviews & Ratings
  "Google Reviews": {
    icon: Star,
    gradient: "from-blue-500 to-blue-700",
    defaultDescription: "Google Business Reviews & Ratings"
  },
  "App Store Reviews": {
    icon: Star,
    gradient: "from-gray-600 to-gray-800",
    defaultDescription: "iOS App Store Reviews & Ratings"
  },
  "Play Store": {
    icon: Star,
    gradient: "from-green-500 to-green-700",
    defaultDescription: "Google Play Store App Reviews & Ratings"
  },

  // Other Platforms
  "GitHub": {
    icon: GithubIcon,
    gradient: "from-gray-700 to-gray-900",
    defaultDescription: "GitHub Repository Stars, Followers & more"
  },
  "Snapchat": {
    icon: Globe,
    gradient: "from-yellow-400 to-yellow-500",
    defaultDescription: "Snapchat Followers, Story Views & more"
  },
  "Website Traffic": {
    icon: Users,
    gradient: "from-blue-400 to-blue-600",
    defaultDescription: "Website Visits, Page Views & Traffic"
  },

  // Engagement Services
  "Social Signals": {
    icon: Share2,
    gradient: "from-purple-400 to-purple-600",
    defaultDescription: "Social Media Shares, Likes & Engagement"
  },
  "Comments": {
    icon: MessageSquare,
    gradient: "from-green-400 to-green-600",
    defaultDescription: "Custom Comments for Social Media Posts"
  },
  "Followers": {
    icon: Users,
    gradient: "from-blue-500 to-blue-700",
    defaultDescription: "Followers for Various Social Platforms"
  },
  "Views": {
    icon: Eye,
    gradient: "from-indigo-500 to-indigo-700",
    defaultDescription: "Views for Videos, Posts & Content"
  },
  "Subscribers": {
    icon: Bell,
    gradient: "from-red-500 to-red-700",
    defaultDescription: "Subscribers for Channels & Pages"
  },
  "Likes": {
    icon: ThumbsUp,
    gradient: "from-pink-500 to-pink-700",
    defaultDescription: "Likes for Posts & Content"
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