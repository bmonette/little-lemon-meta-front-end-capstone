export const initializeTimes = () => {
    return window.fetchAPI(new Date());
};
  
  export const updateTimes = (state, action) => {
    if (action.type === "dateChange") {
      return window.fetchAPI(new Date(action.date));
    }
    return state;
};
  