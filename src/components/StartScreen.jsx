import React from 'react';

export default function StartScreen({ title, description, questionCount, onStart }) {
  return (
    <div className="screen start-screen">
      <div className="screen-content">
        <h1 className="screen-title">{title}</h1>
        <div className="quiz-info">
          <p className="quiz-description">{description}</p>
          <div className="quiz-stats">
            <div className="stat">
              <span className="stat-label">Total Questions:</span>
              <span className="stat-value">{questionCount}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Time per Question:</span>
              <span className="stat-value">60 seconds</span>
            </div>
          </div>
        </div>
        <button className="btn btn-primary btn-large" onClick={onStart}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}
