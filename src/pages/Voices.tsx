import { Quote, Star, Sparkles, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";

const Voices = () => {
  const featuredTestimonials = [
    {
      quote: "The Takāmul Cup was an intense but rewarding experience that pushed me to think quickly, collaborate under pressure, and apply integration techniques creatively. Competing at a national level was both challenging and motivating, and it strengthened my confidence in problem-solving beyond the classroom.",
      highlight: "intense but rewarding"
    },
    {
      quote: "Takāmul Cup was one of the most exciting competitions I've ever participated in. The fast pace and clear objective leaves you with almost no time to be nervous and get straight into solving the problem. The feeling this left me with is unmatched.",
      highlight: "unmatched"
    },
    {
      quote: "What stood out most was the unique blend of high-level, creative integration problems and the supportive yet competitive atmosphere. The structure encouraged deep thinking rather than rote techniques, and being surrounded by passionate students from across the country made the experience especially memorable.",
      highlight: "deep thinking"
    }
  ];

  const experienceQuotes = [
    "Very interesting initiative, as there are not many Mathematics competitions for university students. The event was very well organized; the questions were challenging, and the format was engaging. Looking forward to participating in the next edition!",
    "It was an amazing experience that allowed me to apply my knowledge in a competitive yet supportive environment. The competition was well organized and provided a great opportunity to learn, connect with peers, and challenge myself.",
    "It was fun and engaging, and it kept me on my toes. I liked this format, where participants are seeded/ranked with easy questions and then a knockout of top candidates was done.",
    "I loved the entire experience! I think it was really nice to have a space to challenge ourselves. As someone without a very heavy math background, the Takamul Cup also gave me a reason to really refine my skills.",
    "It was a great experience. Got to learn how to work under pressure, overall a great learning outcome.",
    "It was a great and interesting experience. Its style is completely different from classical competitions."
  ];

  const standoutQuotes = [
    {
      quote: "Students working on integration problems with no device! That was the highlight of the day, as they were completely relying on their critical thinking, problem-solving, and analytical skills.",
      theme: "Pure Cognition"
    },
    {
      quote: "The entire competition was memorable. I loved how organised the competition was. All of the participants clearly understood the structure and the flow of the different stages. Everyone there was really nice which made competing a lot less stressful.",
      theme: "Organization"
    },
    {
      quote: "The friendliness and non-formality contributed a lot to leaving a good impression. Supporting my peers as they are scribbling on the board, trying to solve hard problems, was exciting, new and very memorable.",
      theme: "Community"
    },
    {
      quote: "The structure was fun, especially the tie breakers. They were vastly different, you turn from aiming to beat your opponent to pushing yourself to the absolute limit.",
      theme: "Competition"
    },
    {
      quote: "Everything was positive and organized. The good aspect of the competition was it was being held for the 1st time in UAE but still turned out to be so professional and I didn't feel lost or confused throughout the competition.",
      theme: "Professionalism"
    },
    {
      quote: "What really stood out were the organizers and judges, who consistently encouraged and motivated everyone to do their best throughout the stages.",
      theme: "Support"
    }
  ];

  const shortQuotes = [
    "Math war. Never knew a math competition could be this exciting",
    "Both the competition and the overall experience was awesome",
    "The experience was nice. Level of challenge was very high; spirit of competition was amazing.",
    "It was an amazing experience and it was really fun to compete with people from different universities across the country!",
    "This was my first Integration Bee and it was really fun and the questions were very interesting.",
    "I enjoyed testing my skills to solve the challenging integration questions within a short time."
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-background to-secondary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--secondary))_0%,transparent_50%)] opacity-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <MessageCircle className="w-10 h-10 text-secondary" />
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-secondary via-secondary to-tertiary bg-clip-text text-transparent">
                  Voices
                </span>
              </h1>
            </div>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              What participants had to say about their Takāmul Cup experience
            </p>
            <div className="mt-6 inline-block px-6 py-2 bg-secondary/10 rounded-full">
              <p className="text-lg font-medium text-secondary">22 Responses from 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials - Large Cards */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Star className="w-8 h-8 text-secondary" />
            <h2 className="text-3xl sm:text-4xl font-bold text-tertiary">Featured Stories</h2>
          </div>
          
          <div className="grid gap-8 max-w-5xl mx-auto">
            {featuredTestimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="relative p-8 md:p-12 bg-gradient-to-br from-tertiary to-tertiary/90 border-secondary/30 overflow-hidden group hover:shadow-xl transition-all duration-500"
              >
                <Quote className="absolute top-6 left-6 w-16 h-16 text-secondary/20" />
                <Quote className="absolute bottom-6 right-6 w-16 h-16 text-secondary/20 rotate-180" />
                
                <blockquote className="relative z-10 text-xl md:text-2xl text-primary leading-relaxed italic font-medium">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-1 w-12 bg-secondary rounded-full" />
                  <span className="text-sm uppercase tracking-wider text-secondary font-semibold">
                    Participant 2025
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Stood Out - Themed Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-secondary" />
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">
              What Stood Out
            </h2>
          </div>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Memorable moments and highlights from participants
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {standoutQuotes.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card border-primary/30 hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider rounded-full">
                    {item.theme}
                  </span>
                </div>
                <blockquote className="text-foreground/90 leading-relaxed">
                  "{item.quote}"
                </blockquote>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Quotes - Alternating Layout */}
      <section className="py-16 bg-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">
            The Experience
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {experienceQuotes.map((quote, index) => (
              <Card 
                key={index} 
                className={`p-6 md:p-8 border-primary/30 hover:shadow-lg transition-all duration-300 ${
                  index % 2 === 0 
                    ? 'bg-card ml-0 md:mr-12' 
                    : 'bg-primary/30 mr-0 md:ml-12'
                }`}
              >
                <div className="flex gap-4">
                  <Quote className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <blockquote className="text-foreground/90 text-lg leading-relaxed">
                    {quote}
                  </blockquote>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Short Powerful Quotes - Marquee Style */}
      <section className="py-16 bg-tertiary overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            In Their Words
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {shortQuotes.map((quote, index) => (
              <div 
                key={index} 
                className="p-6 bg-primary/10 rounded-xl border border-primary/20 hover:bg-primary/20 transition-all duration-300"
              >
                <blockquote className="text-primary text-lg font-medium italic">
                  "{quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-secondary/20 via-background to-primary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">
            Be Part of the Next Edition
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Join the community of passionate mathematicians and create your own unforgettable experience
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Voices;
