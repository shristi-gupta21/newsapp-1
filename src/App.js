import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setprogress] = useState(0);

  //lifecycle method

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color="#f11946"
          progress={progress}
          // onLoaderFinished={() => setprogress(0)}
        />
        <Routes>
          <Route
            exact
            path="/business"
            element={
              <News
                setprogress={setprogress}
                apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/"
            element={
              <News
                setprogress={setprogress}
                apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          />

          <Route
            exact
            path="/entertainment"
            element={
              <News
                setprogress={setprogress}
                apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            }
          />

          <Route
            exact
            path="/general"
            element={
              <News
                setprogress={setprogress}
                apiKey={apiKey}
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
