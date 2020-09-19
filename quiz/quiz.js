import Question from './question.js'

class Quiz {
  constructor(amount, questions) {
    this.totalAmount = amount;
    this.answeredAmount = 0;
    this.questions = this.setQuestions(questions);
    this.nextButton = document.querySelector('#next');
    this.nextButton.addEventListener('click', this.nextQuestion.bind(this));
    this.renderQuestion();
  }

  setQuestions(questions) {
    return questions.map(question => new Question(question));
  }

  renderQuestion() {
    this.questions[this.answeredAmount].render();
  }

  nextQuestion() {
    this.questions[this.answeredAmount].answer();
    this.answeredAmount++;
    this.renderQuestion();
  }
}

export default Quiz;