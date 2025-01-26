import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Terms from "./pages/Terms.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const markAsCompleted = (id) => {
    const taskToComplete = tasks.find((task) => task.id === id);
    setTasks(tasks.filter((task) => task.id !== id));
    setCompletedTasks([...completedTasks, { ...taskToComplete, completed: true }]);
  };

  return (
    <Router basename="/ToDo">
      <div className={`main_div ${darkMode ? "dark-mode" : ""}`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route
            path="/"
            element={ <Home tasks={tasks} addTask={addTask} deleteTask={deleteTask} 
            markAsCompleted={markAsCompleted} completedTasks={completedTasks} />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
