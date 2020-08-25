import USERSHABITS from '../data/userHabits';
import HABITS from '../data/habits';
import {DELETE_HABIT, UDPATE_HABIT, CREATE_HABIT} from '../actions/userHabits';
import Habit from '../models/userHabit';

export const initialHabitsState = {
  availableHabits: HABITS,
  userHabits: USERSHABITS.filter(habit => habit.userId === '1'),
};

export default (state = initialHabitsState, action) => {
  switch (action.type) {
    case CREATE_HABIT:
      const newHabit = new Habit(
        new Date().toDateString(),
        action.habitData.userId,
        action.habitData.categoryId,
        action.habitData.name,
        action.habitData.date,
        action.habitData.reminder,
        action.habitData.logs,
      );
      return {
        ...state,
        // userProducts: state.userProducts.concat(newProduct),
        userHabits: state.userHabits.concat(newHabit),
      };
    case UDPATE_HABIT:
      const habitIndex = state.userHabits.findIndex(
        habit => habit.id === action.habitId,
      );
      const updatedHabit = new Habit(
        action.habitId,
        state.userHabits[habitIndex].userId,
        action.habitData.categoryId,
        action.habitData.name,
        state.userHabits[habitIndex].date,
        state.userHabits[habitIndex].logs,
      );
      const updatedUserHabits = [...state.userHabits];
      updatedUserHabits[habitIndex] = updatedHabit;
      return {
        ...state,
        userHabits: updatedUserHabits,
      };
    case DELETE_HABIT:
      return {
        ...state,
        userHabits: state.userHabits.filter(
          habit => habit.id !== action.habitId,
        ),
      };
  }
  return state;
};
