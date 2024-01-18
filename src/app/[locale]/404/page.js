import React from 'react'
import './style.css'
import Link from 'next/link'

function FourOFour() {
  return (
    <div class="flex-container">
    <div class="text-center">
      <h1>
        <span class="fade-in" id="digit1">4</span>
        <span class="fade-in" id="digit2">0</span>
        <span class="fade-in" id="digit3">4</span>
      </h1>
      <h3 class="fadeIn">PAGE NOT FOUND</h3>
      <Link  href='/' type="button" name="button">Return To Home</Link>
    </div>
  </div>
  )
}

export default FourOFour