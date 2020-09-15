const testURL = 'https://opentdb.com/api.php?amount=1&category=15&difficulty=medium&type=multiple';



const getQuestion = async () => {
  try {
    let response = await fetch(testURL);
    console.log(await response.json());
  } catch (error) {
    console.log(error);
  }
};

getQuestion();

console.log('Hi it works');