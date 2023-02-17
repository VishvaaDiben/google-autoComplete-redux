const initState = {
    items: [],
    loading: false,
    error: null,
    searchItems:[]
  };

  export const getMapReducer = (state = initState, action) => {
    switch (action.type) {
      case "LOAD_MAP_REQUEST":
        return {
          ...state,
          loading: true,
          error: null,
        };
      case "LOAD_MAP_SUCCESS":
        return {
          ...state,
          loading: false,
          items: action.payload,
        };
      case "LOAD_MAP_FAILURE":
        return {
          ...state,
          loading: false,
          error: action.error,
        };
  
      default:
        return state;
    }
  };

  export const autoCompleteReducer = (state = initState, action) => {
    switch (action.type) {
      case "AUTO_PLACES_REQUEST":
        return {
          ...state,
          loading: true,
          error: null,
        };
      case "AUTO_PLACES_SUCCESS":
        return {
          ...state,
          loading: false,
          items: action.payload,
        };
      case "AUTO_PLACES_FAILURE":
        return {
          ...state,
          loading: false,
          error: action.error,
        };
  
      default:
        return state;
    }
  };