import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Users, GraduationCap, Camera } from "lucide-react";
import Footer from "@/components/Footer";

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
      {/* Hero Section - matches other pages */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-primary/10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="flex justify-center mb-6">
              <Camera className="w-16 h-16 text-secondary" />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#e8c896] via-[#c08550] to-[#9a5a2a] bg-clip-text text-transparent">
              2025 Gallery
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
              Moments from the inaugural Takãmul Cup
            </p>

            {/* Event facts row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 pt-8 max-w-3xl mx-auto">
              {[
                { Icon: Calendar, label: "December 7" },
                { Icon: MapPin, label: "NYU Abu Dhabi" },
                { Icon: Users, label: "35+ Competitors" },
                { Icon: GraduationCap, label: "7 Universities" },
              ].map(({ Icon, label }, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-card/70 backdrop-blur border border-primary/30"
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5 text-secondary flex-shrink-0" />
                  <span className="text-sm md:text-base font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="max-w-3xl mx-auto text-center text-lg text-muted-foreground leading-relaxed">
            Takãmul Cup 2025 brought together the brightest mathematical minds from across the UAE,
            fostering collaboration, competition, and celebration of integration mastery. We extend our
            deepest gratitude to all sponsors, organizers, and participants who made this event a reality.
          </p>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {galleryImages.map((src, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative mb-4 block w-full overflow-hidden rounded-xl border border-primary/30 bg-card shadow-sm hover:shadow-xl transition-all duration-300 break-inside-avoid"
              >
                <img
                  src={src}
                  alt={`Takãmul Cup 2025 - Image ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-tertiary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-tertiary/95 backdrop-blur flex items-center justify-center"
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
      <Footer />
    </div>
  );
};

export default EventGallery;
