import { Calendar, Clock, MapPin, Trophy, Users, Target, Brain, Sparkles, Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import CountUp from "@/components/CountUp";
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";
const Home = () => {
  const stats = [{
    icon: Users,
    label: "Competitors",
    value: 35,
    suffix: "+"
  }, {
    icon: Trophy,
    label: "Universities",
    value: 7,
    suffix: ""
  }, {
    icon: Target,
    label: "Stages",
    value: 5,
    suffix: ""
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
                <p className="text-[11px] sm:text-xs font-medium tracking-[0.22em] text-[#3d2515] uppercase">
                  National University Integration Bee
                </p>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight whitespace-nowrap bg-gradient-to-r from-[#a86b3e] via-[#7a4520] to-[#3d2515] bg-clip-text text-transparent" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                Takãmul Cup
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
      <section className="py-20 bg-background text-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_40%,hsl(var(--primary)/0.18)_0%,transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/40 bg-card/60 backdrop-blur-sm mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <p className="text-[11px] font-medium tracking-[0.22em] text-[#3d2515] uppercase">By the numbers</p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-[#a86b3e] via-[#7a4520] to-[#3d2515] bg-clip-text text-transparent">
              Battle of Mathematical Excellence
            </h2>
            <p className="text-lg text-foreground/75 max-w-2xl mx-auto font-light">
              Join the UAE's premier integration competition where the nation's brightest
              mathematical minds compete in speed, accuracy, and strategic problem-solving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative text-center p-10 rounded-3xl bg-gradient-to-br from-[#e9c590]/30 via-[#e9c590]/20 to-transparent border border-[#e9c590]/60 backdrop-blur hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#a86b3e]/20 transition-all duration-500 animate-in fade-in slide-in-from-bottom-8"
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: "both" }}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#a86b3e]/0 to-[#a86b3e]/0 group-hover:from-[#a86b3e]/5 group-hover:to-[#3d2515]/5 transition-all duration-500 pointer-events-none" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#e9c590]/60 to-[#a86b3e]/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <stat.icon className="w-8 h-8 text-[#7a4520]" strokeWidth={2} />
                  </div>
                  <div className="text-6xl sm:text-7xl font-bold mb-3 tracking-tight bg-gradient-to-br from-[#a86b3e] via-[#7a4520] to-[#3d2515] bg-clip-text text-transparent">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7a4520]">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-20 bg-background text-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_40%,hsl(var(--primary)/0.18)_0%,transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/40 bg-card/60 backdrop-blur-sm mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <p className="text-[11px] font-medium tracking-[0.22em] text-[#3d2515] uppercase">Our Network</p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-[#a86b3e] via-[#7a4520] to-[#3d2515] bg-clip-text text-transparent">
              Participating Universities
            </h2>
            <p className="text-lg text-foreground/75 max-w-2xl mx-auto font-light">
              Seven leading UAE institutions united by a shared pursuit of mathematical excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {universities.map((university, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#e9c590]/30 via-[#e9c590]/15 to-transparent border border-[#e9c590]/60 backdrop-blur hover:-translate-y-1 hover:shadow-xl hover:shadow-[#a86b3e]/15 transition-all duration-500 animate-in fade-in slide-in-from-bottom-6"
                style={{ animationDelay: `${index * 80}ms`, animationFillMode: "both" }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#a86b3e]/0 to-[#a86b3e]/0 group-hover:from-[#a86b3e]/5 group-hover:to-[#3d2515]/5 transition-all duration-500 pointer-events-none" />
                <div className="relative flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#e9c590]/70 to-[#a86b3e]/20 text-[#7a4520] font-mono text-sm font-bold tracking-wider flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="text-base sm:text-lg font-medium text-[#3d2515] leading-snug">
                    {university}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 bg-background text-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_40%,hsl(var(--primary)/0.18)_0%,transparent_70%)] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/40 bg-card/60 backdrop-blur-sm mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <p className="text-[11px] font-medium tracking-[0.22em] text-[#3d2515] uppercase">Save the Date</p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-[#a86b3e] via-[#7a4520] to-[#3d2515] bg-clip-text text-transparent">
              Event Details
            </h2>
            <p className="text-lg text-foreground/75 max-w-2xl mx-auto font-light">
              Mark your calendar for a day of mathematical excellence at NYU Abu Dhabi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Calendar, label: "Date", primary: "Sunday, Dec 7, 2025", secondary: "Mark your calendar" },
              { icon: Clock, label: "Time", primary: "9:00 AM – 5:00 PM", secondary: "Gulf Standard Time (GST)" },
              { icon: MapPin, label: "Venue", primary: "NYU Abu Dhabi", secondary: "C2 West Forum" },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative text-center p-10 rounded-3xl bg-gradient-to-br from-[#e9c590]/30 via-[#e9c590]/20 to-transparent border border-[#e9c590]/60 backdrop-blur hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#a86b3e]/20 transition-all duration-500 animate-in fade-in slide-in-from-bottom-8"
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: "both" }}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#a86b3e]/0 to-[#a86b3e]/0 group-hover:from-[#a86b3e]/5 group-hover:to-[#3d2515]/5 transition-all duration-500 pointer-events-none" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-[#e9c590]/60 to-[#a86b3e]/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <item.icon className="w-8 h-8 text-[#7a4520]" strokeWidth={2} />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#7a4520] mb-3">
                    {item.label}
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-[#3d2515] leading-tight mb-1">{item.primary}</p>
                  <p className="text-sm text-[#7a4520]/80 font-light">{item.secondary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials Section */}
      <section className="py-16 bg-background text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#a86b3e] via-[#7a4520] to-[#3d2515] bg-clip-text text-transparent">
            What Participants Had to Say About Their Experience
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 mb-10">
            <Card className="p-6 md:p-8 bg-white border-border hover:shadow-lg transition-all duration-300 ml-0 md:mr-12">
              <div className="flex gap-4">
                <Quote className="w-6 h-6 text-[#a86b3e] flex-shrink-0 mt-1" />
                <div>
                  <blockquote className="text-foreground/90 text-lg leading-relaxed mb-2">
                    The Takāmul Cup was an intense but rewarding experience that pushed me to think quickly, collaborate under pressure, and apply integration techniques creatively. Competing at a national level was both challenging and motivating, and it strengthened my confidence in problem-solving beyond the classroom.
                  </blockquote>
                  <p className="text-sm text-muted-foreground font-medium">- Mohammed Faheem, NYU Abu Dhabi</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 md:p-8 bg-[#e9c590]/40 border-border hover:shadow-lg transition-all duration-300 mr-0 md:ml-12">
              <div className="flex gap-4">
                <Quote className="w-6 h-6 text-[#a86b3e] flex-shrink-0 mt-1" />
                <div>
                  <blockquote className="text-foreground/90 text-lg leading-relaxed mb-2">
                    Takāmul Cup was one of the most exciting competitions I've ever participated in. The fast pace and clear objective leaves you with almost no time to be nervous and get straight into solving the problem. The feeling this left me with is unmatched.
                  </blockquote>
                  <p className="text-sm text-muted-foreground font-medium">- Guram Matcharashvili, Mohamed bin Zayed University of Artificial Intelligence</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 md:p-8 bg-white border-border hover:shadow-lg transition-all duration-300 ml-0 md:mr-12">
              <div className="flex gap-4">
                <Quote className="w-6 h-6 text-[#a86b3e] flex-shrink-0 mt-1" />
                <div>
                  <blockquote className="text-foreground/90 text-lg leading-relaxed mb-2">
                    I loved the entire experience! I think it was really nice to have a space to challenge ourselves. As someone without a very heavy math background, the Takamul Cup also gave me a reason to really refine my skills. The entire competition was memorable. I loved how organised the competition was. All of the participants clearly understood the structure and the flow of the different stages. Everyone there was really nice which made competing a lot less stressful.
                  </blockquote>
                  <p className="text-sm text-muted-foreground font-medium">- Michelle Haguma, Middlesex University Dubai</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 md:p-8 bg-[#e9c590]/40 border-border hover:shadow-lg transition-all duration-300 mr-0 md:ml-12">
              <div className="flex gap-4">
                <Quote className="w-6 h-6 text-[#a86b3e] flex-shrink-0 mt-1" />
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
      <section className="py-16 bg-background text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#a86b3e] via-[#7a4520] to-[#3d2515] bg-clip-text text-transparent">
              Competition Philosophy
            </h2>

            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#a86b3e]/40 to-transparent md:-translate-x-1/2" />

              {[
                {
                  num: "01",
                  text: "The Takãmul Cup celebrates mathematical excellence in the AI era by honoring the irreplaceable power of human cognition. In an age where artificial intelligence can solve complex problems instantly, we create a space that celebrates the brain, its creativity, procedural fluency, pattern recognition, and deep mathematical reasoning.",
                },
                {
                  num: "02",
                  text: "The Takãmul Cup fosters an environment where cognitive skills and procedural fluency are not just valued but celebrated. It's a reminder that while technology advances, the human capacity for mathematical thought remains extraordinary and worth cultivating.",
                },
                {
                  num: "03",
                  text: "This competition is about living mathematics, experiencing the thrill of solving integrals with nothing but mental agility, pencil, and paper. We isolate AI outside the room; inside, it's just your brain, your skills, and your passion for mathematics.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`relative mb-12 last:mb-0 md:grid md:grid-cols-2 md:gap-12 items-center animate-in fade-in slide-in-from-bottom-6 duration-700 ${
                    i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                  }`}
                  style={{ animationDelay: `${i * 150}ms`, animationFillMode: "both" }}
                >
                  <div className={`pl-12 md:pl-0 ${i % 2 === 1 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                    <span className="inline-block text-6xl md:text-7xl font-light bg-gradient-to-br from-[#a86b3e] to-[#3d2515] bg-clip-text text-transparent">
                      {item.num}
                    </span>
                  </div>

                  {/* Dot on timeline */}
                  <div className="absolute left-4 md:left-1/2 top-6 md:top-1/2 w-3 h-3 rounded-full bg-[#a86b3e] ring-4 ring-background md:-translate-x-1/2 md:-translate-y-1/2" />

                  <div className={`pl-12 md:pl-0 mt-2 md:mt-0 ${i % 2 === 1 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <p className="text-lg text-foreground/85 leading-relaxed font-light">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Home;