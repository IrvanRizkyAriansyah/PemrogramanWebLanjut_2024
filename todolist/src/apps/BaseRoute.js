import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Todo from '../modules/todo';
import InputUI from '../modules/todo/InputUI';

export default function BaseRoute() {
  return (
    <React.Suspense>
      <Routes>
        <Route index element={<Todo />} />
        <Route path='input' element={<InputUI />} />
      </Routes>
    </React.Suspense>
  );
}
