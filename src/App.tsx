import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./Components/Header/Header";
import Home from "./Components/Home";
import Movie from "./Components/Movie";
import NotFound from "./Components/NotFound";
import FavoriteMovies from "./Components/FavoriteMovies";
import { cleanupExpiredCache, ONE_HOUR_IN_MS } from "./utils/indexedDBUtils";
import { getLastIndexedDBCacheCleanUp, saveLastIndexedDBCacheCleanUp } from "./utils/localStorageUtils";

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      const lastCacheClean = getLastIndexedDBCacheCleanUp();
      const now  = new Date();

      if (now.getTime() - lastCacheClean.getTime() > ONE_HOUR_IN_MS) {
        saveLastIndexedDBCacheCleanUp(now);
        cleanupExpiredCache();
      }
    }, 0);
  }, [])

  return <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favMovies" element={<FavoriteMovies />} />
      <Route path="/:movieId" element={<Movie />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <GlobalStyle />
  </BrowserRouter>
};

export default App;
