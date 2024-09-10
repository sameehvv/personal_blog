import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RevealBento } from './components/RevealBento'; 
import BlogList from './components/BlogList';
import BlogView from './components/BlogView';
import Projects from './components/Projects';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RevealBento />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:id" element={<BlogView />} />
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;