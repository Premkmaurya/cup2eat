import { useState } from 'react';
import { ArrowUpRight, Play, Heart, MessageCircle } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { featuredVideo, reelVideos, type VideoItem } from '../data/videos';
import { VideoModal } from './VideoModal';

export const RealWorldProof = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayVideo = (video: VideoItem) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="community" className="py-24 sm:py-32 bg-cream relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header with Instagram Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-cream-border">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-forest" />
              <span className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-forest/75">
                Authentic Verification
              </span>
            </div>
            <h2 className="text-editorial-h2 font-serif font-normal text-forest tracking-tight">
              Seen, tried <br className="hidden sm:inline" />
              <span className="italic">and enjoyed.</span>
            </h2>
          </div>

          <div className="mt-4 md:mt-0">
            <a
              href="https://www.instagram.com/cup2eat/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cream-soft hover:bg-forest hover:text-cream-soft border border-cream-border text-forest px-5 py-2.5 rounded-full text-xs font-heading font-semibold transition-all duration-300 shadow-warm-sm"
            >
              <InstagramIcon className="w-4 h-4 text-terracotta" />
              <span>Explore @cup2eat on Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Featured Lifestyle Video Thumbnail + Reel Gallery Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Featured Authentic Customer Video Thumbnail */}
          <div
            onClick={() => handlePlayVideo(featuredVideo)}
            className="lg:col-span-5 rounded-3xl overflow-hidden editorial-frame bg-cream-soft border border-cream-border flex flex-col justify-between group cursor-pointer text-left transition-all duration-300 hover:shadow-warm-lg hover:border-gold/50"
            role="button"
            tabIndex={0}
            aria-label={`Play featured video: ${featuredVideo.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handlePlayVideo(featuredVideo);
              }
            }}
          >
            <div className="relative h-[360px] sm:h-[420px] overflow-hidden">
              <img
                src={featuredVideo.thumbnail}
                alt={featuredVideo.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle dark gradient for text readability and cinematic depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/30 to-deep/20 transition-opacity duration-300 group-hover:opacity-90" />
              
              {/* Top Badge */}
              <div className="absolute top-5 left-5 bg-cream-soft/90 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] font-heading font-semibold text-forest border border-cream-border/60">
                {featuredVideo.category}
              </div>

              {/* Center Professional Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-forest/85 border-2 border-gold/50 text-gold flex items-center justify-center shadow-deep-lg transform transition-all duration-300 group-hover:scale-110 group-hover:bg-forest group-hover:border-gold">
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 ml-1 fill-gold/20" />
                </div>
              </div>

              {/* Bottom Testimonial Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-cream-soft">
                <blockquote className="font-serif italic text-lg sm:text-xl text-white leading-snug">
                  {featuredVideo.quote}
                </blockquote>
                <div className="flex items-center justify-between mt-3 text-xs font-heading">
                  <span className="text-gold-light uppercase tracking-wider">
                    {featuredVideo.stats}
                  </span>
                  <span className="text-cream/70 text-[11px]">
                    Click to Play Video • {featuredVideo.duration}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="p-6 bg-cream border-t border-cream-border flex items-center justify-between text-xs font-heading text-charcoal/70">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 text-terracotta" /> Community Loved</span>
                <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" /> Zero Rubbish</span>
              </div>
              <span className="text-forest font-semibold flex items-center gap-1 group-hover:text-gold-dark transition-colors">
                <span>Watch Video</span>
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* Right: Playable Video Items List (3 Horizontal Cards) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            {reelVideos.map((reel) => (
              <div
                key={reel.id}
                onClick={() => handlePlayVideo(reel)}
                className="bg-cream-soft hover:bg-cream rounded-2xl p-6 border border-cream-border hover:border-gold/50 transition-all duration-300 shadow-warm-sm hover:shadow-warm-md flex items-center justify-between gap-6 group cursor-pointer text-left"
                role="button"
                tabIndex={0}
                aria-label={`Play video: ${reel.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handlePlayVideo(reel);
                  }
                }}
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-heading font-semibold uppercase tracking-wider text-forest/70 bg-cream px-2.5 py-0.5 rounded-full border border-cream-border">
                      {reel.category}
                    </span>
                    <span className="text-xs text-charcoal/50 font-heading">
                      {reel.stats} {reel.duration && `• ${reel.duration}`}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-forest group-hover:text-forest-light transition-colors">
                    {reel.title}
                  </h3>
                  <p className="text-xs text-charcoal/70 max-w-md font-normal leading-relaxed">
                    {reel.description}
                  </p>
                </div>

                {/* Circular Play Button */}
                <div className="w-12 h-12 rounded-full bg-forest text-cream-soft flex items-center justify-center shrink-0 shadow-sm border border-gold/30 group-hover:scale-105 group-hover:bg-forest-light transition-all">
                  <Play className="w-4 h-4 ml-0.5 text-gold" />
                </div>
              </div>
            ))}

            {/* Transparency Note */}
            <div className="p-4 rounded-xl bg-cream-soft/60 border border-cream-border/60 text-xs text-charcoal/65 font-normal">
              <strong>Editorial Transparency:</strong> All footage, tasting feedback, and client demonstrations are broadcast openly on our verified Instagram page <a href="https://www.instagram.com/cup2eat/" target="_blank" rel="noopener noreferrer" className="text-forest font-semibold underline">@cup2eat</a>.
            </div>
          </div>

        </div>

      </div>

      {/* Video Player Modal */}
      <VideoModal
        video={selectedVideo}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};
