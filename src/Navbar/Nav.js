import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import './Nav.css'

export default function Nav() {
  return (
    <>
    <div id='main'>
        <article>
            <Logo/>
            <Menu/>
        </article>
    </div>
    {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="www.google.com">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="www.google.com">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="www.google.com">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="www.google.com">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="www.google.com" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
    </>
  )
}
