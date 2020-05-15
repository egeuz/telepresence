import React, { useReducer } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/*** PAGES ***/
import Showroom from './pages/Showroom'
import Events from './pages/Events'
import About from './pages/About'

/*** COMPONENTS ***/
import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer'

export const Context = React.createContext()

const initialState = {
  menuOpen: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'toggle-menu':
      return { ...state, menuOpen: !state.menuOpen }
    case 'open-menu':
      return { ...state, menuOpen: true }
    case 'close-menu':
      return { ...state, menuOpen: false }
    default:
      return state
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div id="main">
      <Context.Provider value={{ state, dispatch }}>
        <Router>
          <Menu />
          <Header />
          <Switch>
            <Route path="/" exact component={Showroom} />
            <Route path="/showroom" exact component={Showroom} />
            <Route path="/events" exact component={Events} />
            <Route path="/about" exact component={About} />
          </Switch>
          {/* <Footer /> */}
        </Router>
      </Context.Provider>
    </div>
  )
}

export default App
