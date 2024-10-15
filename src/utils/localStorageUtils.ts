const FAVORITES_LOCAL_STORAGE_KEY = 'favorites';
const LAST_INDEXED_DB_CLEAN_UP = 'lastIndexedDbCleanUp'

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

export const saveLastIndexedDBCacheCleanUp = (lastCleanUp: Date) => {
    try {
        localStorage.setItem(LAST_INDEXED_DB_CLEAN_UP, lastCleanUp.toString());
    } catch {
        alert('Could not save, try again');
    }
}

export const getLastIndexedDBCacheCleanUp = () => {
    let lastCleanUp = new Date();
    try {
        let lastStoredCleanUp: string | Date | null = localStorage.getItem(LAST_INDEXED_DB_CLEAN_UP);
        if (!lastStoredCleanUp) {
            saveLastIndexedDBCacheCleanUp(lastCleanUp);
            throw new Error('Could not find last stored clean up time');
        }

        lastStoredCleanUp = new Date(lastStoredCleanUp);

        if (lastStoredCleanUp.toDateString() !== 'Invalid Date') lastCleanUp = lastStoredCleanUp;
    } catch {}

    return lastCleanUp;
}
