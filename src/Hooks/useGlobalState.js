import { useReducer } from 'react'

const initialState = {
  headerOpen: true,
  menuOpen: false,
  projectsViewMode: "category",
  currentCategory: "",
  projects: "",
  currentProject: "",
  events: "",
  dateFilter: "",
  modalEvent: "",
  modalDirectToForm: false
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
      return { ...state, currentCategory: action.category }
    case 'set-project-list':
      return { ...state, projects: action.projects }
    case 'set-current-project':
      return { ...state, currentProject: action.project }
    case 'set-event-list':
      return { ...state, events: action.events }
    case 'set-date-filter':
      return { ...state, dateFilter: action.filter }
    case 'set-modal-event':
      return { ...state, modalEvent: action.event, modalDirectToForm: action.directToForm }
    default:
      return state
  }
}

function useGlobalState() {
  const [state, dispatch] = useReducer(globalStateReducer, initialState);
  return { state, dispatch }
}

export default useGlobalState