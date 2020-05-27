import React, { useReducer } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

/*** PAGES ***/
import Test from './pages/Test'
import ComingSoon from './pages/ComingSoon'
import Projects from './pages/Projects'
import Events from './pages/Events'
import About from './pages/About'

/*** COMPONENTS ***/
import Header from './components/Header'
import MobileNav from './components/MobileNav'
import Footer from './components/Footer'

export const Context = React.createContext()

const initialState = {
  headerOpen: true,
  menuOpen: false,
  scrollDirection: 'up',
  scrollPosition: window.scrollY
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'set-scroll-direction':
      return { ...state, scrollDirection: action.direction }
    case 'set-scroll-position':
      return { ...state, scrollPosition: action.position }
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

  // const [position, setScrollPosition] = useState(window.scrollY);
  // const [direction, setScrollDirection] = useState("up");

  // const handleScroll = () => {
  //   setScrollPosition(prevPosition => {
  //     const position = window.scrollY
  //     const direction = (prevPosition > position) ? "up" :
  //       (prevPosition < position) ? "down" : prevPosition
  //     setScrollDirection(direction) //set the scroll direction
  //     return window.scrollY; //set the scroll position
  //   });

  //   dispatch({ type: 'set-scroll-position', position })
  //   dispatch({ type: 'set-scroll-direction', direction })
  // }


  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll)
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll)
  //   }
  // }, [])


  // console.log(state.scrollPosition);

  return (
    <div id="main">
      <Context.Provider value={{ state, dispatch }}>
        <Router>
          {state.headerOpen && <MobileNav />}
          {state.headerOpen && <Header />}
          <Switch>
            <Route path="/" exact component={ComingSoon} />
            <Route path="/test" exact component={Test} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/events" exact component={Events} />
            <Route path="/about" exact component={About} />
          </Switch>
          {state.headerOpen && <Footer />}
        </Router>
      </Context.Provider>
    </div>
  )
}

export default App
