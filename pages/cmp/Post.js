import React from 'react'

export default function Post({title, text, name}) {
  return (
    <div class="card text-dark bg-light">
      {/* <img class="card-img-top" src="holder.js/100px180/" alt=""> */}
      <div class="card-body">
        <h4 class="card-title">{title}</h4>
        <p class="card-text">Text</p>
      </div>
    </div>
  )
}
