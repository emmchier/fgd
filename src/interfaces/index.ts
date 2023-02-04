export interface MusicType {
  img: string;
  alt: string;
  title: string;
  year: string;
  type: 'single' | 'album';
  actions: SocialMediaType[];
}

export interface SocialMediaType {
  type: 'spotify' | 'youtube';
  link: string;
}
