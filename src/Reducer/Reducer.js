import { REQUEST, SUCCESS, FAIL } from '../Actions/Actiontype';
const initialState = {
  users: [],
  error: '',
  isLoading: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return { ...state, isLoading: true };
    case SUCCESS:
      return { isLoading: false, users: action.data, error: '' };
    case FAIL:
      return { isLoading: false, users: [], error: action.data };
    default:
      return state;
  }
};
export default reducer;
