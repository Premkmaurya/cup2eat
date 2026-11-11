import video1 from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';
import video3 from '../assets/videos/video3.mp4';

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  description: string;
  src?: string;
  embedUrl?: string;
  type: 'local' | 'embed' | 'instagram-reel';
  stats?: string;
  quote?: string;
}

export const featuredVideo: VideoItem = {
  id: 'featured-community',
  title: 'First-time reactions to eating the cup',
  category: 'Real Community Moments',
  description: 'Watch genuine customer reactions as guests finish their coffee and discover the cup itself is an edible baked wafer.',
  src: video1,
  type: 'local',
  stats: 'Verified Demonstration',
  quote: '“People don’t throw them away. They share them, photograph them, and eat every crumb.”',
};

export const reelVideos: VideoItem[] = [
  {
    id: 'customer-reactions',
    title: 'Hot Coffee Test',
    category: 'Live Reactions',
    description: 'Watch guests finish their drink and realise the cup itself is a crisp baked wafer snack.',
    src: video2,
    type: 'local',
    stats: 'Tasting Pop-Up',
  },
  {
    id: 'coffee-test',
    title: 'Live Tasting Pop-Up Reactions',
    category: 'Product Demo',
    description: 'Real-time demonstration of an espresso pour held for 40 minutes with zero leakage.',
    src: video3,
    type: 'local',
    stats: 'Coffee Lab',
  },
];
