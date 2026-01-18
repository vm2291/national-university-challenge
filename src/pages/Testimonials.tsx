import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The Takāmul Cup was an intense but rewarding experience that pushed me to think quickly, collaborate under pressure, and apply integration techniques creatively. Competing at a national level was both challenging and motivating, and it strengthened my confidence in problem-solving beyond the classroom.",
      name: "Mohammed Faheem",
      university: "NYU Abu Dhabi"
    },
    {
      quote: "Takāmul Cup was one of the most exciting competitions I've ever participated in. The fast pace and clear objective leaves you with almost no time to be nervous and get straight into solving the problem. The feeling this left me with is unmatched.",
      name: "Guram Matcharashvili",
      university: "Mohamed bin Zayed University of Artificial Intelligence"
    },
    {
      quote: "Very interesting initiative, as there are not many Mathematics competitions for university students. The event was very well organized; the questions were challenging, and the format was engaging. Looking forward to participating in the next edition!",
      name: "Adrian Turcanu",
      university: "Heriot-Watt University Dubai"
    },
    {
      quote: "It was an amazing experience that allowed me to apply my knowledge in a competitive yet supportive environment. The competition was well organized and provided a great opportunity to learn, connect with peers, and challenge myself.",
      name: "Student Participant",
      university: "Mohamed bin Zayed University of Artificial Intelligence"
    },
    {
      quote: "I loved the entire experience! I think it was really nice to have a space to challenge ourselves. As someone without a very heavy math background, the Takamul Cup also gave me a reason to really refine my skills.",
      name: "Michelle Haguma",
      university: "Middlesex University Dubai"
    },
    {
      quote: "The entire competition was memorable. I loved how organised the competition was. All of the participants clearly understood the structure and the flow of the different stages. Everyone there was really nice which made competing a lot less stressful.",
      name: "Michelle Haguma",
      university: "Middlesex University Dubai"
    },
    {
      quote: "The friendliness and non-formality contributed a lot to leaving a good impression. Supporting my peers as they are scribbling on the board, trying to solve hard problems, was exciting, new and very memorable.",
      name: "Guram Matcharashvili",
      university: "Mohamed bin Zayed University of Artificial Intelligence"
    },
    {
      quote: "Math war. Never knew a math competition could be this exciting.",
      name: "Islam Aldaraghmeh",
      university: "Mohamed bin Zayed University of Artificial Intelligence"
    },
    {
      quote: "Everything was positive and organized. The good aspect of the competition was it was being held for the 1st time in UAE but still turned out to be so professional and I didn't feel lost or confused throughout the competition.",
      name: "Mohammadmatin Modiramani",
      university: "American University in Dubai"
    },
    {
      quote: "It was fun and engaging, and it kept me on my toes. I liked this format, were participants are seeded/ranked with easy questions and then a knockout of top candidates was done. I enjoyed how heated it was, people were excited to attend a competition on a Saturday morning, something you don't see every day.",
      name: "Abdullah Alhussni",
      university: "NYU Abu Dhabi"
    },
    {
      quote: "It was a pretty fun experience for my first integration competition. The coordinators and volunteers were very cheerful and helpful with explaining how everything works and any other queries we had. Overall it was educational and a good experience.",
      name: "Student Participant",
      university: "Middlesex University Dubai"
    },
    {
      quote: "Both the competition and the overall experience was awesome.",
      name: "Fikremariam",
      university: "Abu Dhabi University"
    },
    {
      quote: "I enjoyed testing my skills to solve the challenging integration questions within a short time.",
      name: "Biniam",
      university: "Abu Dhabi University"
    },
    {
      quote: "It was a great experience, Got to learn how to work under pressure, overall a great learning outcome.",
      name: "Aleena Rose",
      university: "Middlesex University Dubai"
    },
    {
      quote: "It was a very new and nice experience, taught me how to work under pressure.",
      name: "Maleesha Chamodi",
      university: "Middlesex University Dubai"
    },
    {
      quote: "The experience was nice. Level of challenge was very high; spirit of competition was amazing.",
      name: "Rola Kiwan",
      university: "American University in Dubai"
    },
    {
      quote: "It was a good experience. The event was well-organized, and everyone felt welcomed and valued.",
      name: "Madeleine Al-Tahan",
      university: "Abu Dhabi University"
    },
    {
      quote: "It was an amazing experience and it was really fun to compete with people from different universities across the country!",
      name: "Faris Fayyas",
      university: "NYU Abu Dhabi"
    },
    {
      quote: "The structure was fun, especially the tie breakers. They were vastly different, you turn from aiming to beat your opponent to pushing yourself to the absolute limit.",
      name: "Islam Aldaraghmeh",
      university: "Mohamed bin Zayed University of Artificial Intelligence"
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
                  <div>
                    <blockquote className="text-foreground/90 text-lg leading-relaxed mb-2">
                      {testimonial.quote}
                    </blockquote>
                    {testimonial.name && (
                      <p className="text-sm text-muted-foreground font-medium">
                        - {testimonial.name}{testimonial.university && `, ${testimonial.university}`}
                      </p>
                    )}
                  </div>
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
