// import logo from "./logo.svg";
// import "./App.css";

import React, { Component } from "react";

import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import Dashboard from "./components/dashboard";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <div>
            <Header />
            <Sidebar />
            <Route path="/dashboard" component={Dashboard} />
            <Footer />
          </div>
        </Routes>
      </Router>
    );
  }
}
