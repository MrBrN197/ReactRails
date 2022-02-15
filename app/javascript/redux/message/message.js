
const SET_MESSAGE = 'rails-react/message/SET_MESSAGE';

// Reducer
const reducer = (state='', action) => {
  switch(action.type) {
    case SET_MESSAGE:
      return action.payload;
    default:
      return state;
  }
}

// Actions 
export const setMessage = () => async (dispatch) => {
  const data = await fetch('/api/messages')
  const json = await data.json();
  console.log('RECIEVED: ', json);

  const message = json.message

  dispatch({
    type: SET_MESSAGE,
    payload: message
  })
}

export default reducer;