import { Target, Lightbulb, Users, Trophy, Sparkles, Brain, Calendar, Award, BookOpen, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";

const About = () => {
  const eventPhotos = [
    "/IMG_9563.jpeg",
    "/IMG_9533.jpeg",
    "/IMG_9548.jpeg",
    "/IMG_9565.jpeg"
  ];

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

  const milestones = [
    {
      year: "2024",
      title: "The Beginning",
      description: "The inaugural Integration Bee was held at NYU Abu Dhabi, bringing together students from across the university to compete in mathematical excellence.",
      icon: Sparkles,
    },
    {
      year: "2024",
      title: "Three Skill Levels",
      description: "Competitors were divided into Beginner, Intermediate, and Advanced categories, ensuring fair competition and opportunities for all skill levels.",
      icon: TrendingUp,
    },
    {
      year: "2024",
      title: "Multi-Round Competition",
      description: "The competition featured multiple challenging rounds, testing participants on speed, accuracy, and problem-solving under pressure.",
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-primary/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="flex justify-center mb-6">
              <BookOpen className="w-16 h-16 text-secondary" />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-secondary via-secondary to-tertiary bg-clip-text text-transparent">
              About Us
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
              From NYU Abu Dhabi to a national stage — empowering the UAE's brightest mathematical minds
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-primary text-tertiary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Lightbulb className="w-12 h-12 mx-auto text-secondary" />
            <h2 className="text-3xl sm:text-4xl font-bold text-tertiary">
              The Battle of Mathematical Excellence
            </h2>
            <p className="text-xl text-tertiary/90 leading-relaxed">
              Takãmul Cup represents more than just a competition—it's a celebration of mathematical 
              brilliance, strategic thinking, and academic excellence. We bring together the nation's 
              brightest minds to compete in speed, accuracy, and problem-solving prowess, creating a 
              platform where mathematical talent shines on a national stage.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Points */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">
            What Drives Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {visionPoints.map((point, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-primary/30 hover:border-secondary/40 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/10"
              >
                <point.icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">{point.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{point.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">
                The Falcon's Talon Edition
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Named after the majestic falcon, a symbol of precision, speed, and excellence in UAE 
                culture, the Falcon's Talon Edition represents our commitment to fostering mathematical 
                prowess with the same grace and power embodied by this revered national symbol.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 bg-card border-primary/30">
                <h3 className="text-2xl font-bold text-foreground mb-4">National Expansion</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The 2025 edition marks a historic milestone as Takãmul Cup expands from its origins 
                  at NYU Abu Dhabi to become the UAE's first national integration bee, uniting six 
                  universities in mathematical competition.
                </p>
              </Card>

              <Card className="p-8 bg-card border-primary/30">
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

      {/* Origin Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">
                Where It All Started
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The Takãmul Cup story began in the halls of NYU Abu Dhabi, where a vision 
                to celebrate mathematical excellence took its first steps.
              </p>
            </div>

            <Card className="p-10 bg-primary/10 border-secondary/30">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Calendar className="w-8 h-8 text-secondary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Fall 2024</h3>
                    <p className="text-lg text-muted-foreground">NYU Abu Dhabi Campus</p>
                  </div>
                </div>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Under the leadership of Dr. Dania Zantout and in collaboration with the NYU Abu Dhabi 
                  Math SIG, the first Integration Bee brought together students passionate about mathematics 
                  to compete in a friendly yet challenging environment. What started as a campus event 
                  would soon grow into something much larger.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">
            Key Milestones
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {milestones.map((milestone, index) => (
              <Card
                key={index}
                className="p-8 bg-card border-primary/30 hover:border-secondary/40 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/10"
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                      <milestone.icon className="w-8 h-8 text-secondary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-secondary">{milestone.year}</span>
                      <h3 className="text-2xl font-bold text-foreground">{milestone.title}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 2024 Event Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-center bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">
              2024 Event Highlights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 bg-card border-primary/30">
                <Users className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">Student Participation</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Students from across NYU Abu Dhabi came together to test their integration skills 
                  in a competitive yet supportive environment, setting the foundation for future events.
                </p>
              </Card>

              <Card className="p-8 bg-card border-primary/30">
                <Award className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">Challenging Problems</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Multiple rounds of carefully designed integration problems tested participants on 
                  trigonometric, logarithmic, and exponential functions across varying difficulty levels.
                </p>
              </Card>
            </div>

            {/* Event Photos Grid */}
            <Card className="p-4 sm:p-6 md:p-8 bg-primary/10 border-secondary/30">
              <div className="text-center space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-tertiary mb-2">
                  2024 Event Photos
                </h3>
                <p className="text-sm sm:text-base text-tertiary/80 italic mb-6">
                  Memorable moments from our inaugural event at NYU Abu Dhabi
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
                  {eventPhotos.map((photo, index) => (
                    <div 
                      key={index} 
                      className="relative overflow-hidden rounded-lg bg-muted/20 aspect-[4/3] shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <img
                        src={photo}
                        alt={`2024 Event Photo ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading={index < 2 ? "eager" : "lazy"}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Growth Section */}
      <section className="py-20 bg-primary text-tertiary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-tertiary">
              Growing Beyond Campus
            </h2>
            <p className="text-xl text-tertiary/90 leading-relaxed">
              The success and enthusiasm from the 2024 event inspired the vision to expand beyond 
              NYU Abu Dhabi. In 2025, Takãmul Cup takes its place as the UAE's premier national 
              integration competition, bringing together seven universities in a celebration of 
              mathematical excellence that transcends campus boundaries.
            </p>
            <div className="pt-8">
              <p className="text-2xl font-bold text-secondary">
                From one university to six. From campus event to national competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">
              Leadership & Vision
            </h2>
            
            <Card className="p-10 bg-card border-secondary/30 shadow-xl">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-foreground">Dr. Dania Zantout</h3>
                <p className="text-xl text-secondary font-semibold">
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

      <Footer />
    </div>
  );
};

export default About;