function PrevButton({ dispatch, answer }) {
  if (answer === null) return null;
  return (
    <button
      className="btn btn-uil"
      onClick={() => dispatch({ type: "prevQuestion" })}
    >
      Prev
    </button>
  );
}

export default PrevButton;
