import { Target, Lightbulb, Users, Trophy, Sparkles, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const visionPoints = [
    {
      icon: Brain,
      title: "Mathematical Excellence",
      description: "Fostering a culture of mathematical thinking and problem-solving across the UAE's academic institutions.",
    },
    {
      icon: Users,
      title: "Cross-University Collaboration",
      description: "Building bridges between universities and creating a unified mathematical community in the UAE.",
    },
    {
      icon: Sparkles,
      title: "Innovation & Speed",
      description: "Celebrating quick thinking, accuracy, and strategic approaches to complex integration problems.",
    },
    {
      icon: Trophy,
      title: "Academic Competition",
      description: "Providing a prestigious platform for students to showcase their mathematical prowess on a national stage.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-background to-primary/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="flex justify-center mb-6">
              <Target className="w-16 h-16 text-gold" />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-purple-deep to-primary bg-clip-text text-transparent">
              Our Vision
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
              Empowering the UAE's brightest mathematical minds through competitive excellence
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-br from-primary to-purple-deep text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Lightbulb className="w-12 h-12 mx-auto text-gold" />
            <h2 className="text-3xl sm:text-4xl font-bold">
              The Battle of Mathematical Excellence
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Takāmul Cup represents more than just a competition—it's a celebration of mathematical 
              brilliance, strategic thinking, and academic excellence. We bring together the nation's 
              brightest minds to compete in speed, accuracy, and problem-solving prowess, creating a 
              platform where mathematical talent shines on a national stage.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Points */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-purple-deep bg-clip-text text-transparent">
            What Drives Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {visionPoints.map((point, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              >
                <point.icon className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">{point.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{point.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-deep bg-clip-text text-transparent">
                The Falcon's Talon Edition
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Named after the majestic falcon, a symbol of precision, speed, and excellence in UAE 
                culture, the Falcon's Talon Edition represents our commitment to fostering mathematical 
                prowess with the same grace and power embodied by this revered national symbol.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 bg-card border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">National Expansion</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The 2025 edition marks a historic milestone as Takāmul Cup expands from its origins 
                  at NYU Abu Dhabi to become the UAE's first national integration bee, uniting six 
                  universities in mathematical competition.
                </p>
              </Card>

              <Card className="p-8 bg-card border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">Academic Excellence</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Through rigorous competition across three challenging rounds, we push participants 
                  to demonstrate not just knowledge, but the ability to think quickly, accurately, 
                  and strategically under pressure.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gradient-to-br from-gold/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-purple-deep bg-clip-text text-transparent">
              Leadership & Vision
            </h2>
            
            <Card className="p-10 bg-card border-primary/30 shadow-xl">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-foreground">Dr. Dania Zantout</h3>
                <p className="text-xl text-gold font-semibold">
                  Founding and Executive Director
                </p>
                <p className="text-lg text-muted-foreground">
                  Math Program, Division of Science • NYU Abu Dhabi
                </p>
                <div className="pt-6 border-t border-border">
                  <p className="text-lg text-foreground/80">
                    In collaboration with NYU Abu Dhabi Math SIG
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
