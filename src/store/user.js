import { createSlice } from '@reduxjs/toolkit'

// Slice

const initialUser = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null

const slice = createSlice({
  name: 'user',
  initialState: {
    user: initialUser,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload))
    },
    logoutSuccess: (state, action) =>  {
      state.user = null;
      localStorage.removeItem('user')
    },
  },
});

export default slice.reducer

// Actions

const { loginSuccess, logoutSuccess } = slice.actions

export const login = ({ username, password }) => async dispatch => {
  try {
    // await api.post('/api/auth/login/', { username, password })
    dispatch(loginSuccess({username}));
  } catch (e) {
    return console.error(e.message);
  }
}

export const logout = () => async dispatch => {
  try {
    // await api.post('/api/auth/logout/')
    return dispatch(logoutSuccess())
  } catch (e) {
    return console.error(e.message);
  }
}
