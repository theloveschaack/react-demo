import { actionTypes } from '../_constants';

export function user(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST: {
      return {
        loggingIn: true,
        email: action.email
      };
    }

    case actionTypes.LOGIN_SUCCESS: {
      return {
        loggedIn: true,
        user: action.user
      };
    }

    case actionTypes.LOGIN_FAILURE: {
      return {};
    }

    case actionTypes.REGISTER_REQUEST: {
      return {
        loading: true
      };
    }

    case actionTypes.REGISTER_SUCCESS: {
      return {};
    }

    case actionTypes.REGISTER_FAILURE: {
      return {};
    }

    default: {
      return state
    }
  }
}
