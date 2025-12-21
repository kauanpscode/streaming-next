export type ID = number;
export type DateString = string;

export type Genre = {
  id: ID;
  documentId: string;
  name: string;
  createdAt: DateString;
  updatedAt: DateString;
  publishedAt: DateString;
};

export type Season = {
  id: ID;
  documentId: string;
  season: number;
  createdAt: DateString;
  updatedAt: DateString;
  publishedAt: DateString;
  episodes: Episode[];
};

export type MediaFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
};

export type MediaFormats = {
  thumbnail?: MediaFormat;
  small?: MediaFormat;
  medium?: MediaFormat;
  large?: MediaFormat;
};

export type Media = {
  id: ID;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: MediaFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  createdAt: DateString;
  updatedAt: DateString;
  publishedAt: DateString;
};

export type TvSeries = {
  id: ID;
  documentId: string;
  title: string;
  description: string;
  createdAt: DateString;
  updatedAt: DateString;
  publishedAt: DateString;

  poster: Media;
  background: Media;

  genre: Genre;
  seasons: Season[];
};

export type Episode = {
  id: ID;
  documentId: string;
  title: string;
  description: string;
  videoUrl: string;
  duration?: number;
  cover?: Media;
};
