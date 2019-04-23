import React, { Suspense } from "react";
import About from "./pages/About";
import Navbar from "./pages/Navbar";
import PageLoader from "./pages/PageLoader";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Route path="/" component={Navbar} />
      <Route path="/about" component={About} />
    </Suspense>
  );
}

export default App;
