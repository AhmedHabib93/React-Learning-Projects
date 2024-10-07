import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
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
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button
              color="#fff"
              bgColor="#7950f2"
              onClick={() => setStep((s) => Math.max(s - 1, 1))}
            >
              👈🏻 Previous
            </Button>
            <Button
              color="#fff"
              bgColor="#7950f2"
              onClick={() => setStep((s) => Math.min(s + 1, 3))}
            >
              Next 👉🏻
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <p className="message">
      Step {step}
      {children}
    </p>
  );
}

function Button({ color, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
