import React from 'react'
import ReactDOM from "react-dom"

import Greetings from './components/Greetings'
import globalStyles from './shared/global'

const App = () => {
  return (
    <>
      <Greetings />
      <style jsx global>{globalStyles}</style>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))