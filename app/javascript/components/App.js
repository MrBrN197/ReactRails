import React from "react"
import PropTypes from "prop-types"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Greeting from './Greeting';

class App extends React.Component {
  render () {
    return (
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Greeting />} />
          </Route>
        </Routes>
      </Router>
    );
  }
}

export default App
