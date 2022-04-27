import "./App.scss";
/* import Admin from "./pages/Admin";
import SignIn from "./pages/Admin/signIn";
import Home from "./pages/home";
import Contact from "./pages/contact";
import React from "react"; */

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./config/routes";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component></route.component>
                <h2>Child Component</h2>
              </route.layout>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

/* function NotFound() {
  return <h2>Component Not Found</h2>;
} */

export default App;
