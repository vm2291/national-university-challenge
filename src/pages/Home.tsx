import { Calendar, Clock, MapPin, Trophy, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Home = () => {
  const stats = [
    { icon: Users, label: "Competitors", value: "35+" },
    { icon: Trophy, label: "Universities", value: "7" },
    { icon: Target, label: "Stages", value: "5" },
  ];

  const universities = [
    "Abu Dhabi University",
    "American University in Dubai",
    "Middlesex University Dubai",
    "Heriot-Watt University Dubai",
    "UAE University",
    "NYU Abu Dhabi",
    "Mohamed bin Zayed University of Artificial Intelligence",
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-primary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary))_0%,transparent_50%)] opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--secondary))_0%,transparent_50%)] opacity-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 py-12">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-secondary via-secondary to-tertiary bg-clip-text text-transparent">
                Takãmul Cup
              </span>
            </h1>

            <div className="inline-block px-6 py-3 bg-secondary rounded-full shadow-lg mb-6">
              <p className="text-lg sm:text-xl font-bold text-secondary-foreground">
                UAE National Integration Bee
              </p>
            </div>

            <p className="text-base sm:text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-12">
              The UAE's premier integration competition for university students, where the brightest mathematical minds compete in speed, accuracy, and strategic problem-solving
            </p>

            {/* Event Details Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
              <Card className="p-6 bg-card backdrop-blur border-primary/30 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20">
                <Calendar className="w-8 h-8 text-secondary mx-auto mb-3" />
                <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Date</p>
                <p className="text-xl font-bold text-foreground">Sunday</p>
                <p className="text-2xl font-bold text-foreground">Dec 7, 2025</p>
              </Card>

              <Card className="p-6 bg-card backdrop-blur border-primary/30 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20">
                <Clock className="w-8 h-8 text-secondary mx-auto mb-3" />
                <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Time</p>
                <p className="text-2xl font-bold text-foreground">9:00 AM - 5:00 PM</p>
                <p className="text-lg text-foreground">(GST)</p>
              </Card>

              <Card className="p-6 bg-card backdrop-blur border-primary/30 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20">
                <MapPin className="w-8 h-8 text-secondary mx-auto mb-3" />
                <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Venue</p>
                <p className="text-xl font-bold text-foreground">NYUAD</p>
                <p className="text-lg text-foreground">C2 West Forum</p>
              </Card>
            </div>

            <div className="flex flex-col gap-4 justify-center items-center mt-8 sm:flex-row mb-20">
              <Link to="/event-structure">
                <Button size="lg" className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground hover:shadow-lg hover:shadow-secondary/50 transition-all duration-300">
                  Learn More
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-secondary text-secondary hover:bg-secondary/10">
                  Our Vision
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary">
            Battle of Mathematical Excellence
          </h2>
          <p className="text-center text-lg text-secondary-foreground/90 mb-12 max-w-3xl mx-auto">
            Join the UAE's premier integration competition where the nation's brightest 
            mathematical minds compete in speed, accuracy, and strategic problem-solving!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-secondary-foreground/10 backdrop-blur rounded-2xl border border-secondary-foreground/20 hover:bg-secondary-foreground/20 transition-all duration-300"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <div className="text-5xl font-bold mb-2 text-primary">{stat.value}</div>
                <div className="text-xl font-semibold uppercase tracking-wide text-secondary-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <Trophy className="w-10 h-10 text-secondary mr-3" />
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">
              Participating Universities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {universities.slice(0, 6).map((university, index) => (
              <Card
                key={index}
                className="p-6 text-center bg-card hover:bg-primary/10 border-primary/30 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10"
              >
                <p className="text-lg font-semibold text-foreground">{university}</p>
              </Card>
            ))}
            {/* Last university - full width centered */}
            <Card className="p-6 text-center bg-card hover:bg-primary/10 border-primary/30 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10 sm:col-span-2">
              <p className="text-lg font-semibold text-foreground">{universities[6]}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">
            Ready to Compete?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover more about the competition, its vision, and how you can be part of this historic event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about">
              <Button size="lg" className="text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Learn About Our Vision
              </Button>
            </Link>
            <Link to="/history">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-secondary text-secondary hover:bg-secondary/10">
                About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
