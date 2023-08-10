import React, { Suspense } from "react";
import "./App.css";
import Header from "./Components/Header";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import SinglePage from "./Components/SinglePage";
import Details from "./Components/Details";

function App() {
  let names: string[] = [
    "Home",
    "Recent projects",
    "Portfolio",
    "Services",
    "Contacts"
  ];
  let routes: string[] = ["home", "recent", "portfolio", "services", "contact"];

  return (
    <Suspense fallback="loading">
      <div className="App">
        <Router>
          <div className="z-10 sticky">
            <Header names={names} tos={routes} />
          </div>
          <Routes>
            <Route path="/" element={<SinglePage />} />
            <Route path="/#recent" element={<SinglePage />} />
            <Route path="/#portfolio" element={<SinglePage />} />
            <Route path="/#services" element={<SinglePage />} />
            <Route path="/#contact" element={<SinglePage />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </Router>
      </div>
    </Suspense>
  );
}

export default App;
