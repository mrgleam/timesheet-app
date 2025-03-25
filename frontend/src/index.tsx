import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import MyProfile from "./components/MyProfile";
import TimeTable from "./components/TimeTable";

const root = document.getElementById("root");

if (!root) {
  throw new Error("No root element found");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/time-table" element={<TimeTable />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>,
);
