const EventGallery = () => {
  const galleryImages = [
    "/event-2025/competition-room.png",
    "/event-2025/organizers-discussion.png",
    "/event-2025/team-judging.png",
    "/event-2025/whiteboard-explanation.png",
    "/event-2025/competitor-solving.png",
    "/event-2025/buzzer-round.png",
    "/event-2025/laptop-solving.png",
    "/event-2025/award-ceremony-winner.png",
    "/event-2025/group-photo-winners.png",
    "/event-2025/event-tshirt.png"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-card border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={src}
                    alt={`Takãmul Cup 2025 - Image ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
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
