import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Users, GraduationCap } from "lucide-react";

const EventGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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
    "/event-2025/event-tshirt.png",
    // Added new PNG images in order
    "/event-2025/11.png",
    "/event-2025/12.png",
    "/event-2025/13.png",
    "/event-2025/14.png",
    "/event-2025/15.png",
    "/event-2025/16.png",
    // Additional event photos - first set
    "/event-2025/DSC_9286.png",
    "/event-2025/DSC_9328.png",
    "/event-2025/DSC_9366.png",
    "/event-2025/DSC_9395.png",
    "/event-2025/DSC_9432.png",
    "/event-2025/DSC_9507.png",
    "/event-2025/DSC_9602.png",
    "/event-2025/IMG_1591.png",
    "/event-2025/DSC_9600.png",
    "/event-2025/IMG_1464.png",
    // Additional event photos - second set
    "/event-2025/DSC_9223.png",
    "/event-2025/DSC_9310.png",
    "/event-2025/DSC_9451.png",
    "/event-2025/DSC_9453.png",
    "/event-2025/DSC_9459.png",
    "/event-2025/DSC_9490.png",
    "/event-2025/IMG_1576.png",
    "/event-2025/DSC_9569.png",
  ];

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const goToPrev = () => setSelectedImage(prev => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null);
  const goToNext = () => setSelectedImage(prev => prev !== null ? (prev + 1) % galleryImages.length : null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Hero Section */}
      <section className="relative pt-24 pb-8 px-4">
        <div className="max-w-7xl mx-auto text-center"> <br></br>
          {/* Stats and date - 2x2 grid on mobile, flex-row on md+ */}
          <div className="
            grid grid-cols-2 gap-3 mb-6
            md:flex md:flex-row md:items-center md:justify-center md:gap-8 md:mb-6
          ">
            <div className="flex items-center gap-1 justify-center text-primary-foreground/90 text-base md:text-2xl font-semibold">
              <Calendar className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
              <span>December 7</span>
            </div>
            <div className="flex items-center gap-1 justify-center text-primary-foreground/90 text-base md:text-2xl font-semibold">
              <MapPin className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
              <span>NYU Abu Dhabi</span>
            </div>
            <div className="flex items-center gap-1 justify-center text-primary-foreground/90 text-base md:text-2xl font-semibold">
              <Users className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
              <span>35+ Competitors</span>
            </div>
            <div className="flex items-center gap-1 justify-center text-primary-foreground/90 text-base md:text-2xl font-semibold">
              <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
              <span>7 Universities</span>
            </div>
          </div>
          <div className="border-t border-primary/10 max-w-2xl mx-auto my-5" />
          {/* Event summary */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Takãmul Cup 2025 brought together the brightest mathematical minds from across the UAE, 
              fostering collaboration, competition, and celebration of integration mastery. We extend our 
              deepest gratitude to all sponsors, organizers, and participants who made this event a reality.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery - Two-column grid for all images */}
      <section className="px-4 pb-20 mt-8">
        {/* Added mt-8 for more space above gallery */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-2xl border-2 border-primary/20 hover:border-secondary/50 transition-all duration-300 shadow-md hover:shadow-xl">
                  <img
                    src={src}
                    alt={`Takãmul Cup 2025 - Image ${index + 1}`}
                    className="w-full h-[280px] md:h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-50"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); goToPrev(); }}
            className="absolute left-4 md:left-8 text-white/80 hover:text-white transition-colors p-2 rounded-full bg-white/10 hover:bg-white/20"
          >
            <ChevronLeft size={40} />
          </button>
          
          <img
            src={galleryImages[selectedImage]}
            alt={`Takãmul Cup 2025 - Image ${selectedImage + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 md:right-8 text-white/80 hover:text-white transition-colors p-2 rounded-full bg-white/10 hover:bg-white/20"
          >
            <ChevronRight size={40} />
          </button>
          
          <div className="absolute bottom-6 text-white/70 text-sm">
            {selectedImage + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventGallery;
