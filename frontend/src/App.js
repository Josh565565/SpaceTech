import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import { Navigate } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

import LandingPage from "./components/LandingPage/LandingPage";
import NewsPage from "./components/NewsPage/NewsPage";
import NewsViewPage from "./components/NewsViewPage/NewsViewPage";
import SignIn from "./components/SigninSignup/SignIn";
import SignUp from "./components/SigninSignup/SignUp";
import NewsHeader from "./components/NewsHeader/NewsHeader";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/newspage" element={<NewsPage />} />
          <Route path="/newsviewpage" element={<NewsViewPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Redirect to home page if no route matches */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
