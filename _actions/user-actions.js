import { actionTypes } from '../_constants';
import { userService } from '../_services';

export const userActions = {
  register,
  login,
  getInfo,
  uploadImage
};

function register(email, password, firstName, lastName) {
  return dispatch => {
    dispatch(request({ email: email }));

    userService.register(email, password, firstName, lastName)
      .then(function(user) {
        dispatch(success(user));
      })
      .catch(function(error) {
        dispatch(failure(error));
      });
  };

  function request(email) {
    return { type: actionTypes.REGISTER_REQUEST, email }
  }
  function success(token) {
    return { type: actionTypes.REGISTER_SUCCESS, user }
  }
  function failure(error) {
    return { type: actionTypes.REGISTER_FAILURE, error }
  }
}

function login(email, password) {
  return dispatch => {
    dispatch(request({ email: email }));

    userService.login(email, password)
      .then(function(user) {
        dispatch(success(user));
      })
      .catch(function(error) {
        dispatch(failure(error));
      });
  };

  function request(email) {
    return { type: actionTypes.LOGIN_REQUEST, email }
  }
  function success(token) {
    return { type: actionTypes.LOGIN_SUCCESS, user }
  }
  function failure(error) {
    return { type: actionTypes.LOGIN_FAILURE, error }
  }
}

function uploadImage(image) {

}
