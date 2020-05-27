const initialState = {
  authError: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return { ...state, authError: null };

    case 'LOGIN_FAIL':
      console.log('login fail');
      return { ...state, authError: payload };

    case 'SIGNOUT_SUCCESS':
      console.log('logout');
      return state;

    case 'SIGNUP_SUCCESS':
      console.log('user created');
      return { ...state, authError: null };

    case 'SIGNUP_FAIL':
      console.log('signup failed', payload);
      return { ...state, authError: payload };
    default:
      return state;
  }
};
