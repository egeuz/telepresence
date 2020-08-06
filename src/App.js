import React, {useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

/* COMPONENTS */
import Header from './Components/Header'
import MobileNav from './Components/MobileNav'
import Footer from './Components/Footer'

/* PAGES */
import ComingSoon from './Pages/ComingSoon'
import Projects from './Pages/Projects'

/* CMS */
import fetchPageContent from './CMS/fetchPageContent'

/* GLOBAL STATE */
//The state tracking system built on the useReducer hook.
//Check the file below to see what's tracked on the global state 
//and the dispatches the system accepts.
import useGlobalState from './Hooks/useGlobalState'

//using React contexts to share the state globally, 
//making it a proper Global state. 
//Check out documentation on useContext for more info
//on how components can access the context.
export const GlobalState = React.createContext()

function App() {

  const { state, dispatch } = useGlobalState();

  useEffect(() => {
    const setProjectList = (projects) => {
      dispatch({type: "set-project-list", projects})
    }
    fetchPageContent('project', setProjectList);
  }, [dispatch])

  return (
    <React.Fragment>
      <GlobalState.Provider value={{ state, dispatch }}>
        <Router>
          {state.headerOpen && <MobileNav />}
          {state.headerOpen && <Header />}
          <Switch>
            <Route path="/" exact component={ComingSoon} />
            <Route path="/projects" exact component={Projects} />
          </Switch>
          {state.headerOpen && <Footer />}
        </Router>
      </GlobalState.Provider>
    </React.Fragment>
  )
}

export default App
