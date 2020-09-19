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
    const checkedElement = this.questions[this.answeredAmount].answerElements.filter(el => el.firstChild.checked);
    if (checkedElement.length === 0) {
      alert('You need to select an answer');
    } else {
      this.questions[this.answeredAmount].answer(checkedElement)
      this.answeredAmount++;
      this.renderQuestion();
    }
  }
}

export default Quiz;