import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [btn, setBtn] = useState("❌");
  const [active, setActive] = useState(null);

  function handleActive(e) {
    setActive(e.target.id);
  }

  function handleClick(btn) {
    setBtn(btn);
  }

  return (
    <>
      <button
        className="close"
        onClick={() =>
          setIsOpen((is) => !is) | handleClick(btn !== "❌" ? "❌" : "Back")
        }
      >
        {btn}
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div id={1} className={step >= 1 ? "active" : ""}>
              1
            </div>
            <div id={2} className={step >= 2 ? "active" : ""}>
              2
            </div>
            <div id={3} className={step >= 3 ? "active" : ""}>
              3
            </div>
            <div
              id="4"
              onClick={handleActive}
              className={`${active === "4" ? "active" : ""}`}
            >
              4
            </div>
            <div
              id={5}
              onClick={handleActive}
              className={`${active === "5" ? "active" : ""}`}
            >
              5
            </div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => setStep((s) => Math.max(s - 1, 1))}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => setStep((s) => Math.min(s + 1, 3))}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
