const initialState = {
  showMoreEvent: {},
  eventHeroImage:{}
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
    default:
      return state;
  }
};

export default AdminReducer;
