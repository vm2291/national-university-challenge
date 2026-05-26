import { ListChecks, Zap, Trophy, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";

const Pill = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-secondary-foreground font-bold text-lg shadow-md flex-shrink-0">
    {children}
  </div>
);

const InfoList = ({ items }: { items: React.ReactNode[]; variant?: "default" | "brown" | "orange" }) => {
  return (
    <ul className="space-y-3 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-foreground/90 text-base leading-relaxed">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

const SubTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-xl sm:text-2xl font-bold text-tertiary mb-4 pb-2 border-b-2 border-primary">{children}</h3>
);

const TimingCard = ({ label, value, details }: { label: string; value: string; details: string[] }) => (
  <Card className="p-5 bg-card border-2 border-primary/40 text-center hover:border-secondary/60 hover:-translate-y-1 transition-all duration-300">
    <p className="text-xs sm:text-sm uppercase tracking-wider font-bold text-tertiary mb-2">{label}</p>
    <p className="text-4xl sm:text-5xl font-black text-secondary mb-1">{value}</p>
    {details.map((d, i) => (
      <p key={i} className="text-xs sm:text-sm text-muted-foreground">{d}</p>
    ))}
  </Card>
);

const StageSection = ({ number, title, children }: { number: number; title: string; children: React.ReactNode }) => (
  <div className="relative pl-6 sm:pl-10 border-l-4 border-secondary mb-12">
    <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-secondary border-4 border-background" />
    <div className="flex items-center gap-4 mb-6">
      <Pill>{number}</Pill>
      <h2 className="text-2xl sm:text-3xl font-bold text-tertiary">{title}</h2>
    </div>
    <div className="space-y-6">{children}</div>
  </div>
);

const CompetitionStructure = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-primary/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="flex justify-center mb-6">
              <ListChecks className="w-16 h-16 text-secondary" />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#a8632e] via-[#7a3f1a] to-[#4a230d] bg-clip-text text-transparent">
              Coordinators Info
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
              Competition Structure for Coordinators
            </p>
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

            {/* STAGE 1 */}
            <StageSection number={1} title="Stage 1 — Qualifiers">
              <div>
                <SubTitle>Format</SubTitle>
                <InfoList items={[
                  <><strong>Population:</strong> 35 students</>,
                  <><strong>Answer Type:</strong> Written answers only; exact values required for all questions</>,
                  <><strong>Presentation:</strong> One integral revealed at a time on projector; everyone works simultaneously under a central clock</>,
                  <><strong>Integral Type:</strong> All Stage 1 questions are <strong>definite integrals</strong></>,
                ]} />
              </div>

              <div>
                <SubTitle>Rounds and Timing</SubTitle>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <TimingCard label="Round A" value="24" details={["Minutes Total", "8 Definite Integrals", "3 min per integral"]} />
                  <TimingCard label="Short Break" value="15" details={["Minutes"]} />
                  <TimingCard label="Round B" value="24" details={["Minutes Total", "6 Definite Integrals", "4 min per integral"]} />
                  <TimingCard label="Scoring" value="~30" details={["Minutes", "Top 16 advance"]} />
                </div>
              </div>

              <div>
                <SubTitle>Scoring System</SubTitle>
                <InfoList variant="brown" items={[
                  <>Stage 1 scoring and ranking handled via <strong>Mentimeter</strong> (or equivalent electronic system)</>,
                  "System aggregates each student's performance across all Stage 1 questions and produces final ranking",
                  <>We accept the Mentimeter ranking as-is for determining the <strong>Top 16</strong> and for seeding</>,
                  <>Laptops and required hardware for scoring and display provided by <strong>NYUAD</strong> (for Stage 1 only)</>,
                  <><strong>No need</strong> for students or coordinators to bring their own laptops</>,
                ]} />
              </div>

              <div>
                <SubTitle>Seeding and Bracket Placement</SubTitle>
                <InfoList variant="orange" items={[
                  <><strong>Seeding:</strong></>,
                  "Top 16 students labeled as seeds 1 to 16 (seed 1 = highest overall performance)",
                  "If two or more students tie exactly at critical boundary (e.g., for seed 16), a short tie-breaker may be used at organizers' discretion",
                ]} />
                <Card className="mt-4 p-6 bg-card border-2 border-secondary/50">
                  <p className="font-bold mb-3 text-secondary uppercase tracking-wide text-sm">Bracket Structure</p>
                  <pre className="text-xs sm:text-sm leading-relaxed overflow-x-auto font-mono whitespace-pre text-tertiary">
{`Round of 16:
M₁: Seed 1 vs Seed 16        M₂: Seed 8 vs Seed 9
M₃: Seed 5 vs Seed 12        M₄: Seed 4 vs Seed 13
M₅: Seed 3 vs Seed 14        M₆: Seed 6 vs Seed 11
M₇: Seed 7 vs Seed 10        M₈: Seed 2 vs Seed 15

Quarterfinals:
QF1: Winner M₁ vs Winner M₂
QF2: Winner M₃ vs Winner M₄
QF3: Winner M₅ vs Winner M₆
QF4: Winner M₇ vs Winner M₈

Semifinals:
SF1: Winner QF1 vs Winner QF2
SF2: Winner QF3 vs Winner QF4

Championship:
Final: Winner SF1 vs Winner SF2`}
                  </pre>
                </Card>
                <div className="mt-4">
                  <InfoList items={[
                    <><strong>Important:</strong> The bracket is <strong>fixed</strong> — there is no reseeding between rounds.</>,
                  ]} />
                </div>
              </div>
            </StageSection>

            {/* STAGE 2 */}
            <StageSection number={2} title="Stage 2 — Round of 16">
              <div>
                <SubTitle>Format Overview</SubTitle>
                <InfoList items={[
                  <><strong>16 students</strong>, playing as <strong>8 pairs</strong> (matches M₁ to M₈)</>,
                  <>All 8 matches played in <strong>one wave, in parallel</strong></>,
                  <><strong>Central clock and central reveal:</strong> same Card A shown to all, then Card B, then Card C</>,
                  <><strong>Paper-based format:</strong> All answers submitted on paper</>,
                ]} />
              </div>

              <div>
                <SubTitle>Cards and Timing</SubTitle>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <TimingCard label="Card A" value="5" details={["Minutes", "1 Definite Integral"]} />
                  <TimingCard label="Card B" value="5" details={["Minutes", "1 Definite Integral"]} />
                  <TimingCard label="Card C" value="4" details={["Minutes", "1 Indefinite Integral"]} />
                </div>
              </div>

              <div>
                <SubTitle>Scoring and Advancement</SubTitle>
                <InfoList variant="brown" items={[
                  <>Each card (A, B, C) marked by <strong>two judges</strong> assigned to that match</>,
                  "Marking according to shared marking scheme agreed upon in advance",
                  "Card A and Card B judged correct/incorrect as definite integrals",
                  "Card C judged as indefinite integral (structure and correctness of antiderivative)",
                  "Two judges mark each card independently, agree on total score, declare winner",
                ]} />
              </div>

              <div>
                <SubTitle>Judging and Logistics</SubTitle>
                <InfoList variant="orange" items={[
                  <>Each Round-of-16 match has <strong>two judges</strong> (e.g., one coordinator, one NYUAD representative)</>,
                  "Judges collect answer sheets after each card, mark them, and agree on scores and results",
                  <>After Stage 2, <strong>8 winners</strong> progress to Quarterfinals (Stage 3)</>,
                ]} />
              </div>
            </StageSection>

            {/* SUDDEN DEATH */}
            <Card className="p-6 sm:p-8 bg-card border-2 border-secondary/40 mb-12 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <Zap className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-tertiary">Sudden Death Tie-Breaker Protocol</h3>
              </div>
              <p className="text-lg mb-5 text-foreground/85">The same <strong>sudden death tie-breaker</strong> mechanism is used in <strong>Stages 2, 3, 4, and 5</strong> whenever a match score is tied.</p>
              <ul className="space-y-3 mb-5">
                {[
                  <><strong>All tie-breakers are DEFINITE INTEGRALS</strong></>,
                  "A tie-breaker integral is revealed to the two tied competitors under the central clock",
                  <><strong>Time limit: 3 minutes (sudden death)</strong></>,
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-foreground/90"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" /><span>{item}</span></li>
                ))}
                <li className="flex gap-3 text-foreground/90">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                  <div>
                    <span>During the 3-minute window:</span>
                    <ul className="mt-2 ml-4 space-y-2">
                      <li className="flex gap-2"><span>•</span><span>The <strong>first competitor to submit a correct answer wins immediately</strong></span></li>
                      <li className="flex gap-2"><span>•</span><span>If neither competitor submits a correct answer within 3 minutes → tie remains</span></li>
                    </ul>
                  </div>
                </li>
                <li className="flex gap-3 text-foreground/90"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" /><span>If tie remains after one tie-breaker: <strong>new tie-breaker integral given</strong> (again with 3 minutes)</span></li>
                <li className="flex gap-3 text-foreground/90"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" /><span>Process repeats until one competitor submits the first correct answer</span></li>
              </ul>
              <div className="bg-primary/15 rounded-md p-5 border border-primary/40">
                <p className="font-bold mb-3 text-tertiary">Sudden Death Rules:</p>
                <ul className="space-y-2 text-foreground/90">
                  {[
                    <><strong>3-minute clock</strong> for each tie-breaker</>,
                    <><strong>First correct answer wins</strong></>,
                    <>If <strong>no correct answer</strong> within 3 minutes → start new tie-breaker</>,
                    <>All tie-breakers use <strong>definite integrals</strong></>,
                    "Timing precision matters: judges must track submission order",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2"><span>•</span><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* STAGE 3 */}
            <StageSection number={3} title="Stage 3 — Quarterfinals">
              <div>
                <SubTitle>Format Overview</SubTitle>
                <InfoList items={[
                  <><strong>8 competitors</strong>, <strong>4 matches</strong> in parallel (QF1–QF4)</>,
                  "Central clock and central reveal: same sequence of cards shown to all remaining competitors",
                  <><strong>Paper-based format:</strong> All answers submitted on paper</>,
                ]} />
              </div>
              <div>
                <SubTitle>Cards and Timing</SubTitle>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <TimingCard label="Card A" value="6" details={["Minutes", "1 Definite Integral"]} />
                  <TimingCard label="Card B" value="5" details={["Minutes", "1 Indefinite Integral"]} />
                  <TimingCard label="Card C" value="5" details={["Minutes", "1 Indefinite Integral"]} />
                </div>
              </div>
              <div>
                <SubTitle>Ties and Judging</SubTitle>
                <InfoList variant="brown" items={[
                  <>If match tied after Cards A, B, and C, the <strong>sudden death tie-breaker</strong> procedure is used</>,
                  <>Each match has <strong>two judges</strong>; they agree on scores and on whether an answer is correct</>,
                ]} />
                <div className="mt-4">
                  <InfoList variant="orange" items={[
                    <><strong>Break and Lunch:</strong></>,
                    <>A <strong>30-minute break</strong> follows Stage 3</>,
                    <><strong>Pizza lunch</strong> served from <strong>1:30 PM to 2:00 PM</strong></>,
                    "Semifinals (Stage 4) begin after lunch",
                  ]} />
                </div>
              </div>
            </StageSection>

            {/* STAGE 4 */}
            <StageSection number={4} title="Stage 4 — Semifinals">
              <div>
                <SubTitle>Format Overview</SubTitle>
                <InfoList items={[
                  <><strong>4 competitors</strong>, <strong>2 matches</strong> in parallel (SF1 and SF2)</>,
                  "Central clock and central reveal; both tables receive same sequence of integrals",
                  <><strong>Whiteboard-based format:</strong> Competitors work on whiteboards; answers visible to audience</>,
                ]} />
              </div>
              <div>
                <SubTitle>Cards and Timing</SubTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <TimingCard label="3 Cards" value="6" details={["Minutes Each", "3 Indefinite Integrals"]} />
                  <TimingCard label="1 Card" value="6" details={["Minutes", "1 Improper Integral", "(definite with infinite limit/singularity)"]} />
                </div>
                <div className="mt-4">
                  <InfoList variant="orange" items={[
                    <><strong>From Semifinals Onward:</strong></>,
                    <>The constant of integration <strong>+C</strong> is expected in indefinite answers</>,
                    "For improper integral, proper limit notation and justification of convergence required for full credit",
                  ]} />
                </div>
              </div>
              <div>
                <SubTitle>Scoring and Ties</SubTitle>
                <InfoList variant="brown" items={[
                  "Judges use internal marking scheme (with several score levels) for each card",
                  "Sum the four card scores to obtain match total",
                  "Competitor with higher total advances to Championship",
                  <>If match tied after four cards, the <strong>sudden death tie-breaker</strong> procedure applied (3 minutes, definite integral)</>,
                ]} />
                <div className="mt-4">
                  <InfoList variant="orange" items={[
                    <><strong>Break:</strong> A break (approximately <strong>30–40 minutes</strong>) follows Stage 4 before the Championship.</>,
                  ]} />
                </div>
              </div>
            </StageSection>

            {/* STAGE 5 */}
            <StageSection number={5} title="Stage 5 — Championship Match">
              <div>
                <SubTitle>Format Overview</SubTitle>
                <InfoList items={[
                  <><strong>2 finalists</strong>, one match on the main board</>,
                  "Both competitors have whiteboards; central clock visible to audience and competitors",
                  "One card at a time revealed; both finalists work under same time limit",
                  <><strong>Whiteboard-based format:</strong> Work shown live on whiteboards for audience engagement</>,
                ]} />
              </div>
              <div>
                <SubTitle>Cards and Timing</SubTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <TimingCard label="Championship" value="6" details={["Minutes Each", "4 Indefinite Integrals"]} />
                </div>
                <div className="mt-4">
                  <InfoList variant="brown" items={[
                    <><strong>Note:</strong> The Championship may consist of <strong>4 indefinite integrals</strong> OR <strong>3 indefinite + 1 definite integral</strong> (structure may vary slightly).</>,
                  ]} />
                </div>
              </div>
              <div>
                <SubTitle>Ties and Closing</SubTitle>
                <InfoList variant="orange" items={[
                  <>If Championship tied after four cards, one or more <strong>sudden death tie-breakers</strong> are played</>,
                  <>Tie-breaker: <strong>3 minutes, definite integral, first correct answer wins</strong></>,
                  "After Championship (and any necessary tie-breakers), closing ceremony and winner declaration scheduled (e.g., around 4:00 PM)",
                ]} />
              </div>
            </StageSection>

          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 bg-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-10">
              <Trophy className="w-10 h-10 text-secondary mr-3" />
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#8a4a20] to-[#4a230d] bg-clip-text text-transparent">
                Competition Titles and Awards
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card border-secondary/40 text-center hover:shadow-lg transition-all duration-300">
                <Award className="w-10 h-10 mx-auto mb-3 text-secondary" />
                <h3 className="text-xl font-bold text-tertiary mb-1">The Grand Integrator</h3>
                <p className="text-secondary font-semibold">Championship Winner</p>
              </Card>
              <Card className="p-6 bg-card border-secondary/40 text-center hover:shadow-lg transition-all duration-300">
                <Award className="w-10 h-10 mx-auto mb-3 text-secondary" />
                <h3 className="text-xl font-bold text-tertiary mb-1">Senior Integrator</h3>
                <p className="text-secondary font-semibold">Championship Runner-Up</p>
              </Card>
              <Card className="md:col-span-2 p-6 bg-card border-secondary/40 text-center hover:shadow-lg transition-all duration-300">
                <Award className="w-10 h-10 mx-auto mb-3 text-secondary" />
                <h3 className="text-xl font-bold text-tertiary mb-1">Semi Integrators</h3>
                <p className="text-secondary font-semibold">Semifinalists (2 competitors)</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 uppercase tracking-wide bg-gradient-to-r from-[#8a4a20] to-[#4a230d] bg-clip-text text-transparent">
              Summary for Coordinators
            </h2>
            <Card className="p-6 sm:p-8 bg-card border-2 border-primary/40 text-foreground shadow-md">
              <ul className="space-y-5">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                  <span><strong>Stage 1</strong> is fully written, fully definite, and entirely scored by Mentimeter. No rubrics or manual scoring rules needed from coordinators beyond ensuring answers entered correctly into system.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                  <div>
                    <strong>Stages 2–3</strong> are bracket-based elimination rounds with:
                    <ul className="mt-2 ml-4 space-y-2">
                      <li className="flex gap-2"><span>•</span><span>Clear match structure per stage</span></li>
                      <li className="flex gap-2"><span>•</span><span>Central timing and simultaneous reveal of each card</span></li>
                      <li className="flex gap-2"><span>•</span><span>Two judges per match</span></li>
                      <li className="flex gap-2"><span>•</span><span><strong>Paper-based format</strong> — answers submitted on paper and marked by judges</span></li>
                      <li className="flex gap-2"><span>•</span><span><strong>Sudden death tie-breaker protocol:</strong> 3 minutes, definite integral, first correct answer wins; if no correct answer, start new tie-breaker</span></li>
                    </ul>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                  <div>
                    <strong>Stages 4–5</strong> (Semifinals and Championship) use:
                    <ul className="mt-2 ml-4 space-y-2">
                      <li className="flex gap-2"><span>•</span><span><strong>Whiteboard-based format</strong> — competitors work on whiteboards visible to audience</span></li>
                      <li className="flex gap-2"><span>•</span><span>Same timing and judging protocols as earlier stages</span></li>
                      <li className="flex gap-2"><span>•</span><span>Enhanced audience engagement through visible work</span></li>
                    </ul>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                  <span><strong>Pizza lunch break</strong> from 1:30–2:00 PM after Stage 3 (Quarterfinals)</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                  <span><strong>Laptops and hardware</strong> for scoring and display provided by NYUAD <strong>(Stage 1 only)</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                  <div>
                    <strong>Coordinators primarily needed to:</strong>
                    <ul className="mt-2 ml-4 space-y-2">
                      <li className="flex gap-2"><span>•</span><span>Accompany and support their students</span></li>
                      <li className="flex gap-2"><span>•</span><span>Serve as judges/proctors in elimination stages (marking correctness and applying sudden death rules)</span></li>
                      <li className="flex gap-2"><span>•</span><span>Track submission timing during sudden death tie-breakers</span></li>
                      <li className="flex gap-2"><span>•</span><span>Help maintain calm, fair, and enjoyable environment throughout the day</span></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </Card>

            <div className="text-center mt-10 space-y-1">
              <p className="text-lg font-bold text-secondary">Takãmul Cup • Falcon's Talon Edition • December 7, 2025</p>
              <p className="text-foreground/80">NYU Abu Dhabi • C2 West Forum • 9:00 AM – 5:00 PM (GST)</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompetitionStructure;