import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

/* COMPONENTS */
import Header from './Components/Header'
import MobileNav from './Components/MobileNav'
import Footer from './Components/Footer'

/* PAGES */
import ComingSoon from './Pages/ComingSoon'
import Projects from './Pages/Projects'
import Project from './Pages/Project'
import About from './Pages/About'
import Events from './Pages/Events'

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
        const projectID = project.data.title[0].text.toLowerCase(0).replace(/[.,/#!$%^&?*;:{}=\-_`~()]/g, "").replace(/ /g, '_')
        project.data.projectID = projectID;
        //make an additonal name-based ID by removing all spaces and punctuation from the names, used as an alternative URL slug
        const nameID = project.data.authors.map(author => 
          (author.first_name[0].text + " " + author.last_name[0].text)
            .replace(/ /g, "_")
            .toLowerCase()
          ).reduce((acc, val) => acc + "_" + val);
          project.data.nameID = nameID;
      })

      //sort projects alphabetically
      projects = projects.sort((a, b) =>
        b.data.authors[0].last_name[0].text < a.data.authors[0].last_name[0].text ? 1 : -1)

      dispatch({ type: "set-project-list", projects })
    }

    const setEventList = events => {
      dispatch({ type: "set-event-list", events })
    }

    fetchPageContent('project', setProjectList);
    fetchPageContent('event', setEventList);
  }, [dispatch])

  return (
    <React.Fragment>
      <GlobalState.Provider value={{ state, dispatch }}>
        <Router>
          {/* state.headerOpen && <MobileNav /> */}
          {/* state.headerOpen && <Header /> */}
          <MobileNav />
          <Header mode={!state.headerOpen && "simple"} />
          <Switch>
            <Route path="/" exact component={ComingSoon} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/project/:projectID" exact component={Project} />
            <Route path="/events" exact component={Events} />
            <Route path="/about" exact component={About} />
            <Route path="/comingsoon" exact component={ComingSoon} />
          </Switch>
          {state.headerOpen && <Footer />}
        </Router>
      </GlobalState.Provider>
    </React.Fragment>
  )
}

export default App
