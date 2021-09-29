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
            <button type="button" className={styles.secondaryButton} data-bcup-haslogintext="no">anterior</button>
            <button type="button" className={`${styles.submitButton} ${styles.wButton} `}>próxima</button>
          </div>
      </form>
        </div>

    </div>
  )
}