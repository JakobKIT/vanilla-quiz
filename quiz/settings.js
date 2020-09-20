import Quiz from './quiz.js';

class Settings {
  constructor() {
    this.quizElement = document.querySelector('.quiz');
    this.settingsElement = document.querySelector('.settings');
    this.category = document.querySelector('#category');
    this.numberOfQuestions = document.querySelector('#questions');
    this.difficulty = [
      document.querySelector('#easy'),
      document.querySelector('#medium'),
      document.querySelector('#hard'),
    ];
    this.startButton = document.querySelector('#start');

    this.quiz = { };

    this.startButton.addEventListener('click', this.startQuiz.bind(this));
  }

  async startQuiz() {
    try {
      const amount = this.getAmount();
      const categoryId = this.category.value;
      const difficulty = this.getCurrentDifficulty();

      this.url = `https://opentdb.com/api.php?amount=${amount}&category=${categoryId}&difficulty=${difficulty}&type=multiple`;

      let data = await this.fetchData();
      this.toggleVisibility();
      this.quiz = new Quiz(this.quizElement, amount, data.results);
    } catch (error) {
      alert(error);
    }
  }

  toggleVisibility() {
    this.settingsElement.style.visibility = 'hidden';
    this.quizElement.style.visibility = 'visible';
  }

  async fetchData() {
    const response = await fetch(this.url);
    const result = await response.json();

    return result;
  }

  getCurrentDifficulty() {
    const checkedDifficulty = this.difficulty.filter(element => element.checked);

    if (checkedDifficulty.length === 1) {
      return checkedDifficulty[0].id;
    } else {
      throw new Error('Please select a difficulty!');
    }
  }

  getAmount() {
    const amount = this.numberOfQuestions.value;
    // Not negative, not 0 and not over 50
    if (amount > 0 && amount < 51) {
      return amount;
    }
    throw new Error('Please enter a number of questions between 1 and 50!');
  }
}

export default Settings;