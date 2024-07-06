import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Contact from './pages/Contact';

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
      </Routes>
      {!hideProjects && <ProjectForm />}
    </div>
  );
};

export default MainContent;
