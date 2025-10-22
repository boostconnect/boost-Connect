import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Area, AreaChart, Bar, BarChart, Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { TrendingUp, Users, Target, Zap } from "lucide-react";

const followerGrowthData = [
  { month: "Jan", followers: 1200 },
  { month: "Feb", followers: 2400 },
  { month: "Mar", followers: 4800 },
  { month: "Apr", followers: 8500 },
  { month: "May", followers: 15000 },
  { month: "Jun", followers: 25000 },
];

const engagementData = [
  { platform: "Instagram", rate: 8.5 },
  { platform: "Facebook", rate: 6.2 },
  { platform: "X", rate: 5.8 },
  { platform: "Telegram", rate: 9.1 },
  { platform: "Discord", rate: 7.4 },
];

const roiData = [
  { month: "Month 1", roi: 120 },
  { month: "Month 2", roi: 185 },
  { month: "Month 3", roi: 275 },
  { month: "Month 4", roi: 340 },
  { month: "Month 5", roi: 450 },
  { month: "Month 6", roi: 580 },
];

const chartConfig = {
  followers: {
    label: "Followers",
    color: "hsl(var(--primary))",
  },
  rate: {
    label: "Engagement Rate %",
    color: "hsl(var(--primary))",
  },
  roi: {
    label: "ROI %",
    color: "hsl(var(--primary))",
  },
};

const stats = [
  {
    title: "Active Campaigns",
    value: "500+",
    icon: Target,
    trend: "+45%",
  },
  {
    title: "Average Growth",
    value: "285%",
    icon: TrendingUp,
    trend: "+120%",
  },
  {
    title: "Total Reach",
    value: "10M+",
    icon: Users,
    trend: "+78%",
  },
  {
    title: "Success Rate",
    value: "94%",
    icon: Zap,
    trend: "+12%",
  },
];

const GrowthStats = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proven Growth Results
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real data from our campaigns showing the power of strategic social media marketing
          </p>
        </div>

        {/* Key Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.title}
                className="bg-gradient-card backdrop-blur-xl border-border hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-semibold text-accent">{stat.trend}</span>
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.title}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Follower Growth Chart */}
          <Card className="bg-gradient-card backdrop-blur-xl border-border animate-fade-in">
            <CardHeader>
              <CardTitle>Follower Growth Trajectory</CardTitle>
              <CardDescription>Average 6-month campaign results</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <AreaChart data={followerGrowthData}>
                  <defs>
                    <linearGradient id="colorFollowers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                  <XAxis 
                    dataKey="month" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="followers"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorFollowers)"
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Engagement Rate Chart */}
          <Card className="bg-gradient-card backdrop-blur-xl border-border animate-fade-in">
            <CardHeader>
              <CardTitle>Platform Engagement Rates</CardTitle>
              <CardDescription>Average engagement by platform</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <BarChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                  <XAxis 
                    dataKey="platform" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar 
                    dataKey="rate" 
                    fill="hsl(var(--primary))"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* ROI Growth Chart */}
          <Card className="bg-gradient-card backdrop-blur-xl border-border animate-fade-in lg:col-span-2">
            <CardHeader>
              <CardTitle>Return on Investment Growth</CardTitle>
              <CardDescription>Progressive ROI increase over campaign duration</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <LineChart data={roiData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                  <XAxis 
                    dataKey="month" 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="roi"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 6 }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GrowthStats;
