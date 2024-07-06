import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ProjectList from './components/ProjectList';
import ProjectDetail from './pages/ProjectDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import NewProject from './pages/NewProject';

const MainContent = () => {
  const location = useLocation();
  const hideProjects = location.pathname === '/about' || location.pathname === '/contact';

  return (
    <div className="flex-grow container mx-auto p-4">
      <Routes>
        <Route path="/" element={<ProjectList />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/new-project" element={<NewProject />} />
      </Routes>
    </div>
  );
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Provider store={store}>
      <Router>
        <div className={isDarkMode ? 'dark min-h-screen flex flex-col' : 'min-h-screen flex flex-col'}>
          <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <MainContent />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
