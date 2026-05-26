import { Calendar, Clock, MapPin, Trophy, Users, Target, Brain, Sparkles, Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
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
  const marqueeList = [...universities, ...universities];
  return <div className="min-h-screen pt-16">
      {/* HERO — editorial */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-grain">
        <div aria-hidden className="pointer-events-none absolute -top-20 -right-10 md:right-10 font-display-italic text-[24rem] md:text-[34rem] leading-none text-secondary/[0.07] select-none">∫</div>
        <div aria-hidden className="pointer-events-none absolute bottom-10 left-6 hidden md:block font-display-italic text-[10rem] leading-none text-secondary/[0.05] select-none">dx</div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 space-y-7">
              <div className="kicker animate-fade-up">National University Integration Bee</div>
              <h1 className="font-display text-tertiary text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.95] font-medium tracking-tight animate-blur-in" style={{ animationDelay: "120ms" }}>
                Takãmul
                <span className="block font-display-italic text-secondary">Cup.</span>
              </h1>
              <p className="max-w-xl text-lg sm:text-xl text-foreground/75 leading-relaxed animate-fade-up" style={{ animationDelay: "320ms" }}>
                The UAE's premier integration competition for university students, where the brightest mathematical minds compete in speed, accuracy, and strategic problem-solving.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 animate-fade-up" style={{ animationDelay: "460ms" }}>
                <Link to="/event-structure">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-7 h-12 group">
                    Event Details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/event-gallery">
                  <Button size="lg" variant="outline" className="border-2 border-tertiary/30 text-tertiary hover:bg-tertiary hover:text-tertiary-foreground rounded-full px-7 h-12">
                    2025 Gallery
                  </Button>
                </Link>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-4 animate-fade-up" style={{ animationDelay: "600ms" }}>
              <div className="border-l-2 border-secondary pl-5 py-1">
                <p className="kicker !text-tertiary/50">Date</p>
                <p className="font-display text-2xl text-tertiary mt-1">Sunday, Dec 7, 2025</p>
              </div>
              <div className="border-l-2 border-secondary pl-5 py-1">
                <p className="kicker !text-tertiary/50">Time</p>
                <p className="font-display text-2xl text-tertiary mt-1">9:00 AM – 5:00 PM <span className="text-base text-foreground/60">(GST)</span></p>
              </div>
              <div className="border-l-2 border-secondary pl-5 py-1">
                <p className="kicker !text-tertiary/50">Venue</p>
                <p className="font-display text-2xl text-tertiary mt-1">NYU Abu Dhabi</p>
                <p className="text-foreground/70">C2 West Forum</p>
              </div>
            </aside>
          </div>
        </div>

        {/* Marquee universities at hero bottom */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-secondary/20 bg-background/60 backdrop-blur-sm py-4 marquee-mask overflow-hidden">
          <div className="flex gap-12 whitespace-nowrap animate-marquee">
            {marqueeList.map((u, i) => (
              <span key={i} className="font-display-italic text-tertiary/70 text-lg flex items-center gap-12">
                {u}
                <span className="text-secondary">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Battle of Mathematical Excellence */}
      <section className="py-24 bg-primary text-tertiary relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto" data-reveal>
            <div className="kicker mb-6">Why It Matters</div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-tertiary max-w-3xl mb-6">
              Battle of <span className="font-display-italic text-secondary">mathematical excellence</span>.
            </h2>
            <p className="text-lg md:text-xl text-tertiary/80 max-w-2xl mb-16 leading-relaxed">
              Join the UAE's premier integration competition where the nation's brightest mathematical minds compete in speed, accuracy, and strategic problem-solving!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-tertiary/15 max-w-5xl mx-auto rounded-2xl overflow-hidden border border-tertiary/20">
            {stats.map((stat, index) => <div key={index} data-reveal style={{ ['--reveal-delay' as string]: `${index * 120}ms` }} className="group bg-primary/95 hover:bg-primary p-10 transition-colors duration-500">
                <stat.icon className="w-8 h-8 text-secondary mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" />
                <div className="font-display text-6xl md:text-7xl text-tertiary mb-2 leading-none">{stat.value}</div>
                <div className="kicker !text-tertiary/60">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Universities — editorial list */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-10 mb-12 items-end" data-reveal>
              <div className="lg:col-span-5">
                <div className="kicker mb-4">The Lineup</div>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-tertiary leading-tight">
                  Participating <span className="font-display-italic text-secondary">universities</span>.
                </h2>
              </div>
              <div className="lg:col-span-7 lg:pl-8 lg:border-l border-secondary/20">
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Seven institutions across the UAE come together to celebrate quick thinking and procedural fluency at the highest level.
                </p>
              </div>
            </div>

            <ol className="divide-y divide-secondary/20 border-y border-secondary/20">
              {universities.map((u, i) => (
                <li
                  key={i}
                  data-reveal
                  style={{ ['--reveal-delay' as string]: `${i * 70}ms` }}
                  className="group flex items-baseline justify-between py-6 sm:py-7 gap-6 hover:px-4 transition-all duration-500 hover:bg-primary/10 -mx-4 px-4 cursor-default"
                >
                  <div className="flex items-baseline gap-6 min-w-0">
                    <span className="font-display-italic text-secondary/40 text-xl sm:text-2xl tabular-nums w-10 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl sm:text-2xl md:text-3xl text-tertiary truncate group-hover:text-secondary transition-colors duration-500">{u}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-secondary opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 flex-shrink-0" />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-24 bg-gradient-to-br from-secondary/10 via-background to-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto mb-14 text-center" data-reveal>
            <div className="kicker mx-auto justify-center mb-5">Voices</div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-tertiary">
              What participants <span className="font-display-italic text-secondary">had to say</span> about their experience.
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 mb-10">
            <Card data-reveal className="card-lift p-6 md:p-8 bg-card border-primary/30 ml-0 md:mr-12">
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
            
            <Card data-reveal className="card-lift p-6 md:p-8 bg-primary/30 border-primary/30 mr-0 md:ml-12">
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
            
            <Card data-reveal className="card-lift p-6 md:p-8 bg-card border-primary/30 ml-0 md:mr-12">
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
            
            <Card data-reveal className="card-lift p-6 md:p-8 bg-primary/30 border-primary/30 mr-0 md:ml-12">
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
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2 rounded-full px-7 h-12 group">
                Read more
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Competition Philosophy — editorial numbered manifesto */}
      <section className="py-24 bg-primary/30 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 grid lg:grid-cols-12 gap-8 items-end" data-reveal>
              <div className="lg:col-span-7">
                <div className="kicker mb-5">Manifesto</div>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-tertiary leading-tight">
                  Competition <span className="font-display-italic text-secondary">philosophy</span>.
                </h2>
              </div>
              <div className="lg:col-span-5 lg:text-right">
                <p className="font-display-italic text-secondary text-2xl md:text-3xl">"Just your brain, your skills, your passion."</p>
              </div>
            </div>

            <div className="space-y-12">
              {[
                { icon: Sparkles, text: <>The <strong>Takãmul Cup</strong> celebrates <strong>mathematical excellence in the AI era</strong> by honoring the irreplaceable power of human cognition. In an age where artificial intelligence can solve complex problems instantly, we create a space that celebrates <strong>the brain</strong>—its creativity, procedural fluency, pattern recognition, and deep mathematical reasoning.</> },
                { icon: Brain, text: <>The Takãmul Cup fosters an environment where <strong>cognitive skills</strong> and <strong>procedural fluency</strong> are not just valued but celebrated. It's a reminder that while technology advances, the human capacity for mathematical thought remains extraordinary and worth cultivating.</> },
                { icon: Sparkles, text: <>This competition is about <strong>living mathematics</strong>—experiencing the thrill of solving integrals with nothing but mental agility, pencil, and paper. We isolate AI outside the room; inside, it's just <strong>your brain, your skills, and your passion for mathematics</strong>.</> },
              ].map((item, i) => (
                <div key={i} data-reveal style={{ ['--reveal-delay' as string]: `${i * 120}ms` }} className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start pb-12 border-b border-secondary/20 last:border-b-0">
                  <div className="lg:col-span-3 flex items-baseline gap-4">
                    <span className="section-number">{String(i + 1).padStart(2, "0")}</span>
                    <item.icon className="w-6 h-6 text-secondary mt-2" />
                  </div>
                  <p className="lg:col-span-9 text-lg md:text-xl text-tertiary leading-relaxed">{item.text}</p>
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