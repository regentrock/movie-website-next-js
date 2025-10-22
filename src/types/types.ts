export interface Filme {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  genre_ids: string[];
  vote_average: number;
  runtime: number;
  status: string;
  original_language: string;
  budget: number;
  revenue: number;
  production_companies: {
    id: number;
    name: string;
    logo_path?: string;
    origin_country?: string;
  }[];
  tagline?: string;
  vote_count?: number;
  genres?: {
    id: number;
    name: string;
  }[];
}