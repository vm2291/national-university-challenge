import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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
    "/event-2025/event-tshirt.png"
  ];

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const goToPrev = () => setSelectedImage(prev => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null);
  const goToNext = () => setSelectedImage(prev => prev !== null ? (prev + 1) % galleryImages.length : null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Hero Section */}
      <section className="relative pt-24 pb-6 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">
            Takãmul Cup 2025
          </h1>
          {/* Removed subtitle */}
          {/* Stats and date */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            December 7, 2025 • NYU Abu Dhabi • 35+ Competitors • 7 Universities
          </p>
          {/* Event summary moved here */}
          <div className="max-w-4xl mx-auto text-center mt-6">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              The competition brought together the brightest mathematical minds from across the UAE, 
              fostering collaboration, competition, and celebration of integration mastery. We extend our 
              deepest gratitude to all sponsors, organizers, and participants who made this event a reality.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery - Two-column grid for all images */}
      <section className="px-4 pb-20">
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
