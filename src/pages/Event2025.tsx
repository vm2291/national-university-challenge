import { Calendar, Clock, MapPin, Trophy, Target, Users, Zap, Award, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
const Event2025 = () => {
  const competitionStructure = [{
    round: "Round 1",
    title: "Speed & Accuracy",
    description: "Initial qualifying round testing fundamental integration techniques across all difficulty levels.",
    duration: "Morning Session"
  }, {
    round: "Round 2",
    title: "Strategic Thinking",
    description: "Advanced integration problems requiring strategic approaches and deeper mathematical understanding.",
    duration: "Midday Session"
  }, {
    round: "Round 3",
    title: "Championship Finals",
    description: "The ultimate test where the best competitors face the most challenging integration problems.",
    duration: "Afternoon Session"
  }];
  const universities = [{
    name: "Abu Dhabi University",
    abbr: "ADU"
  }, {
    name: "American University in Dubai",
    abbr: "AUD"
  }, {
    name: "Middlesex University Dubai",
    abbr: "MDX"
  }, {
    name: "Heriot-Watt University Dubai",
    abbr: "HWU"
  }, {
    name: "UAE University",
    abbr: "UAEU"
  }, {
    name: "NYU Abu Dhabi",
    abbr: "NYUAD"
  }];
  return <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-background to-gold/20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="flex justify-center mb-6">
              <Trophy className="w-16 h-16 text-gold" />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gold via-gold-dark to-gold bg-clip-text text-transparent">
              2025 National Event
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">UAE National Integration Bee</p>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 bg-gradient-to-br from-gold to-gold-dark text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Event Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 bg-white/10 backdrop-blur border-white/20 text-center">
                <Calendar className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-foreground">Date</h3>
                <p className="text-2xl font-bold text-gold">Sunday</p>
                <p className="text-xl text-foreground">December 7, 2025</p>
              </Card>

              <Card className="p-8 bg-white/10 backdrop-blur border-white/20 text-center">
                <Clock className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-foreground">Time</h3>
                <p className="text-2xl font-bold text-gold">9:00 AM - 5:00 PM</p>
                <p className="text-lg text-foreground">(Gulf Standard Time)</p>
              </Card>

              <Card className="p-8 bg-white/10 backdrop-blur border-white/20 text-center">
                <MapPin className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-foreground">Venue</h3>
                <p className="text-2xl font-bold text-gold">NYU Abu Dhabi</p>
                <p className="text-xl text-foreground">C2 West Forum</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Structure */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
                Competition Structure
              </h2>
              <p className="text-xl text-muted-foreground">
                Three challenging rounds designed to test mathematical excellence
              </p>
            </div>

            <div className="space-y-6">
              {competitionStructure.map((round, index) => <Card key={index} className="p-8 bg-card border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-xl hover:shadow-gold/10">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center">
                        <span className="text-3xl font-bold" style={{ color: 'rgb(61, 40, 23)' }}>{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <span className="text-sm uppercase tracking-wider text-gold font-semibold">
                          {round.round}
                        </span>
                        <h3 className="text-2xl font-bold text-foreground">{round.title}</h3>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {round.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{round.duration}</span>
                      </div>
                    </div>
                  </div>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
              By The Numbers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-10 text-center bg-card border-gold/30 hover:shadow-xl transition-all duration-300">
                <Users className="w-12 h-12 text-gold mx-auto mb-4" />
                <div className="text-5xl font-bold" style={{ color: 'rgb(148, 69, 10)' }}>30+</div>
                <div className="text-xl font-semibold text-foreground">Competitors</div>
                <p className="text-sm text-muted-foreground mt-2">
                  Top mathematical minds from across the UAE
                </p>
              </Card>

              <Card className="p-10 text-center bg-card border-gold/30 hover:shadow-xl transition-all duration-300">
                <Trophy className="w-12 h-12 text-gold mx-auto mb-4" />
                <div className="text-5xl font-bold" style={{ color: 'rgb(148, 69, 10)' }}>6</div>
                <div className="text-xl font-semibold text-foreground">Universities</div>
                <p className="text-sm text-muted-foreground mt-2">
                  Leading institutions competing together
                </p>
              </Card>

              <Card className="p-10 text-center bg-card border-gold/30 hover:shadow-xl transition-all duration-300">
                <Target className="w-12 h-12 text-gold mx-auto mb-4" />
                <div className="text-5xl font-bold" style={{ color: 'rgb(148, 69, 10)' }}>3</div>
                <div className="text-xl font-semibold text-foreground">Rounds</div>
                <p className="text-sm text-muted-foreground mt-2">
                  Progressive difficulty and challenges
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Participating Universities */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-12">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
              Participating Universities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {universities.map((uni, index) => <Card key={index} className="p-6 bg-card border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mb-3">
                      <span className="text-xl font-bold" style={{ color: 'rgb(61, 40, 23)' }}>{uni.abbr}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{uni.name}</h3>
                  </div>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Competition Highlights */}
      <section className="py-20 bg-gradient-to-br from-gold/10 to-gold/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-12">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
              What to Expect
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 bg-card border-gold/20">
                <Zap className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">Speed & Precision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Competitors will race against time to solve complex integration problems, 
                  demonstrating both speed and mathematical accuracy.
                </p>
              </Card>

              <Card className="p-8 bg-card border-gold/20">
                <BookOpen className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">Skill Levels</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Multiple difficulty levels ensure fair competition, from beginner to advanced, 
                  allowing participants to compete at their appropriate skill level.
                </p>
              </Card>

              <Card className="p-8 bg-card border-gold/20">
                <Award className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">Recognition</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Top performers will be recognized for their mathematical excellence, earning 
                  prestige among the UAE's academic community.
                </p>
              </Card>

              <Card className="p-8 bg-card border-gold/20">
                <Users className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">Networking</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Connect with fellow mathematics enthusiasts, faculty, and peers from universities 
                  across the UAE in a celebration of academic excellence.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gold to-gold-dark text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Join us for the inaugural UAE National Integration Bee and witness mathematical excellence at its finest.
            </h2>
            <div className="pt-6">
              <p className="text-lg">
                For more information, please contact the organizing committee through NYU Abu Dhabi Math SIG.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Event2025;