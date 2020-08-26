export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
// export const signIn = (email, password) => {
//   return async dispatch => {
//     const response = await fetch('http://192.168.1.4:3000/api/users/login', {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify({
//         email: 'marijana@gmail.com',
//         password: '123456',
//       }),
//     });

//     if (!response.ok) {
//       throw new Error('Something went wrong!');
//       //   console.log('Something went wrong!');
//     //   console.log(response);
//     }

//     const resData = await response.json();
//     console.log(resData);

//     dispatch({type: SIGNUP});
//   };
// };

// export const signUp = (email, password) => {
//   return async dispatch => {
//     const response = await fetch('http://192.168.1.4:3000/api/users/register', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         username: 'svjetlana',
//         email: 'svjetlana@gmail.com',
//         password: '123456',
//       }),
//     });

//     if (!response.ok) {
//       //   throw new Error('Something went wrong!');
//       //   console.log('Something went wrong!');
//       //   console.log(response);
//       const resData = await response.json();
//       console.log(resData.message);
//     }

//     // const resData = await response.json();
//     // console.log(resData);

//     dispatch({type: SIGNUP});
//   };
// };

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
      //   throw new Error('Something went wrong!');
      //   console.log('Something went wrong!');
      //   console.log(response);
      const resData = await response.json();
      console.log(resData.message);
    }

    if (response.ok) {
      console.log('User Registered Successfully!');
    }

    // const resData = await response.json();
    // console.log(resData);

    dispatch({type: SIGNUP});
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
      //   console.log('Something went wrong!');
      //   console.log(response);
      const resData = await response.json();
      console.log(resData.message);
    }

    if (response.ok) {
      console.log('User Loged in Successfully!');
    }

    // const resData = await response.json();
    // console.log(resData);

    dispatch({type: SIGNIN});
  };
};
