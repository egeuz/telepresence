import React, { useReducer } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

/*** PAGES ***/
import Test from './pages/Test'
import ComingSoon from './pages/ComingSoon'
import Gallery from './pages/Gallery'
import Events from './pages/Events'
import About from './pages/About'

/*** COMPONENTS ***/
import Header from './components/Header'
import MobileNav from './components/MobileNav'
import Footer from './components/Footer'

export const Context = React.createContext()

const initialState = {
  headerOpen: true,
  menuOpen: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'toggle-header':
      return { ...state, headerOpen: !state.headerOpen }
    case 'toggle-menu':
      return { ...state, menuOpen: !state.menuOpen }
    default:
      return state
  }
}

function App(props) {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div id="main">
      <Context.Provider value={{ state, dispatch }}>
        <Router>
          { state.headerOpen && <MobileNav /> }
          { state.headerOpen && <Header /> }
          <Switch>
            <Route path="/" exact component={ComingSoon} />
            <Route path="/gallery" exact component={Gallery} />
            <Route path="/events" exact component={Events} />
            <Route path="/about" exact component={About} />
          </Switch>
          { state.headerOpen && <Footer /> }
        </Router>
      </Context.Provider>
    </div>
  )
}

export default App
