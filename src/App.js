import React, { useReducer } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/*** PAGES ***/
import Test from './pages/Test';
import Gallery from './pages/Gallery'
import Events from './pages/Events'
import About from './pages/About'

/*** COMPONENTS ***/
import Header from './components/Header'
import MobileNav from './components/MobileNav'
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
          <MobileNav />
          <Header />
          <Switch>
            <Route path="/" exact component={Test} />
            <Route path="/gallery" exact component={Gallery} />
            <Route path="/events" exact component={Events} />
            <Route path="/about" exact component={About} />
          </Switch>
          <Footer />
        </Router>
      </Context.Provider>
    </div>
  )
}

export default App
