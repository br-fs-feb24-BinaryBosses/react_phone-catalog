import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageTemplate from '../pages/PageTemplate/PageTemplate.tsx';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<PageTemplate />} />
      {/* Add all Routes */}
    </Routes>
  );
}

export default Router;
