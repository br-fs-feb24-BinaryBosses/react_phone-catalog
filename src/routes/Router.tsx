import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../App.tsx';
import NotFound from '../pages/NotFound/NotFound.tsx';
import PageTemplate from '../pages/PageTemplate/PageTemplate.tsx';

function Router() {
  return (
    <Routes>
      <Route index element={<PageTemplate />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
