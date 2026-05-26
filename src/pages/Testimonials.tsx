import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

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
      quote: "I loved the entire experience! I think it was really nice to have a space to challenge ourselves. As someone without a very heavy math background, the Takamul Cup also gave me a reason to really refine my skills. The entire competition was memorable. I loved how organised the competition was. All of the participants clearly understood the structure and the flow of the different stages. Everyone there was really nice which made competing a lot less stressful.",
      name: "Michelle Haguma",
      university: "Middlesex University Dubai"
    },
    {
      quote: "The friendliness and non-formality contributed a lot to leaving a good impression. Supporting my peers as they are scribbling on the board, trying to solve hard problems, was exciting, new and very memorable.",
      name: "Guram Matcharashvili",
      university: "Mohamed bin Zayed University of Artificial Intelligence"
    },
    {
      quote: "Math war. Never knew a math competition could be this exciting. The structure was fun, especially the tie breakers. They were vastly different, you turn from aiming to beat your opponent to pushing yourself to the absolute limit.",
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
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <PageHero
        kicker="In Their Words"
        title={<><span className="font-display-italic text-secondary">Testimonials.</span></>}
        intro="What participants had to say about their Takāmul Cup experience."
      />

      {/* Testimonials Grid — editorial pull-quotes */}
      <section className="py-20 bg-primary/15">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto columns-1 md:columns-2 gap-8 [column-fill:_balance]">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                data-reveal
                style={{ ['--reveal-delay' as string]: `${(index % 6) * 80}ms` }}
                className={`card-lift mb-8 break-inside-avoid p-7 md:p-8 border-primary/30 ${
                  index % 3 === 0
                    ? 'bg-secondary text-secondary-foreground border-secondary'
                    : index % 3 === 1
                    ? 'bg-card'
                    : 'bg-primary/40'
                }`}
              >
                <Quote className={`w-8 h-8 mb-4 ${index % 3 === 0 ? 'text-primary' : 'text-secondary'}`} />
                <blockquote className={`font-display text-xl md:text-2xl leading-snug mb-5 ${index % 3 === 0 ? 'text-secondary-foreground' : 'text-tertiary'}`}>
                  "{testimonial.quote}"
                </blockquote>
                {testimonial.name && (
                  <div className={`pt-4 border-t ${index % 3 === 0 ? 'border-primary/30' : 'border-secondary/20'}`}>
                    <p className={`kicker !text-xs ${index % 3 === 0 ? '!text-primary' : ''}`}>
                      {testimonial.name}
                    </p>
                    {testimonial.university && (
                      <p className={`mt-2 text-sm ${index % 3 === 0 ? 'text-primary/80' : 'text-foreground/65'}`}>
                        {testimonial.university}
                      </p>
                    )}
                  </div>
                )}
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
