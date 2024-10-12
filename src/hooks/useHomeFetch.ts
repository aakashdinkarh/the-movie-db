import { useState, useEffect } from "react";
import { persistedState } from "../helpers";
import API from "../API";
import { TListMovieDetails } from "./homeFetchTypes";

const initialState: TListMovieDetails = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  //Initial and Search
  useEffect(() => {
    if (!searchTerm) {
      const sessionState = persistedState("homeState");
      if (sessionState) {
        setState(sessionState);
        return;
      }
    }

    setState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  //Load More
  useEffect(() => {
    if (!isLoadingMore) return;

    fetchMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state.page]);

  //Write to session storage
  useEffect(() => {
    if (
      !searchTerm &&
      state &&
      state.results &&
      Array.isArray(state.results) &&
      state.results.length
    )
      sessionStorage.setItem("homeState", JSON.stringify(state));
  }, [searchTerm, state]);

  const fetchMovies = async (page: number, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);

      const movies: TListMovieDetails = await API.fetchMovies(searchTerm, page);

      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
};
