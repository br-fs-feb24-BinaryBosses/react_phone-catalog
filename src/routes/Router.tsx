import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RecommendedPhones from '../components/ComponentTemplate/RecommendedPhones/RecommendedPhones.tsx';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<RecommendedPhones />} />
      {/* Add all Routes here */}
    </Routes>
  );
}

export default Router;
