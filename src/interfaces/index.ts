export interface MusicTypes {
  type: 'single' | 'album';
  title: string;
  year: string;
  img: string;
  spotifyLink: string;
  youtubeLink: string;
  order: number;
  lang: 'es' | 'en';
}
