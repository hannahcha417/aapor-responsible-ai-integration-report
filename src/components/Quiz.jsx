import { useState } from "react";
import quizData from "../data/quiz.json";
import "./Quiz.css";

function Quiz({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (questionId, answer) => {
    const updated = { ...answers, [questionId]: answer };
    setAnswers(updated);

    if (currentStep < quizData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate which sections to highlight
      const highlighted = new Set();
      quizData.forEach((q) => {
        const ans = updated[q.id];
        if (ans === "no" && q.sectionsIfNo) {
          q.sectionsIfNo.forEach((s) => highlighted.add(s));
        }
        if (ans === "yes" && q.sectionsIfYes) {
          q.sectionsIfYes.forEach((s) => highlighted.add(s));
        }
      });
      setFinished(true);
      onComplete(Array.from(highlighted));
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setAnswers({});
    setStarted(false);
    setFinished(false);
    onComplete(null);
  };

  if (!started) {
    return (
      <div className="quiz-banner">
        <div className="quiz-banner-content">
          <span className="quiz-icon">📋</span>
          <div>
            <strong>Short on time?</strong> Answer a few quick questions and
            we'll highlight the sections most relevant to you.
          </div>
          <button className="quiz-start-btn" onClick={() => setStarted(true)}>
            Guide Me
          </button>
        </div>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="quiz-banner quiz-banner--done">
        <div className="quiz-banner-content">
          <span className="quiz-icon">✅</span>
          <div>
            Done! We've highlighted and expanded the sections you should read.
          </div>
          <button className="quiz-reset-btn" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }

  const q = quizData[currentStep];

  return (
    <div className="quiz-modal">
      <div className="quiz-card">
        <div className="quiz-progress">
          Question {currentStep + 1} of {quizData.length}
        </div>
        <p className="quiz-question">{q.question}</p>
        <div className="quiz-actions">
          <button
            className="quiz-btn quiz-btn--yes"
            onClick={() => handleAnswer(q.id, "yes")}
          >
            {q.yesLabel}
          </button>
          <button
            className="quiz-btn quiz-btn--no"
            onClick={() => handleAnswer(q.id, "no")}
          >
            {q.noLabel}
          </button>
        </div>
        <button className="quiz-skip" onClick={reset}>
          Skip &amp; read everything
        </button>
      </div>
    </div>
  );
}

export default Quiz;
