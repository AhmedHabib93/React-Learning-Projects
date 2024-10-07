import { useQuiz } from "../context/QuizContext";

function StartScreen() {
  const { numqQuestions, dispatch } = useQuiz();

  return (
    <div className="start">
      <h2>Welcome to React Quiz!</h2>
      <h3>{numqQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Lets Start
      </button>
    </div>
  );
}

export default StartScreen;
