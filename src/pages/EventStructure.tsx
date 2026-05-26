import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Calendar, MapPin, Trophy, Users, Clock, Award, ListChecks, Users2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";

const EventStructure = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    }
  }, [location]);
  const stages = [
    { label: "Stage 1 (Qualifiers):", text: "All 35 participants → Select TOP 16" },
    { label: "Stage 2 (Round of 16):", text: "TOP 16 → 8 head-to-head matches → TOP 8" },
    { label: "Stage 3 (Quarterfinals):", text: "TOP 8 → 4 matches → TOP 4" },
    { label: "Stage 4 (Semifinals):", text: "TOP 4 → 2 matches on whiteboards → TOP 2" },
    { label: "Stage 5 (Championship):", text: "TOP 2 → Grand Final on whiteboard → CHAMPION" },
  ];

  const schedule = [
    ["8:30 - 9:00 AM", "Arrivals & Pre-Registration", "Competitors and supporters arrive on campus"],
    ["9:00 - 9:30 AM", "Registration & Breakfast", "Official registration, light breakfast, welcome refreshments"],
    ["9:30 - 9:45 AM", "Opening Remarks", "Dr. Francesco Arneodo, Dean of Science, NYUAD"],
    ["9:45 - 10:00 AM", "Welcome Remarks, Briefing & Logistical Structure", "Dr. Dania Zantout (Executive Director & Founder, Takãmul Cup) and Narek Galstian (Math SIG President, NYUAD)"],
    ["10:00 - 10:24 AM", "STAGE 1: Qualifiers - Round A", "8 problems (3 minutes each)"],
    ["10:24 - 10:39 AM", "Short Break", "15-minute break between rounds"],
    ["10:39 - 11:03 AM", "STAGE 1: Qualifiers - Round B", "6 problems (4 minutes each)"],
    ["11:03 - 11:10 AM", "Scoring", "Scoring in progress"],
    ["11:10 - 11:20 AM", "Bracket Announcement & Short Break", "TOP 16 qualifiers and tournament seeding announced"],
    ["11:20 AM - 12:05 PM", "STAGE 2: Round of 16", "8 head-to-head matches (paper-based) → TOP 8 advance"],
    ["12:05 - 12:35 PM", "Grading & Short Break", "30-minute break for grading and transition"],
    ["12:35 - 1:20 PM", "STAGE 3: Quarterfinals", "4 matches (paper-based) → TOP 4 advance"],
    ["1:20 - 2:20 PM", "LUNCH BREAK & GRADING", "Pizza lunch for all participants, coordinators, and key personnel"],
    ["2:20 - 3:20 PM", "STAGE 4: Semifinals", "2 matches on WHITEBOARDS (live, audience viewing) → TOP 2 finalists"],
    ["3:20 - 3:35 PM", "Pre-Championship Break", "Final preparations, build excitement!"],
    ["3:35 - 4:20 PM", "STAGE 5: Championship Match", "THE GRAND FINALE on whiteboard"],
    ["4:20 - 5:00 PM", "Awards Ceremony", "Dr. Hisham Sati (Associate Dean for Student Success and Curricular Affairs, NYUAD) — Grand Championship: Grand Integrator, Senior Integrator, and Semi Integrators"],
    ["5:00 PM", "Event Conclusion", "Thank you and safe travels!"],
  ];

  const personnel = [
    { name: "Dr. Dania Zantout", role: "Founding & Executive Director, Takãmul Cup | Science Division, Mathematics Program, NYU Abu Dhabi" },
    { name: "Narek Galstian", role: "Math SIG President, NYUAD | Master of Ceremonies" },
    { name: "Dr. Karam Fayad", role: "Head Judge and Associate Program Head of Mathematics, NYU Abu Dhabi" },
    { name: "Proctors", role: "Ensure timing, fair play, and monitor competition rounds" },
    { name: "Scoring Team", role: "Coordinators from participating universities with NYUAD team" },
  ];

  const flowSections = [
    {
      title: "STAGE 1: QUALIFIERS (10:00 - 11:10 AM)",
      info: ["Format: Written qualifying round to determine TOP 16", "Participants: All 35 official competitors", "Location: Main competition venue"],
      diagram: `ALL 35 PARTICIPANTS
     ↓
ROUND A (8 problems × 3:00 each = 24 min)
     ↓
[Short Break - 15 minutes]
     ↓
ROUND B (6 problems × 4:00 each = 24 min)
     ↓
[Scoring - 7 minutes]
     ↓
TOP 16 SELECTED & SEEDED (#1 through #16)`,
    },
    {
      title: "STAGE 2: ROUND OF 16 (11:20 AM - 12:05 PM)",
      info: ["Format: 8 simultaneous head-to-head matches (paper-based)", "Cards: 3 cards per match (5, 5, 4 minutes)", "Advancement: Winner of each match proceeds"],
      diagram: `ROUND OF 16 → 8 MATCHES SIMULTANEOUSLY

Match 1: Seed #1  vs Seed #16  →  Winner A
Match 2: Seed #8  vs Seed #9   →  Winner B
Match 3: Seed #5  vs Seed #12  →  Winner C
Match 4: Seed #4  vs Seed #13  →  Winner D
Match 5: Seed #3  vs Seed #14  →  Winner E
Match 6: Seed #6  vs Seed #11  →  Winner F
Match 7: Seed #7  vs Seed #10  →  Winner G
Match 8: Seed #2  vs Seed #15  →  Winner H

                    ↓
              TOP 8 ADVANCE
                    ↓
        [Grading & Short Break - 30 minutes]`,
    },
    {
      title: "STAGE 3: QUARTERFINALS (12:35 - 1:20 PM)",
      info: ["Format: 4 simultaneous matches (paper-based)", "Cards: 3 cards per match (6, 5, 5 minutes)", "Note: Lunch break AFTER this stage"],
      diagram: `QUARTERFINALS → 4 MATCHES SIMULTANEOUSLY

QF Match 1: Winner A  vs  Winner B  →  QF Winner 1
QF Match 2: Winner C  vs  Winner D  →  QF Winner 2
QF Match 3: Winner E  vs  Winner F  →  QF Winner 3
QF Match 4: Winner G  vs  Winner H  →  QF Winner 4

                    ↓
              TOP 4 ADVANCE
                    ↓
          [LUNCH BREAK & GRADING: 1:20 - 2:20 PM]`,
    },
    {
      title: "STAGE 4: SEMIFINALS (2:20 - 3:20 PM)",
      info: ["Format: 2 matches on WHITEBOARDS (visible to audience!)", "Cards: 4 cards per match (6 minutes each)", "Special: Live problem-solving, audience can watch"],
      diagram: `SEMIFINALS → 2 MATCHES ON WHITEBOARDS

SF Match 1: QF Winner 1  vs  QF Winner 2  →  SF Winner 1
                                                (FINALIST 1)

SF Match 2: QF Winner 3  vs  QF Winner 4  →  SF Winner 2
                                                (FINALIST 2)

                    ↓
              TOP 2 ADVANCE
                    ↓
          [Brief Break: 3:20 - 3:35 PM]`,
    },
    {
      title: "STAGE 5: CHAMPIONSHIP MATCH (3:35 - 4:20 PM)",
      info: ["Format: THE GRAND FINALE on WHITEBOARD", "Cards: 4 indefinite integrals (6 minutes each)", "Stakes: Winner becomes THE GRAND INTEGRATOR"],
      diagram: `CHAMPIONSHIP MATCH

FINALIST 1  vs  FINALIST 2

4 Indefinite Integrals
(6 minutes each)

Live on Whiteboard
Full Audience Viewing

              ↓
    THE GRAND INTEGRATOR
         (CHAMPION)
              &
    SENIOR INTEGRATOR
       (RUNNER-UP)`,
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-primary/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="flex justify-center mb-6">
              <Calendar className="w-16 h-16 text-[#a86b3e]" />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#a86b3e] via-[#7a4520] to-[#3d2515] bg-clip-text text-transparent">
              Event Details
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
              NYU Abu Dhabi • December 7, 2025 • 9:00 AM – 5:00 PM (GST)
            </p>
          </div>
        </div>
      </section>

      {/* Competition Structure */}
      <section id="structure" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-10">
              <ListChecks className="w-10 h-10 text-[#a86b3e] mr-3" />
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#a86b3e] via-[#7a4520] to-[#3d2515] bg-clip-text text-transparent">
                Competition Structure
              </h2>
            </div>
            <Card className="p-6 sm:p-8 bg-card border-border">
              <ul className="space-y-3">
                {stages.map((s, i) => (
                  <li key={i} className="flex gap-3 text-foreground/90 text-base sm:text-lg leading-relaxed">
                    <span className="text-[#a86b3e] font-bold flex-shrink-0">▸</span>
                    <span>
                      <span className="font-bold text-[#a86b3e]">{s.label}</span> {s.text}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Competition Flow Diagram */}
      <section id="flow" className="py-16 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#a86b3e] via-[#7a4520] to-[#3d2515] bg-clip-text text-transparent">
              Competition Flow Diagram
            </h2>
            <div className="space-y-8">
              {flowSections.map((s, i) => (
                <Card key={i} className="p-6 sm:p-8 bg-card border-border hover:border-secondary/40 transition-all duration-300 hover:shadow-lg">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">{s.title}</h3>
                  <div className="border-l-2 border-secondary/60 pl-4 mb-5 space-y-1">
                    {s.info.map((line, j) => (
                      <p key={j} className="text-foreground/90 text-sm sm:text-base">{line}</p>
                    ))}
                  </div>
                  <pre className="bg-muted/30 text-foreground/85 p-4 sm:p-6 rounded-lg text-xs sm:text-sm leading-relaxed overflow-x-auto font-mono whitespace-pre">
                    {s.diagram}
                  </pre>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Master Schedule */}
      <section id="schedule" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-10">
              <Clock className="w-10 h-10 text-[#a86b3e] mr-3" />
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#a86b3e] via-[#7a4520] to-[#3d2515] bg-clip-text text-transparent">
                Master Event Schedule
              </h2>
            </div>
            <Card className="overflow-hidden border-border">
              <div className="overflow-x-auto">
                <table className="w-full text-sm sm:text-base">
                  <thead>
                    <tr className="bg-secondary text-secondary-foreground">
                      <th className="text-left p-3 sm:p-4 font-bold whitespace-nowrap">Time</th>
                      <th className="text-left p-3 sm:p-4 font-bold">Activity</th>
                      <th className="text-left p-3 sm:p-4 font-bold">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-muted/20"}>
                        <td className="p-3 sm:p-4 font-bold text-[#a86b3e] whitespace-nowrap align-top">{row[0]}</td>
                        <td className="p-3 sm:p-4 font-semibold text-foreground align-top">{row[1]}</td>
                        <td className="p-3 sm:p-4 text-foreground/80 align-top">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Personnel */}
      <section id="personnel" className="py-16 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-10">
              <Users2 className="w-10 h-10 text-[#a86b3e] mr-3" />
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#a86b3e] via-[#7a4520] to-[#3d2515] bg-clip-text text-transparent">
                Key Personnel
              </h2>
            </div>
            <div className="space-y-4">
              {personnel.map((p, i) => (
                <Card key={i} className="p-5 sm:p-6 bg-card border-l-4 border-l-secondary border-border hover:shadow-lg transition-all duration-300">
                  <p className="text-lg font-bold text-[#a86b3e]">{p.name}</p>
                  <p className="text-foreground/80 text-sm sm:text-base mt-1">{p.role}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-10">
              <Trophy className="w-10 h-10 text-[#a86b3e] mr-3" />
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#a86b3e] via-[#7a4520] to-[#3d2515] bg-clip-text text-transparent">
                Awards & Recognition
              </h2>
            </div>
            <p className="text-center text-lg text-muted-foreground mb-8 font-semibold">Award Ceremony Order</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-8 bg-card md:col-span-2 border-2 border-secondary/40 text-center hover:border-secondary/70 hover:shadow-xl transition-all duration-300">
                <Award className="w-12 h-12 mx-auto mb-3 text-[#a86b3e]" />
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#3d2515] to-[#a86b3e] bg-clip-text text-transparent">THE GRAND INTEGRATOR</h3>
                <p className="text-xl font-semibold mb-2 text-foreground">Championship Winner</p>
                <p className="text-muted-foreground">Certificate + Amazon Voucher Prize + T-shirt</p>
              </Card>
              <Card className="p-6 bg-card border-border text-center hover:border-secondary/40 hover:shadow-lg transition-all duration-300">
                <Award className="w-10 h-10 mx-auto mb-3 text-[#a86b3e]" />
                <h3 className="text-xl font-bold text-foreground mb-2">SENIOR INTEGRATOR</h3>
                <p className="text-lg font-semibold text-[#a86b3e] mb-2">Championship Runner-Up</p>
                <p className="text-muted-foreground">Certificate + Amazon Voucher Prize + T-shirt</p>
              </Card>
              <Card className="p-6 bg-card border-border text-center hover:border-secondary/40 hover:shadow-lg transition-all duration-300">
                <Award className="w-10 h-10 mx-auto mb-3 text-[#a86b3e]" />
                <h3 className="text-xl font-bold text-foreground mb-2">SEMI INTEGRATORS</h3>
                <p className="text-lg font-semibold text-[#a86b3e] mb-2">Semifinalists (2 places)</p>
                <p className="text-muted-foreground">Certificate + Amazon Voucher Prize + T-shirt</p>
              </Card>
            </div>

            <Card className="mt-8 p-6 sm:p-8 bg-muted/30 border-secondary/30">
              <p className="font-bold text-foreground mb-3 text-lg">Additional Recognition:</p>
              <ul className="space-y-2">
                {[
                  <>All 35 official competitors receive <strong>Certificate of Participation + T-shirt</strong></>,
                  "TOP 16 qualifiers recognized during bracket announcement",
                  "TOP 8 quarterfinalists acknowledged during ceremony",
                  "Group photo with all participants",
                  "Event photos shared with all participating universities",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-foreground/90">
                    <span className="text-[#a86b3e] font-bold">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-16 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-10">
              <MapPin className="w-10 h-10 text-[#a86b3e] mr-3" />
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#a86b3e] via-[#7a4520] to-[#3d2515] bg-clip-text text-transparent">
                Location
              </h2>
            </div>
            <Card className="p-6 sm:p-8 bg-card border-border">
              <div className="text-center space-y-2 mb-6">
                <p className="text-2xl font-bold text-foreground">NYU Abu Dhabi</p>
                <p className="text-lg text-[#a86b3e] font-semibold">C2 West Forum</p>
                <p className="text-foreground/80 max-w-2xl mx-auto">
                  Visitor parking is available upon arrival, campus security will direct you to the designated zones. If arriving at the Visitor Center, you will be guided to C2 West Forum.
                </p>
              </div>
              <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.8896745316606!2d54.431980876576255!3d24.52389965864014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e5d876232c3eb%3A0x14e8727ec5ee2be1!2sNew%20York%20University%20Abu%20Dhabi!5e0!3m2!1sen!2sae!4v1765008576893!5m2!1sen!2sae"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NYU Abu Dhabi Location"
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventStructure;