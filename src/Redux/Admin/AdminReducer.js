const initialState = {
  showMoreEvent: {},
  eventHeroImage:{},
  currentUser: null,
  previousPath:"/"
};

const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EVENT": {
      return state
    }
          case "ADD_EVENT_ERROR": {
      return state
    }
    case "EVENT_HEROIMAGE": return {
      ...state,
      eventHeroImage: action.payload
    }
      case "CURRENT_USER": return {
        ...state,
        currentUser: action.payload,
    };
    case "PREV_PATH": return {
      ...state,
      previousPath:action.payload
    };
    default:
      return state;
  }
};

export default AdminReducer;
