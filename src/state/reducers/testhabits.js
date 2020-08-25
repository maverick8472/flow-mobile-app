import HABITS from '../data/habits';

const initialState = {
  habits: HABITS,
};

export default (state = initialState, action) => {
  //   switch (action.type) {
  //     case SET_HABITS:
  //       return {
  //         habits: action.habits,
  //       };
  //   }
  return state;
};
