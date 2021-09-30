import React, {Component} from 'react';
import Question from '../../components/quiz/question/question';
import Answer from '../../components/quiz/answer/answer';
import styles from '../../components/quiz/quiz.module.css'

export default class Quiz1 extends Component {

  // initiating the local state
  state = {
    questions: {
      1: 'What US city is known as the "birthplace of jazz"?',
      2: 'What is the capital of Greece?',
      3: 'What planet gave birth to Superman?'
    },
    answers: {
      1: {
        1: 'Chicago',
        2: 'New Orleans',
        3: 'New York'
      },
      2: {
        1: 'Athens',
        2: 'Patras',
        3: 'Kalamata'
      },
      3: {
        1: 'Krypton',
        2: 'Mars',
        3: 'Saturn'
      }
    },
    correctAnswers: {
      1: '2',
      2: '1',
      3: '1'
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0
  }

  // the method that checks the correct answer
  checkAnswer = answer => {
    const { correctAnswers, step, score } = this.state;
    if(answer === correctAnswers[step]){
      this.setState({
        score: score + 1,
        correctAnswer: correctAnswers[step],
        clickedAnswer: answer
      });
    } else{
      this.setState({
        correctAnswer: 0,
        clickedAnswer: answer
      });
    }
  }

  // method to move to the next question
  nextStep = (step) => {
    this.setState({
      step: step + 1,
      correctAnswer: 0,
      clickedAnswer: 0
    });
  }

  render(){
    let { questions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
    return(
      <div className="container">
        <div className="content-centered">
          <div className="w-layout-grid testimonial-grid">
            {step <= Object.keys(questions).length ? 
              (<div className="testimonial-card">
              <div className="testimonial-content">
                <Question
                  question={questions[step]}
                />
                <Answer
                  answer={answers[step]}
                  step={step}
                  checkAnswer={this.checkAnswer}
                  correctAnswer={correctAnswer}
                  clickedAnswer={clickedAnswer}
                />
                
                <div className={styles.footer}>
                  <button 
                    type="button" 
                    className={`${styles.submitButton} ${styles.wButton} `}
                    disabled={
                      clickedAnswer && Object.keys(questions).length >= step
                      ? false : true
                    }
                    onClick={() => this.nextStep(step)}
                  >
                    <img 
                      src="https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60d0ba000e4b763ca38903e4_btn_arrow.svg" loading="lazy" alt="" 
                      style={{
                        "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", 
                        transformStyle: "preserve-3d"
                      }}
                    />
                  </button>
                </div>
              </div>
              </div>
              ) : (
                <div className="finalPage">
                  <h1>You have completed the quiz!</h1>
                  <p>Your score is: {score} of {Object.keys(questions).length}</p>
                  <p>Thank you!</p>
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}