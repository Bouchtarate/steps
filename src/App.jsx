import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    if (step !== 3) {
      setStep(step + 1);
    }
  };
  const previousStep = () => {
    if (step !== 1) {
      setStep(step - 1);
    }
  };
  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step === 1 ? "active" : ""}`}>1</div>
        <div className={`${step === 2 ? "active" : ""}`}>2</div>
        <div className={`${step === 3 ? "active" : ""}`}>3</div>
      </div>
      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          className={`${step !== 1 ? "btn-style" : ""}`}
          onClick={previousStep}
        >
          Previous
        </button>
        <button
          className={`${step !== 3 ? "btn-style" : ""}`}
          onClick={nextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
}
