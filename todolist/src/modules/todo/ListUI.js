import React from 'react';

export default function ListUI() {
  const ArrList = [
    {
      id: 1,
      todo: 'hashahahahhahaha',
    },
    {
      id: 2,
      todo: 'wkwkwkwkwkwkwk',
    },
    {
      id: 3,
      todo: 'bbbbbbbbbbbbbb',
    },
  ];

  return (
    <div className='container'>
      <div className='d-flex justify-content-center mb-3'>
        <button className='btn btn-primary'>ALL</button>
        <button className='btn btn-primary mx-5'>DONE</button>
        <button className='btn btn-primary'>TODO</button>
      </div>
      {ArrList.map((l) => (
        <div
          className='border rounded-2 p-3 d-flex justify-content-between mb-3'
          key={l.id}
        >
          <div>{l.todo}</div>
          <div className='d-flex'>
            <div>
              <input
                className='form-check-input'
                type='checkbox'
                value=''
                id='flexCheckDefault'
              />
            </div>
            <div className='mx-3'>
              <i class='bi bi-pencil-fill'></i>
            </div>
            <div>
              <i class='bi bi-trash3'></i>
            </div>
          </div>
        </div>
      ))}
      <div className='d-flex justify-content-center '>
        <button className='btn btn-danger me-2'>Delete All</button>
        <button className='btn btn-danger ms-2'>Delete Done</button>
      </div>
    </div>
  );
}
