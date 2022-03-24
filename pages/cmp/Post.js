import React from 'react'

export default function Post({title, text, name}) {
  return (
    <div class="card text-dark bg-light d-flex flex-row">
      <div class="card-body">
        <h4 class="card-title">{title}</h4>
        <p class="card-text">Text</p>
      </div>
      {/* <div className='px-4'>
        <a className='btn btn-link'>Edit</a>
        <a className='btn btn-link'>Delete</a>
      </div> */}
    </div>
  )
}
