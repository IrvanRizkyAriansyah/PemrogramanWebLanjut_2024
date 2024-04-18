import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChapterOne } from '../modules/chapter-1';

export default function BaseRoute() {
  return (
    <React.Suspense>
      <Routes>
        <Route index element={<ChapterOne />} />
      </Routes>
    </React.Suspense>
  );
}
