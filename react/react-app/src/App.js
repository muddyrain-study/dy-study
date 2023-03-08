import React from "react";
import * as Pages from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
export default function App() {
  return (
    <div className="main">
      <Router>
        <Pages.NavBar></Pages.NavBar>
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Pages.Home />} />
            <Route path="/news" element={<Pages.News />} />
            <Route path="/personal" element={<Pages.Personal />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
