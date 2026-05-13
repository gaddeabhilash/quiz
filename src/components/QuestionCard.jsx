import React from 'react';

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswerSelected,
  answered,
  selectedAnswer,
  timeLeft
}) {
  const correctAnswerIndex = question.correctAnswer;

  const getButtonClass = (answerIndex) => {
    let className = 'answer-btn';

    if (!answered) {
      return className;
    }

    if (answerIndex === correctAnswerIndex) {
      className += ' correct';
    } else if (answerIndex === selectedAnswer) {
      className += ' incorrect';
    } else {
      className += ' disabled';
    }

    return className;
  };

  const getTimerClass = () => {
    let className = 'timer-display';
    if (timeLeft <= 10) {
      className += ' warning';
    }
    if (timeLeft <= 5) {
      className += ' critical';
    }
    return className;
  };

  return (
    <div className="screen question-screen">
      <div className="screen-header">
        <div className="progress-info">
          <span className="progress-text">
            Question {questionNumber} of {totalQuestions}
          </span>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className={getTimerClass()}>
          <span className="timer-label">Time Left:</span>
          <span className="timer-value">{timeLeft}s</span>
        </div>
      </div>

      <div className="question-card">
        <h2 className="question-text">{question.question}</h2>

        <div className="answers-container">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              className={getButtonClass(index)}
              onClick={() => onAnswerSelected(index)}
              disabled={answered}
            >
              <span className="answer-text">{answer}</span>
              {answered && index === correctAnswerIndex && (
                <span className="answer-badge">✓ Correct</span>
              )}
              {answered && index === selectedAnswer && index !== correctAnswerIndex && (
                <span className="answer-badge">✗ Wrong</span>
              )}
            </button>
          ))}
        </div>

        {answered && selectedAnswer !== correctAnswerIndex && (
          <div className="feedback feedback-incorrect">
            <p><strong>Incorrect!</strong> The correct answer is: {question.answers[correctAnswerIndex]}</p>
          </div>
        )}

        {answered && selectedAnswer === correctAnswerIndex && (
          <div className="feedback feedback-correct">
            <p><strong>Correct!</strong> Great job!</p>
          </div>
        )}
      </div>
    </div>
  );
}
