import React, { useEffect, useState } from 'react'

const Greetings = () => {
  const [greeting, setGreeting] = useState('')

  useEffect(() => { 
    fetch('http://localhost:3000')
      .then(response => response.text())
      .then(data => setGreeting(data))
  }, [])

  return (
    <div>
      <h1>{greeting}</h1> 
      <style jsx>{`
        h1 {
          color: lightseagreen;
        }
      `}</style>
    </div>
  )
}

export default Greetings