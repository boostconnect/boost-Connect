import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Award, Target, Zap, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const AboutUs = () => {
  const achievements = [
    {
      icon: Users,
      number: "50K+",
      label: "Clients Served",
      description: "Trusted by thousands of brands worldwide"
    },
    {
      icon: TrendingUp,
      number: "200M+",
      label: "Total Followers Grown",
      description: "Massive audience growth across all platforms"
    },
    {
      icon: Award,
      number: "98%",
      label: "Success Rate",
      description: "Consistent results for our clients"
    },
    {
      icon: Target,
      number: "5+",
      label: "Platforms Supported",
      description: "Multi-platform expertise"
    }
  ];

  const values = [
    {
      icon: Zap,
      title: "Innovation First",
      description: "We leverage cutting-edge Web3 technology and data-driven strategies to deliver exceptional results in social media growth."
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Your account safety is our priority. We use only platform-compliant methods and secure crypto payment systems."
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "We focus on delivering measurable results that matter - real followers, genuine engagement, and sustainable growth."
    }
  ];

  const milestones = [
    { year: "2020", event: "Founded with a vision to revolutionize social media marketing" },
    { year: "2021", event: "Reached 10,000 satisfied clients across 5 platforms" },
    { year: "2022", event: "Integrated Web3 payments with USDT & USDC" },
    { year: "2023", event: "Generated 100M+ total follower growth for clients" },
    { year: "2024", event: "Expanded to 50K+ clients with 98% success rate" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Navbar />
      
      <main className="pt-24 pb-16 relative">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-20 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About Us
            </h1>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              We're pioneers in Web3-powered social media growth, helping brands amplify their presence across multiple platforms with cutting-edge strategies and secure crypto payments.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card
                  key={index}
                  className="p-8 bg-gradient-card backdrop-blur-xl border-border hover:shadow-glow transition-all duration-300 hover:scale-105 text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    {achievement.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{achievement.label}</h3>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </Card>
              );
            })}
          </div>

          {/* Our Story */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
            <Card className="p-12 bg-gradient-card backdrop-blur-xl border-border">
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Founded in 2025, we set out to transform how brands grow their social media presence. 
                Recognizing the power of authentic engagement and the potential of blockchain technology, 
                we pioneered the integration of Web3 payment systems into social media marketing services.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Today, we're proud to have helped over 500 clients grow their audience by initiate
                followers across Instagram, Facebook, X, Telegram, and Discord. Our commitment to innovation, 
                security, and results has made us a trusted partner for brands looking to amplify their digital presence.
              </p>
            </Card>
          </div>

          {/* Our Values */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={index}
                    className="p-8 bg-gradient-card backdrop-blur-xl border-border hover:shadow-glow transition-all duration-300"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {milestones.map((milestone, index) => (
                <Card
                  key={index}
                  className="p-6 bg-gradient-card backdrop-blur-xl border-border hover:shadow-glow transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent min-w-[80px]">
                      {milestone.year}
                    </div>
                    <p className="text-lg text-foreground/90 pt-1">{milestone.event}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="p-12 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-xl border-border">
              <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Brand?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of successful brands who trust us to amplify their social media presence
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-primary rounded-lg font-semibold text-lg hover:shadow-glow transition-all duration-300"
              >
                Get Started Today
              </button>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
