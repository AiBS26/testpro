import axios from 'axios';
import { GET_USERS } from '../type';

export const getUsersAC = (payload) => ({ type: GET_USERS, payload });

export const getUsersThunk = () => async (dispatch) => {
  axios('http://localhost:3000')
    .then((res) => {
      dispatch(getUsersAC(res.data));
    });
};
