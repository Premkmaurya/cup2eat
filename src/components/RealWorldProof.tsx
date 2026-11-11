import { useState } from 'react';
import { ArrowUpRight, Play } from 'lucide-react';
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

        {/* Featured film with two supporting videos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <button
            type="button"
            onClick={() => handlePlayVideo(featuredVideo)}
            aria-label={`Play featured video: ${featuredVideo.title}`}
            className="group relative min-h-[360px] overflow-hidden rounded-3xl border border-cream-border bg-deep text-left shadow-warm-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-warm-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-cream lg:col-span-7 lg:min-h-[520px]"
          >
            <video
              src={featuredVideo.src}
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/15 to-deep/10" />
            <span className="absolute left-6 top-6 rounded-full border border-cream/30 bg-deep/45 px-3 py-1.5 text-[10px] font-heading font-semibold uppercase tracking-[0.16em] text-cream backdrop-blur-sm">
              Featured film
            </span>
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cream/60 bg-cream/90 text-forest shadow-warm-lg transition-transform duration-300 group-hover:scale-105">
              <Play className="ml-1 h-6 w-6 fill-current" aria-hidden="true" />
            </span>
            <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-6 sm:p-8">
              <span>
                <span className="mb-2 block text-[10px] font-heading font-semibold uppercase tracking-[0.18em] text-gold-light">
                  {featuredVideo.category}
                </span>
                <span className="block max-w-xl font-serif text-2xl leading-tight text-cream sm:text-3xl">
                  {featuredVideo.title}
                </span>
              </span>
              <span className="hidden shrink-0 items-center gap-2 pb-1 text-xs font-heading font-semibold text-cream sm:inline-flex">
                Play video <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </span>
          </button>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {reelVideos.map((video) => (
              <button
                key={video.id}
                type="button"
                onClick={() => handlePlayVideo(video)}
                aria-label={`Play video: ${video.title}`}
                className="group grid min-h-[190px] grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] overflow-hidden rounded-2xl border border-cream-border bg-cream-soft text-left shadow-warm-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-forest/30 hover:shadow-warm-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-cream lg:min-h-0 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]"
              >
                <span className="relative min-h-[190px] overflow-hidden bg-cream-muted lg:min-h-[238px]">
                  <video
                    src={video.src}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/90 text-forest shadow-warm-sm transition-transform duration-300 group-hover:scale-105">
                      <Play className="ml-0.5 h-4 w-4 fill-current" aria-hidden="true" />
                    </span>
                  </span>
                </span>
                <span className="flex flex-col justify-center p-4 sm:p-5 lg:p-6">
                  <span className="mb-2 text-[10px] font-heading font-semibold uppercase tracking-[0.16em] text-terracotta">
                    {video.category}
                  </span>
                  <span className="font-serif text-lg leading-snug text-forest sm:text-xl">
                    {video.title}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-forest/70 transition-colors group-hover:text-forest">
                    Watch video <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </span>
              </button>
            ))}
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
