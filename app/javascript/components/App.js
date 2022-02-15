import React from "react"
import { Provider } from 'react-redux';
import store from '../redux/configureStore'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Greeting from './Greeting';

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/">
              <Route index element={<Greeting />} />
            </Route>
          </Routes>
        </Router>
      </Provider>
    );
  }
}

export default App
