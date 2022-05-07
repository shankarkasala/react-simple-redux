import { REQUEST, SUCCESS, FAIL } from './Actiontype';
import axios from 'axios';
export const fetchUsersRequest = () => {
  return {
    type: REQUEST,
  };
};
export const fetchUsersSuccess = (users) => {
  return {
    type: SUCCESS,
    data: users,
  };
};
export const fetchUsersFail = (error) => {
  return {
    type: FAIL,
    data: error,
  };
};
export const fetchUsers = () => {
  return function(dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        let users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch(error => {
        dispatch(fetchUsersFail(error));
      });
  };
};
