import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import React from 'react'
import LandingPage from "../pages/LandingPage";
import MovieDetails from "../pages/MovieDetails";

export default function MyRoutes() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route exact path="/movies/:movieId" element={<MovieDetails />} />
        </Routes>
    </Router>
  )
}
