import React from 'react';

export default function Search() {
  return (
    <div className='border container p-3'>
      <input className='mb-3 w-50' />
      <div className='d-flex w-100 justify-content-between '>
        <button className='btn btn-primary w-50'>Search</button>
        <button className='btn btn-primary w-25'>Add New Task</button>
      </div>
    </div>
  );
}
