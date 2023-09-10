const initialState = {
    videos: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_VIDEO_SUCCESS':
        return {
            ...state,
            videos: action.payload, // Update the videos array with fetched data
        };
    default:
      return state
  }
}

export default rootReducer;