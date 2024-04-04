import React from 'react';

export default function BaseRoute() {
  return (
    <React.Suspense>
      <Routes>
        <Route index element={<ChapterTwo />} />
        <Route path='home' element={<Home />} />
      </Routes>
    </React.Suspense>
  );
}
