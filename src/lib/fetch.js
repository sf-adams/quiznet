async function fetchQuestions() {
  try {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const questions = await response.json();
    return questions.results;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default fetchQuestions;