import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Homepage from './pages/homepage'

const App = () => {
  return (
    <Switch>
      <Route to='/' component={Homepage} />
    </Switch>
  )
}

export default App
