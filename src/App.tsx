import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./Components/Header/Header";
import Home from "./Components/Home";
import Movie from "./Components/Movie";
import NotFound from "./Components/NotFound";
import FavoriteMovies from "./Components/FavoriteMovies";

const App = () => (
  <BrowserRouter basename={process.env.NODE_ENV === 'development' ? '/' : process.env.PUBLIC_URL}>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favMovies" element={<FavoriteMovies />} />
      <Route path="/:movieId" element={<Movie />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
