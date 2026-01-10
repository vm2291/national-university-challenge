const EventGallery = () => {
  const galleryImages = [
    {
      src: "/event-2025/competition-room.png",
      title: "Competition in Progress",
      description: "Over 30 talented competitors from 6 universities focused on solving complex integration problems in the state-of-the-art venue at NYU Abu Dhabi."
    },
    {
      src: "/event-2025/organizers-discussion.png",
      title: "Organizing Team Coordination",
      description: "Event coordinators and judges working together to ensure fair competition and smooth execution of the Takãmul Cup 2025."
    },
    {
      src: "/event-2025/team-judging.png",
      title: "Judging Session",
      description: "Expert judges and organizers reviewing solutions and verifying answers during the intense competition rounds."
    },
    {
      src: "/event-2025/whiteboard-explanation.png",
      title: "Solution Verification",
      description: "Competitors explaining their integration solutions on the whiteboard, demonstrating mathematical excellence and problem-solving skills."
    },
    {
      src: "/event-2025/competitor-solving.png",
      title: "Whiteboard Round",
      description: "A competitor tackling a challenging integral during the whiteboard round, showcasing analytical thinking and mathematical prowess."
    },
    {
      src: "/event-2025/buzzer-round.png",
      title: "Speed Integration Challenge",
      description: "The exciting buzzer round where competitors race against time to solve integrals, combining speed with accuracy."
    },
    {
      src: "/event-2025/laptop-solving.png",
      title: "Digital Problem Solving",
      description: "Participants utilizing laptops and computational tools alongside traditional methods to solve complex mathematical challenges."
    },
    {
      src: "/event-2025/award-ceremony-winner.png",
      title: "Champion Recognition",
      description: "The Takãmul Cup champion receiving their award from distinguished guests and organizers, celebrating mathematical excellence."
    },
    {
      src: "/event-2025/group-photo-winners.png",
      title: "Winners & Organizers",
      description: "All winners, finalists, judges, and organizing committee members celebrating the successful completion of Takãmul Cup 2025."
    },
    {
      src: "/event-2025/event-tshirt.png",
      title: "Official Event Merchandise",
      description: "The official Takãmul Cup 2025 t-shirt featuring the competition branding and mathematical theme, worn by all participants."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">
              Takãmul Cup 2025
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4">
              A Grand Celebration of Mathematical Excellence
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              December 7, 2025 • NYU Abu Dhabi • 30+ Competitors • 6 Universities
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-card border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/5">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {image.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Impact Section */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-secondary p-8 md:p-12 rounded-3xl text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A Resounding Success
            </h2>
            <p className="text-lg md:text-xl leading-relaxed opacity-95">
              The Takãmul Cup 2025 brought together the brightest mathematical minds from across the UAE, 
              fostering collaboration, competition, and celebration of integration mastery. This event continues 
              to strengthen the mathematical community and inspire the next generation of problem solvers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventGallery;
