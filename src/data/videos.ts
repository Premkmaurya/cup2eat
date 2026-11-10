export interface VideoItem {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  src?: string;
  embedUrl?: string;
  type: 'local' | 'embed' | 'instagram-reel';
  stats?: string;
  quote?: string;
  duration?: string;
}

export const featuredVideo: VideoItem = {
  id: 'featured-community',
  title: 'Live Tasting Pop-Up Reactions',
  category: 'Real Community Moments',
  description: 'Watch genuine customer reactions as guests finish their coffee and discover the cup itself is an edible baked wafer.',
  thumbnail: '/images/social-people.jpg',
  src: '/videos/community-tasting.mp4',
  type: 'local',
  stats: 'Verified Demonstration',
  quote: '“People don’t throw them away. They share them, photograph them, and eat every crumb.”',
  duration: '0:45',
};

export const reelVideos: VideoItem[] = [
  {
    id: 'customer-reactions',
    title: 'First-time reactions to eating the cup',
    category: 'Live Reactions',
    description: 'Watch guests finish their drink and realise the cup itself is a crisp baked wafer snack.',
    thumbnail: '/images/experience-eat.jpg',
    src: '/videos/customer-reactions.mp4',
    type: 'local',
    stats: 'Tasting Pop-Up',
    duration: '0:32',
  },
  {
    id: 'coffee-test',
    title: 'The 40-Minute Hot Coffee Test',
    category: 'Product Demo',
    description: 'Real-time demonstration of an espresso pour held for 40 minutes with zero leakage.',
    thumbnail: '/images/product-story-cup.jpg',
    src: '/videos/coffee-test.mp4',
    type: 'local',
    stats: 'Coffee Lab',
    duration: '1:15',
  },
  {
    id: 'barista-service',
    title: 'Barista Service Flow at Peak Rush',
    category: 'Café Operations',
    description: 'How specialty coffee bars integrate CUP2EAT directly under standard espresso group heads.',
    thumbnail: '/images/experience-pour.jpg',
    src: '/videos/barista-service.mp4',
    type: 'local',
    stats: 'Barista Feature',
    duration: '0:58',
  },
];
