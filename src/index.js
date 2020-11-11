import React from 'react'
import ReactDOM from "react-dom"

import './seed'
import Topic from './pages/topic'
import globalStyles from './shared/global'

const App = () => {
  return (
    <>
      <Topic />
      <style jsx global>{globalStyles}</style>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))