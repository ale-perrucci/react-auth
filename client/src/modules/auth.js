import axios from 'axios';

// Actions
const FETCH_USER_START = 'auth/FETCH_USER_START';
const FETCH_USER_SUCCESS = 'auth/FETCH_USER_SUCCESS';
const FETCH_USER_FAILED = 'auth/FETCH_USER_FAILED';

const initialState = {
  loading: false,
  user: null,
  error: ''
}

// Reducer
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_START:
      return {...state, loading: true, user: null, error: ''}
    case FETCH_USER_SUCCESS:
      return {...state, loading: false, user: action.payload}
    case FETCH_USER_SUCCESS:
      return {...state, loading: false, error: action.payload}
    default:
      return state;
  }
};


// Action Creators
export const fetchUser = () => async dispatch => {
  try {
    dispatch({ type: FETCH_USER_START });
    const { data } = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_USER_FAILED, payload: error });
  }

};