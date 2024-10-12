import { useState, useEffect } from 'react';
import API from '../API';

import { persistedState, persistState } from '../helpers';
import { TCredits, TMovie, TMovieState } from './movieFetchTypes';

export const useMovieFetch = (movieId?: number | string) => {
	// @ts-ignore
	const [state, setState] = useState<TMovieState>({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (!movieId) return;

		const sessionState = persistedState(movieId);

		if (sessionState && Object.keys(sessionState).length) {
			setState(sessionState);
			setLoading(false);
			return;
		}

		const fetchMovie = async () => {
			try {
				setLoading(true);
				setError(false);

				const movie: TMovie = await API.fetchMovie(movieId);
				const credits: TCredits = await API.fetchCredits(movieId);

				const directors = credits.crew.filter((member) => member.job === 'Director');

				setState({
					...movie,
					actors: credits.cast,
					directors,
				});
				setLoading(false);
			} catch (error) {
				setError(true);
			}
		};

		fetchMovie();
	}, [movieId]);

	//Write to session storage
	useEffect(() => {
		if (state && movieId && Object.keys(state).length) persistState(movieId, state);
	}, [movieId, state]);

	return { state, loading, error };
};
