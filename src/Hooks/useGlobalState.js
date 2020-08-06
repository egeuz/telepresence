import { useReducer } from 'react'

const initialState = {
  headerOpen: true,
  menuOpen: false,
  projectsViewMode: "category",
  currentCategory: "",
  projects: ""
}

const globalStateReducer = (state, action) => {
  switch (action.type) {
    case 'toggle-header':
      return { ...state, headerOpen: !state.headerOpen }
    case 'toggle-menu':
      return { ...state, menuOpen: !state.menuOpen }
    case 'toggle-projects-view-mode':
      return { ...state, projectsViewMode: action.viewMode }
    case 'set-current-category':
      return {...state, currentCategory: action.category }
    case 'set-project-list':
      return {...state, projects: action.projects}
    default:
      return state
  }
}

function useGlobalState() {
  const [state, dispatch] = useReducer(globalStateReducer, initialState);
  return { state, dispatch }
}

export default useGlobalState