import React from 'react';

export default function ResultsScreen({ score, totalQuestions, results, onRetake }) {
  const percentage = Math.round((score / totalQuestions) * 100);

  const getPerformanceMessage = () => {
    if (percentage === 100) return 'Perfect Score! Outstanding!';
    if (percentage >= 80) return 'Excellent Work!';
    if (percentage >= 60) return 'Good Job!';
    if (percentage >= 40) return 'Not Bad!';
    return 'Keep Practicing!';
  };

  const getPerformanceColor = () => {
    if (percentage >= 80) return 'success';
    if (percentage >= 60) return 'good';
    if (percentage >= 40) return 'fair';
    return 'poor';
  };

  return (
    <div className="screen results-screen">
      <div className="screen-content results-content">
        <h1 className="screen-title">Quiz Complete!</h1>

        <div className={`score-display ${getPerformanceColor()}`}>
          <div className="score-circle">
            <div className="score-number">{score}</div>
            <div className="score-total">/ {totalQuestions}</div>
          </div>
          <div className="score-percentage">{percentage}%</div>
          <p className="performance-message">{getPerformanceMessage()}</p>
        </div>

        <div className="results-list">
          <h2>Review Your Answers</h2>
          {results.map((result, index) => (
            <div key={index} className={`result-item ${result.isCorrect ? 'correct' : 'incorrect'}`}>
              <div className="result-header">
                <span className="result-number">Question {index + 1}</span>
                <span className={`result-badge ${result.isCorrect ? 'correct' : 'incorrect'}`}>
                  {result.timedOut ? '⏱ Timed Out' : result.isCorrect ? '✓ Correct' : '✗ Incorrect'}
                </span>
              </div>
              <p className="result-question">{result.question}</p>
              <div className="result-answers">
                <div className="result-answer">
                  <span className="answer-label">Your Answer:</span>
                  <span className={`answer-value ${result.timedOut ? 'skipped' : ''}`}>
                    {result.timedOut ? 'Skipped (Timed Out)' : result.selectedAnswer}
                  </span>
                </div>
                {!result.isCorrect && (
                  <div className="result-answer">
                    <span className="answer-label">Correct Answer:</span>
                    <span className="answer-value correct">{result.correctAnswer}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <button className="btn btn-primary btn-large" onClick={onRetake}>
          Retake Quiz
        </button>
      </div>
    </div>
  );
}
