import React from 'react';
import styles from '../quiz.module.css';

const Answer = (props) => {
    let answers = Object.keys(props.answer)
        .map((qAnswer, i) => (
            <li
            className=
            {
                props.correctAnswer === qAnswer ?
                `${styles.answerOption} ${styles.correct}` : 
                props.clickedAnswer === qAnswer ? 
                `${styles.answerOption} ${styles.incorrect}` : `${styles.answerOption}`
            }
            onClick={() => props.checkAnswer(qAnswer)}
            key={qAnswer}>
                <span className={styles.answerButton} >
                <div className={styles.webflowButtonBackBcg}></div>
      <div className={styles.webflowButtonTopBcg}></div>
      <div className="button-text">

                {props.answer[qAnswer]}
      </div>
                </span>
            </li>
        ));

        return (
            <>
                <ul disabled={props.clickedAnswer ? true : false} className={styles.answerList}>
                    {answers}
                </ul>
                {/* <div>
                    {
                        props.correctAnswer ?
                        'Correct Answer!' : 
                        props.clickedAnswer ? 'Incorrect Answer!' : ''
                    }
                </div> */}
            </>
        );
}

export default Answer;