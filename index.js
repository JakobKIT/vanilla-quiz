const testURL = 'https://opentdb.com/api.php?amount=1&category=15&difficulty=medium&type=multiple';

const question = document.querySelector('#question');
const a1 = document.querySelector('#a1');
const a2 = document.querySelector('#a2');
const a3 = document.querySelector('#a3');
const a4 = document.querySelector('#a4');

const getQuestion = async () => {
  try {
    let response = await fetch(testURL);
    let result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

getQuestion().then(result => {
  console.log(result);
  const quiz = result.results[0];
  let answers = [quiz.correct_answer, ...quiz.incorrect_answers];
  // Shuffle the array (Fisher-Yates Algorithm)
  for (let i = answers.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = answers[i]
    answers[i] = answers[j]
    answers[j] = temp
  }

  a1.innerHTML += answers[0];
  a2.innerHTML += answers[1];
  a3.innerHTML += answers[2];
  a4.innerHTML += answers[3];
  
  question.innerHTML = quiz.question });

console.log('Hi it works');