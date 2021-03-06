import React from "react";
import Home from "./components/Home";
import MyList from "./components/MyList";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
		  <Route path="/register" element={<Register />} />
		  <Route path="/home" element={<Home />} />
		  <Route path="/mylist" element={<MyList />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
