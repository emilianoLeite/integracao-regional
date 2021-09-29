import styles from './quiz1.module.css';

export default function Question() {
  return (
    <div className="testimonial-card">
        <div className="testimonial-content">
          <h4> - Questão 1 - </h4>
          <p>I have just launched my first digital product and it’s all thanks to you. Everyone love it! Already reached my sales goal in 5 hours. Thank you!</p>
          <form>
          <a href="#"  className={styles.answerButton}>
            <div className="button-back-bcg"></div>
            <div className="button-top-bcg"></div>
            <div className="button-text">
              <input 
                type="radio" id="quiz1-answer1" name="quiz1-answer1" value="quiz1-answer1" 
                
              />
              <label className={styles.answerLabel} htmlFor="quiz1-answer1">Teste</label>
            </div>
          </a>
          <a href="#" 
          className={styles.answerButton}>
            <div className="button-back-bcg"></div>
            <div className="button-top-bcg"></div>
            <div className="button-text">
              <input 
                type="radio" id="quiz1-answer2" name="quiz1-answer1" value="quiz1-answer2"      
                
              />
              <label className={styles.answerLabel} htmlFor="quiz1-answer2">Teste</label>
            </div>
          </a>
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