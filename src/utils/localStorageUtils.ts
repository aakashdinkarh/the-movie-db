const FAVORITES_LOCAL_STORAGE_KEY = 'favorites';

export type TFavMovieDetails = {
    movieId: number;
    src: string;
    clickable: boolean;
}

export const saveFavMoviesToLocalStorage = (movieIds: TFavMovieDetails[]) => {
    try {
        localStorage.setItem(FAVORITES_LOCAL_STORAGE_KEY, JSON.stringify(movieIds));
    } catch {
        alert('Could not save, try again');
    }
}

export const getFavMoviesFromLocalStorage = () => {
    let movies: TFavMovieDetails[] = []
    try {
        let storedMovies = localStorage.getItem(FAVORITES_LOCAL_STORAGE_KEY);
        if (storedMovies) {
            storedMovies = JSON.parse(storedMovies);
        }
        movies = Array.isArray(storedMovies) ? storedMovies : [];
    } catch {
        movies = [];
    }
    saveFavMoviesToLocalStorage(movies);
    return movies;
}
