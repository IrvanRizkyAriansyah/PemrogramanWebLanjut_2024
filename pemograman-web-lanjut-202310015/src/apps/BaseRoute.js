import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChapterOne } from '../modules/chapter-1';
import { ChapterTwo } from '../modules/chapter-2';
import Auth from '../modules/chapter-2/widgets/authentifications';
import LayoutInit from '../components/LayoutInit';

export default function BaseRoute() {
  const arr = [
    { path: 'chapter-1', element: <ChapterOne /> },
    { path: 'chapter-2', element: <ChapterTwo /> },
  ];
  return (
    <React.Suspense>
      <Routes>
        <Route
          index
          element={
            <LayoutInit>
              <ChapterOne />
            </LayoutInit>
          }
        />

        <Route path='sign-in' element={<Auth />} />
        {arr.map((a) => (
          <Route path={a.path} element={<LayoutInit>{a.element}</LayoutInit>} />
        ))}
      </Routes>
    </React.Suspense>
  );
}
