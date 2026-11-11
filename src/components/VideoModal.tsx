import { useEffect, useRef, useState } from 'react';
import { X, AlertCircle, ArrowUpRight, Play, Film } from 'lucide-react';
import type { VideoItem } from '../data/videos';
import { InstagramIcon } from './InstagramIcon';

interface VideoModalProps {
  video: VideoItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal = ({ video, isOpen, onClose }: VideoModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);

  // Prevent background scrolling and handle Escape key
  useEffect(() => {
    if (!isOpen) {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Reset error state on new video open
    setHasError(false);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, video]);

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    onClose();
  };

  if (!isOpen || !video) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      onClick={handleClose}
    >
      {/* Modal Dialog Card (stops propagation so clicking inside doesn't close) */}
      <div
        className="relative w-full max-w-4xl bg-deep rounded-2xl sm:rounded-3xl border border-gold/30 shadow-deep-lg overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cream/10 bg-deep/95">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-heading font-semibold uppercase tracking-widest text-gold-light bg-forest/80 px-2.5 py-0.5 rounded-full border border-gold/20">
              {video.category}
            </span>
            <h3
              id="video-modal-title"
              className="font-serif font-bold text-base sm:text-lg text-white truncate max-w-xs sm:max-w-md"
            >
              {video.title}
            </h3>
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={handleClose}
            className="p-2 rounded-full text-cream/70 hover:text-white hover:bg-forest/60 transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Surface */}
        <div className="relative bg-black aspect-video sm:aspect-[16/10] w-full flex items-center justify-center overflow-hidden">
          {!hasError && video.src ? (
            <video
              ref={videoRef}
              src={video.src}
              controls
              playsInline
              autoPlay
              preload="metadata"
              onError={() => {
                setHasError(true);
              }}
              className="w-full h-full object-contain"
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support HTML5 video playback.
            </video>
          ) : (
            /* Graceful Placeholder / Fallback State */
            <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 bg-deep/95">
              {/* Top Banner */}
              <div className="relative z-10 flex items-center gap-2 text-xs font-heading text-gold-light">
                <Film className="w-4 h-4 text-gold" />
                <span>Official Brand Demonstration Footage</span>
              </div>

              {/* Center Content */}
              <div className="relative z-10 max-w-lg mx-auto text-center space-y-4 my-auto">
                <div className="w-16 h-16 rounded-full bg-forest/80 border-2 border-gold/40 flex items-center justify-center text-gold mx-auto shadow-deep-lg">
                  <Play className="w-7 h-7 ml-1" />
                </div>
                <h4 className="font-serif font-bold text-xl sm:text-2xl text-white">
                  {video.title}
                </h4>
                <p className="text-xs sm:text-sm text-cream/80 leading-relaxed font-normal">
                  {video.description}
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="https://www.instagram.com/cup2eat/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-deep font-heading font-semibold text-xs px-5 py-2.5 rounded-full transition-colors shadow-sm"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>Watch Reel on @cup2eat Instagram</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  {hasError && (
                    <button
                      type="button"
                      onClick={() => {
                        setHasError(false);
                        if (videoRef.current) {
                          videoRef.current.load();
                          videoRef.current.play();
                        }
                      }}
                      className="inline-flex items-center gap-1.5 text-xs text-cream/70 hover:text-white px-3 py-2"
                    >
                      <AlertCircle className="w-3.5 h-3.5 text-terracotta" />
                      <span>Retry Local File</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Footer Note */}
              <div className="relative z-10 text-center text-[11px] text-cream/50">
                To play offline video in production, place <code className="text-gold-light">{video.src}</code> in the public directory.
              </div>
            </div>
          )}
        </div>

        {/* Modal Info Footer */}
        <div className="px-6 py-4 bg-deep/95 border-t border-cream/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-heading text-cream/75">
          <p className="max-w-xl line-clamp-1 sm:line-clamp-none font-normal">
            {video.description}
          </p>
          <div className="flex items-center gap-4 text-gold-light shrink-0">
            {video.stats && <span>• {video.stats}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};
