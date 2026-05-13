import React, { useState, useEffect } from 'react';
import quizData from './data/quiz.json';
import StartScreen from './components/StartScreen';
import QuestionCard from './components/QuestionCard';
import ResultsScreen from './components/ResultsScreen';
import './App.css';

export default function App() {
  const [screen, setScreen] = useState('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Timer effect
  useEffect(() => {
    if (screen !== 'question' || answered) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleTimeUp();
          return 60;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [screen, answered]);

  const handleStartQuiz = () => {
    setScreen('question');
    setCurrentQuestionIndex(0);
    setScore(0);
    setResults([]);
    setTimeLeft(60);
    setAnswered(false);
    setSelectedAnswer(null);
  };

  const handleTimeUp = () => {
    const result = {
      questionId: quizData.questions[currentQuestionIndex].id,
      question: quizData.questions[currentQuestionIndex].question,
      selectedAnswer: null,
      correctAnswer: quizData.questions[currentQuestionIndex].answers[quizData.questions[currentQuestionIndex].correctAnswer],
      isCorrect: false,
      timedOut: true
    };
    setResults([...results, result]);
    setAnswered(true);

    setTimeout(() => {
      moveToNextQuestion([...results, result], score - 1);
    }, 1500);
  };

  const handleAnswerSelected = (answerIndex) => {
    if (answered) return;

    const question = quizData.questions[currentQuestionIndex];
    const isCorrect = answerIndex === question.correctAnswer;
    const newScore = isCorrect ? score + 1 : score;

    const result = {
      questionId: question.id,
      question: question.question,
      selectedAnswer: question.answers[answerIndex],
      correctAnswer: question.answers[question.correctAnswer],
      isCorrect: isCorrect,
      timedOut: false
    };

    setResults([...results, result]);
    setScore(newScore);
    setSelectedAnswer(answerIndex);
    setAnswered(true);

    setTimeout(() => {
      moveToNextQuestion([...results, result], newScore);
    }, 1500);
  };

  const moveToNextQuestion = (updatedResults, updatedScore) => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(60);
      setAnswered(false);
      setSelectedAnswer(null);
    } else {
      setScreen('results');
      setResults(updatedResults);
      setScore(updatedScore);
    }
  };

  const handleRetakeQuiz = () => {
    setScreen('start');
    setCurrentQuestionIndex(0);
    setScore(0);
    setResults([]);
    setTimeLeft(60);
    setAnswered(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="app-container">
      {screen === 'start' && (
        <StartScreen
          title={quizData.title}
          description={quizData.description}
          questionCount={quizData.questions.length}
          onStart={handleStartQuiz}
        />
      )}

      {screen === 'question' && (
        <QuestionCard
          question={quizData.questions[currentQuestionIndex]}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={quizData.questions.length}
          onAnswerSelected={handleAnswerSelected}
          answered={answered}
          selectedAnswer={selectedAnswer}
          timeLeft={timeLeft}
        />
      )}

      {screen === 'results' && (
        <ResultsScreen
          score={score}
          totalQuestions={quizData.questions.length}
          results={results}
          onRetake={handleRetakeQuiz}
        />
      )}
    </div>
  );
}
