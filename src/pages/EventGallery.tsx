import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Users, GraduationCap } from "lucide-react";
import PageHero from "@/components/PageHero";

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
    <div className="min-h-screen pt-16">
      <PageHero
        kicker="2025 Edition"
        title={<>The <span className="font-display-italic text-secondary">2025</span> gallery.</>}
        intro="Takãmul Cup 2025 brought together the brightest mathematical minds from across the UAE, fostering collaboration, competition, and celebration of integration mastery. We extend our deepest gratitude to all sponsors, organizers, and participants who made this event a reality."
        meta={
          <>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> December 7</span>
            <span className="text-secondary/40">/</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> NYU Abu Dhabi</span>
            <span className="text-secondary/40">/</span>
            <span className="flex items-center gap-2"><Users className="w-4 h-4" /> 35+ Competitors</span>
            <span className="text-secondary/40">/</span>
            <span className="flex items-center gap-2"><GraduationCap className="w-4 h-4" /> 7 Universities</span>
          </>
        }
      />

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
