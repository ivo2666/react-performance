import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({title, link, href}) {
  return (
    <div style={{display:"flex", justifyContent: 'space-between', alignItems: 'center', fontSize: "22px", fontFamily: "sans-serif"}}>
          <h1>{title}</h1>
          <div>
              <Link to={href}>{link}</Link>
          </div>
          </div>
  )
}
