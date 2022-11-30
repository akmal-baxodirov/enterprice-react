import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AboutPage from './views/pages/AboutPage';
import Home from './views/pages/Home';
import NotFoundPage from './views/pages/NotFoundPage';

const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/not-found" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/not-found" replace />} />
    </Routes>
  );
};
export default RoutesList;
