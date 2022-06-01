import React from "react";

//Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Styles
import { GlobalStyle } from "./GlobalStyle";

//Components
import Header from "./Components/Header/Header";
import Home from "./Components/Home";
import Movie from "./Components/Movie";
import NotFound from "./Components/NotFound";

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:movieId" element={<Movie />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
