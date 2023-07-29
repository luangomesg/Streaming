import React, { useState, useEffect } from 'react'

import Netflix from '../../assets/Netflix.png'
import Profile from '../../assets/profile.png'
import { Header } from './styles.js'

function MyHeader () {
  const [scrollDown, setScrollDown] = useState(false)

  function getMouse () {
    const mouseY = window.scrollY
    const scrollChange = 100

    setScrollDown(mouseY > scrollChange)
  }

  useEffect(() => {
    document.addEventListener('scroll', getMouse)

    return () => {
      document.removeEventListener('scroll', getMouse)
    }
  }, [])
  return (
        <Header change={scrollDown}>
            <img src={Netflix}/>
            <img src={Profile}/>
        </Header>
  )
}

export default MyHeader
