import Habit from '../models/userHabit';

export const DELETE_HABIT = 'DELETE_HABIT';
export const CREATE_HABIT = 'CREATE_HABIT';
export const UDPATE_HABIT = 'UDPATE_HABIT';

export const deleteHabit = habitId => {
  return {type: DELETE_HABIT, hid: habitId};
};

export const createHabit = (name, userId, categoryId, date, reminder, logs) => {
  return {
    type: CREATE_HABIT,
    habitData: {
      name: name,
      userId: userId,
      categoryId: categoryId,
      date: date,
      reminder: reminder,
      logs: logs,
    },
  };
};

export const updateHabit = (habitId, name, categoryId, reminder, logs) => {
  return {
    type: UDPATE_HABIT,
    habitId: habitId,
    habitData: {
      name: name,
      categoryId: categoryId,
      reminder: reminder,
      logs: logs,
    },
  };
};
