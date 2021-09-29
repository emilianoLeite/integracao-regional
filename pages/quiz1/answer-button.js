import styles from './quiz1.module.css';

export default function AnswerButton({ formName, answerLabel, answerIndex, onClick, selected }){
  const onValueChange = (event) => {}

  return (
    <span className={styles.answerButton} onClick={onClick}>
      <div className="button-back-bcg"></div>
      <div className="button-top-bcg"></div>
      <div className="button-text">

        <input 
          type="radio" id={`quiz1-answer${answerIndex}`} name={formName} value="quiz1-answer1"    
          checked={selected}
          onChange={onValueChange}
        />
        <label className={styles.answerLabel} htmlFor={`quiz1-answer${answerIndex}`}>
          {answerLabel}
        </label>

      </div>
    </span>
  )
}