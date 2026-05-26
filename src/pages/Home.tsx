import { Calendar, Clock, MapPin, Trophy, Users, Target, Brain, Sparkles, Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";
const Home = () => {
  const stats = [{
    icon: Users,
    label: "Competitors",
    value: "35+"
  }, {
    icon: Trophy,
    label: "Universities",
    value: "7"
  }, {
    icon: Target,
    label: "Stages",
    value: "5"
  }];
  const universities = ["Abu Dhabi University", "American University in Dubai", "Middlesex University Dubai", "Heriot-Watt University Dubai", "UAE University", "NYU Abu Dhabi", "Mohamed bin Zayed University of Artificial Intelligence"];
  return <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden pt-12 pb-16 bg-background">
        {/* Soft warm radials */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_30%_40%,hsl(var(--primary)/0.28)_0%,transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,hsl(var(--secondary)/0.18)_0%,transparent_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Text column */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-7 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/40 bg-card/60 backdrop-blur-sm animate-in fade-in slide-in-from-top-2 duration-700">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                <p className="text-[11px] sm:text-xs font-medium tracking-[0.22em] text-secondary uppercase">
                  National University Integration Bee
                </p>
              </div>

              <h1 style={{ fontFamily: "'Work Sans', sans-serif" }} className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
                <span className="block bg-gradient-to-r from-[#a86b3e] via-[#e8c590] to-[#3d2515] bg-clip-text text-transparent">
                  Takãmul
                </span>
                <span className="block text-foreground">Cup</span>
              </h1>

              <p className="text-lg sm:text-xl text-foreground/75 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                The UAE's premier integration competition for university students, where the brightest mathematical minds compete in speed, accuracy, and strategic problem-solving.
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
                <Link to="/event-structure">
                  <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2 px-6 h-12 rounded-full shadow-lg shadow-secondary/20">
                    Event Details <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/event-gallery">
                  <Button variant="outline" className="border-secondary/40 text-foreground hover:bg-muted/40 gap-2 px-6 h-12 rounded-full">
                    View 2025 Gallery
                  </Button>
                </Link>
              </div>
            </div>

            {/* Photo collage column */}
            <div className="lg:col-span-5 relative h-[420px] sm:h-[480px] lg:h-[560px] animate-in fade-in duration-1000">
              <div className="absolute top-0 right-0 w-[62%] h-[58%] rounded-2xl overflow-hidden shadow-2xl shadow-tertiary/20 border-4 border-card rotate-[3deg] hover:rotate-0 transition-transform duration-700 ease-out animate-in slide-in-from-right-8 fade-in" style={{ animationDelay: "200ms", animationFillMode: "both" }}>
                <img src={hero1} alt="Takãmul Cup competition" className="w-full h-full object-cover" loading="eager" />
              </div>
              <div className="absolute bottom-0 left-0 w-[58%] h-[55%] rounded-2xl overflow-hidden shadow-2xl shadow-tertiary/20 border-4 border-card -rotate-[4deg] hover:rotate-0 transition-transform duration-700 ease-out animate-in slide-in-from-left-8 fade-in" style={{ animationDelay: "400ms", animationFillMode: "both" }}>
                <img src={hero2} alt="Competitors solving integrals" className="w-full h-full object-cover" loading="eager" />
              </div>
              <div className="absolute top-[28%] left-[34%] w-[44%] h-[44%] rounded-2xl overflow-hidden shadow-2xl shadow-tertiary/30 border-4 border-card rotate-[-2deg] hover:rotate-0 transition-transform duration-700 ease-out animate-in zoom-in-50 fade-in" style={{ animationDelay: "600ms", animationFillMode: "both" }}>
                <img src={hero3} alt="Award ceremony" className="w-full h-full object-cover" loading="eager" />
              </div>
              {/* Soft glow */}
              <div className="absolute -inset-8 -z-10 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.35)_0%,transparent_60%)] blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Battle of Mathematical Excellence Section */}
      <section className="py-16 bg-card/40 text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">
            Battle of Mathematical Excellence
          </h2>
          <p className="text-center text-lg text-foreground/85 mb-12 max-w-3xl mx-auto">
            Join the UAE's premier integration competition where the nation's brightest 
            mathematical minds compete in speed, accuracy, and strategic problem-solving!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => <div key={index} className="text-center p-8 bg-tertiary/10 backdrop-blur rounded-2xl border border-tertiary/20 hover:bg-tertiary/20 transition-all duration-300">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <div className="text-5xl font-bold mb-2 text-secondary">{stat.value}</div>
                <div className="text-xl font-semibold uppercase tracking-wide text-foreground">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-12">
            <Trophy className="w-10 h-10 text-secondary mr-3" />
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#a86b3e] via-[#7a4520] to-[#3d2515] bg-clip-text text-transparent">
              Participating Universities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {universities.slice(0, 6).map((university, index) => <Card key={index} className="p-6 text-center bg-card hover:bg-muted/20 border-border hover:border-secondary/40 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
                <p className="text-lg font-semibold text-foreground">{university}</p>
              </Card>)}
            {/* Last university - full width centered */}
            <Card className="p-6 text-center bg-card hover:bg-muted/20 border-border hover:border-secondary/40 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10 sm:col-span-2">
              <p className="text-lg font-semibold text-foreground">{universities[6]}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#a86b3e] via-[#7a4520] to-[#3d2515] bg-clip-text text-transparent">
            Event Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-8 bg-card backdrop-blur border-border hover:border-secondary/40 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 text-center">
              <Calendar className="w-10 h-10 text-secondary mx-auto mb-4" />
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Date</p>
              <p className="text-xl font-bold text-foreground">Sunday</p>
              <p className="text-2xl font-bold text-foreground">Dec 7, 2025</p>
            </Card>
            <Card className="p-8 bg-card backdrop-blur border-border hover:border-secondary/40 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 text-center">
              <Clock className="w-10 h-10 text-secondary mx-auto mb-4" />
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Time</p>
              <p className="text-2xl font-bold text-foreground">9:00 AM - 5:00 PM</p>
              <p className="text-lg text-foreground">(GST)</p>
            </Card>
            <Card className="p-8 bg-card backdrop-blur border-border hover:border-secondary/40 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 text-center">
              <MapPin className="w-10 h-10 text-secondary mx-auto mb-4" />
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Venue</p>
              <p className="text-xl font-bold text-foreground">NYU Abu Dhabi</p>
              <p className="text-lg text-foreground">C2 West Forum</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-secondary/10 via-background to-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#a86b3e] via-[#7a4520] to-[#3d2515] bg-clip-text text-transparent">
            What Participants Had to Say About Their Experience
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 mb-10">
            <Card className="p-6 md:p-8 bg-card border-border hover:shadow-lg transition-all duration-300 ml-0 md:mr-12">
              <div className="flex gap-4">
                <Quote className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <blockquote className="text-foreground/90 text-lg leading-relaxed mb-2">
                    The Takāmul Cup was an intense but rewarding experience that pushed me to think quickly, collaborate under pressure, and apply integration techniques creatively. Competing at a national level was both challenging and motivating, and it strengthened my confidence in problem-solving beyond the classroom.
                  </blockquote>
                  <p className="text-sm text-muted-foreground font-medium">- Mohammed Faheem, NYU Abu Dhabi</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 md:p-8 bg-muted/40 border-border hover:shadow-lg transition-all duration-300 mr-0 md:ml-12">
              <div className="flex gap-4">
                <Quote className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <blockquote className="text-foreground/90 text-lg leading-relaxed mb-2">
                    Takāmul Cup was one of the most exciting competitions I've ever participated in. The fast pace and clear objective leaves you with almost no time to be nervous and get straight into solving the problem. The feeling this left me with is unmatched.
                  </blockquote>
                  <p className="text-sm text-muted-foreground font-medium">- Guram Matcharashvili, Mohamed bin Zayed University of Artificial Intelligence</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 md:p-8 bg-card border-border hover:shadow-lg transition-all duration-300 ml-0 md:mr-12">
              <div className="flex gap-4">
                <Quote className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <blockquote className="text-foreground/90 text-lg leading-relaxed mb-2">
                    I loved the entire experience! I think it was really nice to have a space to challenge ourselves. As someone without a very heavy math background, the Takamul Cup also gave me a reason to really refine my skills. The entire competition was memorable. I loved how organised the competition was. All of the participants clearly understood the structure and the flow of the different stages. Everyone there was really nice which made competing a lot less stressful.
                  </blockquote>
                  <p className="text-sm text-muted-foreground font-medium">- Michelle Haguma, Middlesex University Dubai</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 md:p-8 bg-muted/40 border-border hover:shadow-lg transition-all duration-300 mr-0 md:ml-12">
              <div className="flex gap-4">
                <Quote className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <blockquote className="text-foreground/90 text-lg leading-relaxed mb-2">
                    Math war. Never knew a math competition could be this exciting. The structure was fun, especially the tie breakers. They were vastly different, you turn from aiming to beat your opponent to pushing yourself to the absolute limit.
                  </blockquote>
                  <p className="text-sm text-muted-foreground font-medium">- Islam Aldaraghmeh, Mohamed bin Zayed University of Artificial Intelligence</p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="text-center">
            <Link to="/testimonials">
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2">
                Read more 
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Competition Philosophy Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Brain className="w-10 h-10 text-secondary mr-3" />
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#a86b3e] via-[#7a4520] to-[#3d2515] bg-clip-text text-transparent">
                Competition Philosophy
          </h2>
            </div>
            
            <Card className="p-8 bg-card border-border mb-6">
              <div className="flex items-start gap-4">
                <Sparkles className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground leading-relaxed">
                  The <strong>Takãmul Cup</strong> celebrates <strong>mathematical excellence in the AI era</strong> by honoring the irreplaceable power of human cognition. In an age where artificial intelligence can solve complex problems instantly, we create a space that celebrates <strong>the brain</strong>—its creativity, procedural fluency, pattern recognition, and deep mathematical reasoning.
          </p>
              </div>
            </Card>
            
            <Card className="p-8 bg-card border-border mb-6">
              <div className="flex items-start gap-4">
                <Brain className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground leading-relaxed">
                  The Takãmul Cup fosters an environment where <strong>cognitive skills</strong> and <strong>procedural fluency</strong> are not just valued but celebrated. It's a reminder that while technology advances, the human capacity for mathematical thought remains extraordinary and worth cultivating.
                </p>
              </div>
            </Card>
            
            <Card className="p-8 bg-card border-border">
              <div className="flex items-start gap-4">
                <Sparkles className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground leading-relaxed">
                  This competition is about <strong>living mathematics</strong>—experiencing the thrill of solving integrals with nothing but mental agility, pencil, and paper. We isolate AI outside the room; inside, it's just <strong>your brain, your skills, and your passion for mathematics</strong>.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Home;