import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './Task10.css'; // Importing your CSS file

// 1. Navigation Bar Component
const Navbar = () => {
  const checkActive = ({ isActive }) => isActive ? "nav-item active" : "nav-item";
  
  return (
    <nav className="navbar">
      <div className="logo">Task 10 App</div>
      <ul className="nav-links">
        <li><NavLink to="/" className={checkActive}>Home</NavLink></li>
        <li><NavLink to="/about" className={checkActive}>About</NavLink></li>
        <li><NavLink to="/services" className={checkActive}>Services</NavLink></li>
        <li><NavLink to="/contact" className={checkActive}>Contact</NavLink></li>
        <li><NavLink to="/profile" className={checkActive}>Profile</NavLink></li>
      </ul>
    </nav>
  );
};

// 2. The 5 Required Page Components
const Home = () => (
  <div className="page-container">
    <h1>Home Page</h1>
    <p>Welcome to the Task 10 React Routing application homepage. Navigate through the menus above to test the functionality.</p>
  </div>
);

const About = () => (
  <div className="page-container">
    <h1>About Page</h1>
    <p>This single page application demonstrates clean component structuring and seamless client-side routing using React Router DOM.</p>
  </div>
);

const Services = () => (
  <div className="page-container">
    <h1>Services Page</h1>
    <p>We provide professional modern frontend development architectures, custom UI layouts, and reactive web applications.</p>
  </div>
);

const Contact = () => (
  <div className="page-container">
    <h1>Contact Page</h1>
    <p>For inquiries regarding Task 10 submissions, reach out directly at: <strong>reactjslearning2203@outlook.com</strong></p>
  </div>
);

const Profile = () => (
  <div className="page-container">
    <h1>Profile Page</h1>
    <p><strong>User Role:</strong> React JS Trainee<br /><strong>Status:</strong> Assignment Task 10 Completed</p>
  </div>
);

// 3. Main Application Routing Config
export default function Task10() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}