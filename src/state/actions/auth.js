import {AsyncStorage} from 'react-native';

// export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';
export const SET_DID_TRY_AL = 'SET_DID_TRY_AL';

let timer;

export const setDidTryAL = () => {
  return {type: SET_DID_TRY_AL};
};

// export const authenticate = (userId, token) => {
//   return dispatch => {
//     dispatch({type: AUTHENTICATE, userId: userId, token: token});
//   };
// };

export const authenticate = (userId, token, expiryTime) => {
  return dispatch => {
    // dispatch(setLogoutTimer(expiryTime));
    dispatch({type: AUTHENTICATE, userId: userId, token: token});
  };
};

export const signUp = (username, email, password) => {
  return async dispatch => {
    const response = await fetch('http://192.168.1.4:3000/api/users/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      const resData = await response.json();
      console.log(resData.message);
    }

    // if (response.ok) {
    //   console.log('User Registered Successfully!');
    // }

    // const resData = await response.json();
    // console.log(resData);

    console.log('User Registered Successfully!');

    const resData = await response.json();
    const token = await response.headers.get('x-auth-token');
    console.log(resData._id, token);

    // dispatch({type: SIGNUP, userId: resData._id, token: token});
    dispatch(authenticate(resData._id, resData.token));
    const experationDate = new Date(new Date().getTime() + 5555 * 1000);
    saveDataToStorage(resData._id, resData.token);
  };
};

export const signIn = (email, password) => {
  return async dispatch => {
    const response = await fetch('http://192.168.1.4:3000/api/users/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      //   throw new Error('Something went wrong!');
      // console.log(resData.message);
      //   const errorResData = await response.json();
      //   console.log(errorResData);
      //   throw new Error(errorResData);
      const resData = await response.json();
      throw new Error(resData.message);
    }

    // if (response.ok) {
    //   console.log('User Loged in Successfully!');
    //   const resData = await response.json();
    //   const token = await response.headers.get('x-auth-token');
    //   console.log(resData._id, token);
    // }

    // const resData = await response.json();
    // console.log(resData);

    console.log('User Loged in Successfully!');
    const resData = await response.json();
    const token = await response.headers.get('x-auth-token');
    console.log(resData._id, token);

    // dispatch({type: SIGNIN, userId: resData._id, token: token});
    dispatch(authenticate(resData._id, resData.token));
    // dispatch({type: AUTHENTICATE, userId: resData._id, token: resData.token});
    const experationDate = new Date(new Date().getTime() + 5555 * 1000);
    saveDataToStorage(resData._id, resData.token);
  };
};

// export const signIn = (email, password) => {
//   return async (dispatch, getState) => {
//     // const tokenn = getState().auth.token;
//     const tokenn =
//       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjQ2NmUxOWQwYmY3NzJlYzgwMzgzM2IiLCJ1c2VybmFtZSI6Im1pbGVuYSIsImlhdCI6MTU5ODUyOTg1Mn0.VEkllpLOceU5pFWPP7F6dSW4DF7J7tLL7NyiLngVeAo';
//     // console.log(tokenn);
//     const response = await fetch('http://192.168.1.4:3000/api/users/me', {
//       method: 'GET',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         'x-auth-token': tokenn,
//       },
//     });

//     if (!response.ok) {
//       //   throw new Error('Something went wrong!');
//       // console.log(resData.message);
//       //   const errorResData = await response.json();
//       //   console.log(errorResData);
//       //   throw new Error(errorResData);
//       const resData = await response.json();
//       throw new Error(resData.message);
//     }

//     // if (response.ok) {
//     //   console.log('User Loged in Successfully!');
//     //   const resData = await response.json();
//     //   const token = await response.headers.get('x-auth-token');
//     //   console.log(resData._id, token);
//     // }

//     // const resData = await response.json();
//     // console.log(resData);

//     console.log('User Loged in Successfully!');
//     const resData = await response.json();
//     console.log(resData);

//     dispatch({type: SIGNIN});
//   };
// };

export const logout = () => {
  AsyncStorage.removeItem('userData');
  return {type: LOGOUT};
};

const saveDataToStorage = (token, userId) => {
  AsyncStorage.setItem(
    'userData',
    JSON.stringify({
      userId: userId,
      token: token,
    }),
  );
};
