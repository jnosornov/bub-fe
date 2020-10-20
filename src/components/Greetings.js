import React, { useEffect, useState } from 'react'
import Heading from './atoms/Heading'

const Greetings = () => {
  const [greeting, setGreeting] = useState('')

  useEffect(() => { 
    fetch('http://localhost:3000')
      .then(response => response.text())
      .then(data => setGreeting(data))
  }, [])

  return (
    <div>
      <Heading>{"Hello World" || greeting}</Heading> 
    </div>
  )
}

export default Greetings