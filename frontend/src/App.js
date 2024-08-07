import React from "react";
import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import Enroll from "./components/Enroll/Enroll";
import LoginSignUp from "./components/LoginSignUp/LoginSignUp";
import AdminDashboard from "./components/Admin/AdminDashboard"; // Import AdminDashboard

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/signup" element={<LoginSignUp />} />
        <Route path="/admin/*" element={<AdminDashboard />} /> {/* Admin route */}
        <Route
          path="*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<CourseHome />} />
                <Route path="/team" element={<Team />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/journal" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/enroll" element={<Enroll />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
