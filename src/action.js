import { GET_USERS, SET_LOADING, ERROR_DATA } from './actionTypes';

export const getUsers = (user) =>
  async dispatch => {
    try {
      dispatch(
        setLoading()
     )
      
      if (user != null) {
        const result = await fetch("https://api.github.com/users/" + user);
        const data = await result.json();

        if (data.message == "Not Found") {
          dispatch({
            type: ERROR_DATA,
          })
        }

        else {
          dispatch({
            type: GET_USERS,
            preload: data
          })
        }
      }
    }

    catch (error) {
      dispatch({
        type: ERROR_DATA,
        preload: error.response.statusText
      })
    }
  }

export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}