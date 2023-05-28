import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrumb({ navs }) {
  return (
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        {navs.map((nav) => (
          <li
            class={`breadcrumb-item ${!nav.link ? 'active' : ''}`}
            aria-current={`${!nav.link ? 'page' : ''}`}
            style={{ fontSize: '.8rem' }}
          >
            {nav.link ? <Link to={nav.link}>{nav.label}</Link> : nav.label}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb
