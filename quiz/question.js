class Question {
  constructor(question) {
    this.answers = this.shuffleAnswers([
      question.correct_answer, 
      ...question.incorrect_answers
    ]);
    this.correctAnswer = question.correct_answer;
    this.question = question.question;

    this.questionElement = document.querySelector('#question');
    this.answerElements = [
      document.querySelector('#a1'),
      document.querySelector('#a2'),
      document.querySelector('#a3'),
      document.querySelector('#a4'),
    ];
    this.isCorrect = false;
  }

  shuffleAnswers(answers) {
    for (let i = answers.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = answers[i]
      answers[i] = answers[j]
      answers[j] = temp
    }
    return answers;
  }

  answer(checkedElement) {
     this.isCorrect = (checkedElement[0].textContent === this.correctAnswer) ? true : false;
     console.log(this.isCorrect);
  }

  render() {
    this.questionElement.innerHTML = this.question;
    this.answerElements.forEach((el, index) => {
      el.innerHTML = '<input type="radio" name="radio"><span class="checkmark"></span>' + this.answers[index];
    });
  }
}

export default Question;