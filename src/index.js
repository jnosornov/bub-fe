import React from 'react'
import ReactDOM from "react-dom"

import Greetings from './components/Greetings'
import Main from './pages/Main'
import globalStyles from './shared/global'

const App = () => {
  return (
    <>
      <Main />
      <style jsx global>{globalStyles}</style>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))