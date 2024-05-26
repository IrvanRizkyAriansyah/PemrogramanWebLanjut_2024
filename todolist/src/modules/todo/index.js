import React from 'react';
import Search from './widgets/components/Search';
import ListUI from './ListUI';
import InputUI from './InputUI';

export default function Todo() {
  return (
    <div className='container'>
      <h1 className='text-center fw-bold my-3'>Todo Search</h1>
      <Search />
      <h1 className='text-center fw-bold my-3'>Todo List</h1>
      <ListUI />
      <h1 className='text-center fw-bold my-3'>Todo Input</h1>
      <InputUI />
    </div>
  );
}
