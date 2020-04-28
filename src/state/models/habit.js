class Habit {
  constructor(
    id,
    name,
    imageUrl,
    category,
    dificulty,
    daysToForm,
    instructions,
  ) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.category = category;
    this.dificulty = dificulty;
    this.daysToForm = daysToForm;
    this.instructions = instructions;
  }
}

export default Habit;
