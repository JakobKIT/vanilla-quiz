const testURL = 'https://opentdb.com/api.php?amount=1&category=15&difficulty=medium&type=multiple';

const quiz = document.querySelector('#question');

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
  quiz.innerHTML = result.results[0].question});

console.log('Hi it works');