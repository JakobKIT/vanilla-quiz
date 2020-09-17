class Settings {
  constructor() {
    this.category = document.querySelector('#category');
    this.difficulty = [
      document.querySelector('#easy'),
      document.querySelector('#medium'),
      document.querySelector('#hard'),
    ];
    this.numberOfQuestions = document.querySelector('#questions');
    this.startButton = document.querySelector('#start');
    this.startButton.addEventListener('click', this.startQuiz.bind(this));
  }

  startQuiz() {
    try {
      const amount = this.getAmount();
      /*
        General: 9
        Animals: 27
        Video Games: 15
        History: 23
        Sports: 21
      */
      const categoryId;
      const url = `https://opentdb.com/api.php?amount=${amount}&category=${categoryId}&difficulty=${difficulty}&type=multiple`;
    } catch (error) {
      alert(error);
    }
  }

  getAmount() {
    const amount = this.numberOfQuestions.value;
    if (this.validate(amount)) {
      return amount;
    }
      throw new Error('ERROR NEEEEEIN!');
  }

  validate(value) {
    // Not negative, not 0 and not over 50
    return (value > 0 && value < 51) ? true : false;
  }
}

export default Settings;