import React, {useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

/* COMPONENTS */
import Header from './Components/Header'
import MobileNav from './Components/MobileNav'
import Footer from './Components/Footer'

/* PAGES */
import ComingSoon from './Pages/ComingSoon'
import Projects from './Pages/Projects'
import Project from './Pages/Project'

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
      projects.forEach(project => {
        //make a url slug by removing all spaces and punctuation from the title
        const id = project.data.title[0].text.toLowerCase(0).replace(/[.,/#!$%^&?*;:{}=\-_`~()]/g,"").replace(/ /g, '_')
        project.data.id = id;
      })

      //sort projects alphabetically manually because for some reason the CMS API's sort doesn't work
      projects = projects.sort((a, b) =>
      b.data.authors[0].last_name[0].text < a.data.authors[0].last_name[0].text ? 1 : -1)

      dispatch({ type: "set-project-list", projects })
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
            <Route path="/project/:projectID" exact component={Project} />
          </Switch>
          {state.headerOpen && <Footer />}
        </Router>
      </GlobalState.Provider>
    </React.Fragment>
  )
}

export default App
