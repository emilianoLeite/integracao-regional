import { useState } from 'react';
import AnswerButton from './answer-button';
import styles from './quiz1.module.css';

export default function Question({ formState, dispatcher }) {
  const [selectedOption, setSelectedOption] = useState(null)
  
  const handleClick = (index) => {
    setSelectedOption(index);
    dispatcher({ type: 'answerSelected', payload: index })
    console.log(`selecetd`, selectedOption);
  }
  
  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <h4> - Questão 1 - </h4>
        
        <p>
          I have just launched my first digital product and it’s all thanks to you. Everyone love it! Already reached my sales goal in 5 hours. Thank you!
        </p>
        
        <form>
          <AnswerButton 
            formName={"quiz1"} answerLabel={"Teste"} answerIndex={0}
            onClick={() => handleClick(0)}
            selected={selectedOption === 0}    
          />
          <AnswerButton 
            formName={"quiz1"} answerLabel={"Teste2"} answerIndex={1}
            onClick={() => handleClick(1)}
            selected={selectedOption === 1}
          />
          <AnswerButton 
            formName={"quiz1"} answerLabel={"Test3"} answerIndex={2}
            onClick={() => handleClick(2)}
            selected={selectedOption === 2}
          />
        
          
          <div className={styles.footer}>
            <button type="button" className={styles.secondaryButton} data-bcup-haslogintext="no">
              <img src="https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60d0ba000e4b763ca38903e4_btn_arrow.svg" loading="lazy" alt="" style={{
                "transform": "rotate(180deg) translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", 
                transformStyle: "preserve-3d"
              }}/>
            </button>
            <button type="button" className={`${styles.submitButton} ${styles.wButton} `}>
              <img src="https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60d0ba000e4b763ca38903e4_btn_arrow.svg" loading="lazy" alt="" style={{
                "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", 
                transformStyle: "preserve-3d"
              }}/>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}