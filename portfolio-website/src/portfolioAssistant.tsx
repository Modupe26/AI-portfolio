
import { useEffect, useRef, useState } from "react";

const questions = [
  {
    question: "What projects has Modupe worked on?",
    answer:
      "Modupe has worked on Amazon Reviews Classification, a Sensore healthcare dashboard, Sudometrics Computer Vision, a Fuzzy Logic Fuel Injection Controller, and an Animal Charity Database.",
  },
  {
    question: "What programming languages does she use?",
    answer:
      "Her projects demonstrate Python, TypeScript, C#, SQL and MATLAB. She has also worked with React, ASP.NET Core and machine learning libraries.",
  },
  {
    question: "What machine learning experience does she have?",
    answer:
      "Modupe has worked with text classification, TF-IDF, Logistic Regression, Naive Bayes, Support Vector Machines and computer vision techniques.",
  },
  {
    question: "What was her best classification result?",
    answer:
      "Logistic Regression with TF-IDF achieved 78.78% validation accuracy in her Amazon Reviews Classification project.",
  },
];

export default function PortfolioAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const answerRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (selectedQuestion !== null) {
    answerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }
}, [selectedQuestion]);

  return (
    <div className="assistant-container">
      {isOpen && (
        <div className="assistant-window">
          <div className="assistant-header">
            <span>✦ Modupe's Portfolio Assistant</span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close portfolio assistant"
            >
              ×
            </button>
          </div>

          <div className="assistant-body">
            <p className="assistant-message">
              Hi! I'm Modupe's portfolio assistant.
              What would you like to know about her work?
            </p>

            <div className="assistant-questions">
              {questions.map((item, index) => (
                <button
                  key={item.question}
                  type="button"
                 onClick={() => {
  console.log("Question clicked:", index);
  setSelectedQuestion(index);
}}
                >
                  {item.question}
                </button>
              ))}
            </div>

            {selectedQuestion !== null && (
              <div
  ref={answerRef}
  className="assistant-answer"
  aria-live="polite"
>
                <strong>{questions[selectedQuestion].question}</strong>
                <p>{questions[selectedQuestion].answer}</p>
              </div>
            )}
          </div>
        </div>
      )}

      <button
        type="button"
        className="assistant-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close portfolio assistant" : "Open portfolio assistant"}
        aria-expanded={isOpen}
      >
        {isOpen ? "×" : "✦"}
      </button>
    </div>
  );
}
