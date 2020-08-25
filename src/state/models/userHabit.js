class UserHabit {
  constructor(id, userId, categoryId, name, date, reminder, logs) {
    this.id = id;
    this.userId = userId;
    this.categoryId = categoryId;
    this.name = name;
    this.date = date;
    this.reminder = reminder;
    // this.status = status;
    this.logs = logs;
  }
}

export default UserHabit;
