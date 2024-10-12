import React from 'react';
import Grid from './Grid/Grid';
import Thumbnail from './Thumbnail/Thumbnail';
import BreadCrumb from './BreadCrumb/BreadCrumb';
import { getFavMoviesFromLocalStorage } from '../utils/localStorageUtils';

const FavoriteMovies = () => {
	const favMovies = getFavMoviesFromLocalStorage();

	return (
		<>
			<BreadCrumb movieTitle='Favorites' />
			{favMovies?.length !== 0 ? (
				<Grid header='Your Favorite Movies'>
					{favMovies.map((movie) => (
						<Thumbnail
							key={movie.movieId}
							clickable={movie.clickable}
							src={movie.src}
							movieId={movie.movieId}
						/>
					))}
				</Grid>
			) : (
				<h2>No Favorites Movies to show</h2>
			)}
		</>
	);
};

export default FavoriteMovies;
