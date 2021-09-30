
import Question from './question';
import { useReducer } from 'react';

const reducerInitialState = {
  currentQuestion: 0,
  questions: [
    {
      number: 0,
      text: "abc",
      correctAnswer: 0,
      selectedOption: null,
    },
    {
      number: 1,
      text: "dfe",
      correctAnswer: 1,
      selectedOption: null,
    },
    {
      number: 2,
      text: "fgh",
      correctAnswer: 2,
      selectedOption: null,
    },
    {
      number: 3,
      text: "ijk",
      correctAnswer: 3,
      selectedOption: null,
    }
  ]
}

function formReducer(state, action) {
  switch (action.type) {
    case 'answerSelected':
      const clone = JSON.parse(JSON.stringify(state));
      clone.questions[state.currentQuestion].selectedOption = action.payload
      console.log(clone);
      return clone
    case 'previousButtonClicked':
      console.log(state, action);
      return {...state, currentQuestion: currentQuestion - 1};
    case 'nextButtonClicked':
      console.log(state, action);
      return {...state, currentQuestion: currentQuestion + 1};
    default:
      return state;
  }
}

export default function Quiz1() {
  const [state, dispatch] = useReducer(formReducer, reducerInitialState)
  
  return (
  <div className="container">
    <div className="content-centered">
      <div className="w-layout-grid testimonial-grid">
        <Question 
          question={state.questions[state.currentQuestion]}
          dispatcher={dispatch}
        />
    
      </div>
    </div>

  </div>
    )
}
