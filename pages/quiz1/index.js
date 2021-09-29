
import Question from './question';
import { useReducer } from 'react';

const correctAnswers = {
  question0: 0,
  question1: 1,
  question2: 2,
  question3: 3,

}
const reducerInitialState = {
  currentQuestion: 0,
  question0: null,
  question1: null,
  question2: null,
  question3: null,
}

function formReducer(state, action) {
  switch (action.type) {
    case 'answerSelected':
      console.log(state, action);
      return state;
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
        <Question formState={state} dispatcher={dispatch}/>
    
      </div>
    </div>

  </div>
    )
}
