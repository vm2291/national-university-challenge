import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The Takāmul Cup was an intense but rewarding experience that pushed me to think quickly, collaborate under pressure, and apply integration techniques creatively. Competing at a national level was both challenging and motivating, and it strengthened my confidence in problem-solving beyond the classroom.",
      featured: true
    },
    {
      quote: "Takāmul Cup was one of the most exciting competitions I've ever participated in. The fast pace and clear objective leaves you with almost no time to be nervous and get straight into solving the problem. The feeling this left me with is unmatched.",
      featured: true
    },
    {
      quote: "Very interesting initiative, as there are not many Mathematics competitions for university students. The event was very well organized; the questions were challenging, and the format was engaging. Looking forward to participating in the next edition!",
      featured: false
    },
    {
      quote: "It was an amazing experience that allowed me to apply my knowledge in a competitive yet supportive environment. The competition was well organized and provided a great opportunity to learn, connect with peers, and challenge myself.",
      featured: false
    },
    {
      quote: "Students working on integration problems with no device! That was the highlight of the day, as they were completely relying on their critical thinking, problem-solving, and analytical skills.",
      featured: false
    },
    {
      quote: "The entire competition was memorable. I loved how organised the competition was. All of the participants clearly understood the structure and the flow of the different stages. Everyone there was really nice which made competing a lot less stressful.",
      featured: false
    },
    {
      quote: "The friendliness and non-formality contributed a lot to leaving a good impression. Supporting my peers as they are scribbling on the board, trying to solve hard problems, was exciting, new and very memorable.",
      featured: false
    },
    {
      quote: "I loved the entire experience! I think it was really nice to have a space to challenge ourselves. As someone without a very heavy math background, the Takamul Cup also gave me a reason to really refine my skills.",
      featured: false
    },
    {
      quote: "Math war. Never knew a math competition could be this exciting.",
      featured: false
    },
    {
      quote: "Everything was positive and organized. The good aspect of the competition was it was being held for the 1st time in UAE but still turned out to be so professional and I didn't feel lost or confused throughout the competition.",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-background to-secondary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(var(--secondary))_0%,transparent_50%)] opacity-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-secondary via-secondary to-tertiary bg-clip-text text-transparent">
                Testimonials
              </span>
            </h1>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              What participants had to say about their Takāmul Cup experience
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-6">
            {testimonials.map((testimonial, index) => (
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
                    {testimonial.quote}
                  </blockquote>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
