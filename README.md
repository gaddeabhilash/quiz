# Quiz Application

A modern, interactive browser-based quiz application built with React and Vite. Features immediate feedback, score tracking, timed questions, and a comprehensive results review.

## Features

✅ **Interactive Quiz Experience**
- Clean, intuitive user interface
- Multiple-choice questions with immediate feedback
- Answer buttons turn red/green based on correctness
- Displays correct answer when user selects wrong option

✅ **Score Tracking**
- Real-time score counter
- Final results with percentage calculation
- Performance feedback message

✅ **Timed Questions**
- 60-second timer for each question
- Visual timer with color warnings (yellow at 10s, red at 5s)
- Auto-skip to next question if time runs out
- Score penalty for timed-out questions

✅ **Results Review**
- Complete quiz results with all questions and answers
- Shows user's answer vs correct answer
- Identifies timed-out questions
- Performance rating (Perfect, Excellent, Good, etc.)

✅ **User-Friendly Design**
- Beautiful gradient backgrounds
- Smooth animations and transitions
- Responsive design for mobile and desktop
- Clear progress indicators

## Project Structure

```
quiz/
├── src/
│   ├── components/
│   │   ├── StartScreen.jsx        # Welcome screen with quiz info
│   │   ├── QuestionCard.jsx       # Question display and answer selection
│   │   └── ResultsScreen.jsx      # Final results and review
│   ├── data/
│   │   └── quiz.json              # Quiz questions and answers
│   ├── App.jsx                    # Main app component
│   ├── App.css                    # Global styles
│   └── main.jsx                   # React entry point
├── index.html                     # HTML entry point
├── vite.config.js                 # Vite configuration
├── package.json                   # Dependencies and scripts
└── README.md                      # This file
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd quiz
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will automatically open in your browser at `http://localhost:3000`.

### Building for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## How to Use

1. **Start Screen**: Click the "Start Quiz" button to begin
2. **Questions**: 
   - Read the question carefully
   - You have 60 seconds to answer
   - Click an answer button to submit your response
3. **Feedback**: 
   - Correct answers turn green with a ✓ checkmark
   - Incorrect answers turn red with an ✗ mark
   - The correct answer is always highlighted
   - Brief feedback message displays after each question
4. **Results**:
   - View your final score and percentage
   - Review all questions with your answers and correct answers
   - Click "Retake Quiz" to try again

## Customizing the Quiz

To change the quiz questions, edit `/src/data/quiz.json`:

```json
{
  "title": "Your Quiz Title",
  "description": "Quiz description and instructions",
  "questions": [
    {
      "id": 1,
      "question": "Question text here?",
      "answers": [
        "Answer option 1",
        "Answer option 2",
        "Answer option 3",
        "Answer option 4"
      ],
      "correctAnswer": 0  // Index of the correct answer (0-3)
    }
  ]
}
```

## Features Explanation

### Timer System
- Each question has a 60-second countdown timer
- Timer displays in the top right with visual warnings
- Orange warning when 10 seconds remain
- Red critical state when 5 seconds remain
- Auto-skips to next question when time expires
- Score penalty: -1 point for skipped questions

### Answer Feedback
- Immediate visual feedback (green/red) when answer is selected
- Correct answer always highlighted in green
- Wrong answer highlighted in red with "✗ Wrong" badge
- Correct answer shows "✓ Correct" badge
- Additional text feedback below the answers

### Results Display
- Comprehensive review of all questions answered
- Shows user's answer and correct answer side-by-side
- Marks timed-out questions with "⏱ Timed Out" badge
- Performance rating based on percentage
- Retake quiz functionality

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features (gradients, animations)
- **JavaScript ES6+** - Modern JavaScript

## Styling

The application uses a custom CSS stylesheet with:
- CSS custom properties (variables) for theming
- Responsive design with media queries
- Smooth animations and transitions
- Color scheme with accessible contrasts
- Mobile-friendly layout

## Performance Optimizations

- Lightweight build size with Vite
- Efficient state management with React hooks
- CSS animations for smooth transitions
- Optimized component structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is open source and available for educational purposes.

## Future Enhancements

Potential improvements:
- Add different difficulty levels
- Multiple quiz categories
- Question randomization
- User authentication and score storage
- Admin panel to create/edit quizzes
- Analytics and performance tracking
- Leaderboard system
- Offline mode with service workers
