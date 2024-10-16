type TCast = {
	adult: boolean;
	gender: number;
	id: number;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: string;
	cast_id: number;
	character: string;
	credit_id: string;
	order: number;
};

type TCrew = {
	adult: boolean;
	gender: number;
	id: number;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: string;
	credit_id: string;
	department: string;
	job: string;
};

export type TCredits = {
	id: number;
	cast: TCast[];
	crew: TCrew[];
};

type TCollection = {
	id: number;
	name: string;
	poster_path: string;
	backdrop_path: string;
};

type TGenre = {
	id: number;
	name: string;
};

type TProductionCompany = {
	id: number;
	logo_path: string | null;
	name: string;
	origin_country: string;
};

type TProductionCountry = {
	iso_3166_1: string;
	name: string;
};

type TSpokenLanguage = {
	english_name: string;
	iso_639_1: string;
	name: string;
};

export type TMovie = {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: TCollection;
	budget: number;
	genres: TGenre[];
	homepage: string;
	id: number;
	imdb_id: string;
	origin_country: string[];
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: TProductionCompany[];
	production_countries: TProductionCountry[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: TSpokenLanguage[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

export type TMovieState = { actors: TCredits['cast']; directors: TCredits['crew'] } & TMovie;
