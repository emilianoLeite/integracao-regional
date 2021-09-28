import styles from './quiz1.module.css';

export default function Question() {
  return (
    <div class="testimonial-card">
      <form>
        <div class="testimonial-content">
          <h4> - Cathrin - </h4>
          <p>I have just launched my first digital product and it’s all thanks to you. Everyone love it! Already reached my sales goal in 5 hours. Thank you!</p>
          <a href="#"  className={styles.answerButton}>
            <div class="button-back-bcg"></div>
            <div class="button-top-bcg"></div>
            <div class="button-text">
              <input 
                type="radio" id="quiz1-answer1" value="quiz1-answer1" 
                selected={false}
              />
              <label className={styles.answerLabel}for="quiz1-answer1">Teste</label>
            </div>
          </a>
          <a href="#" 
          className={styles.answerButton}>
            <div class="button-back-bcg"></div>
            <div class="button-top-bcg"></div>
            <div class="button-text">
              <input 
                type="radio" id="quiz1-answer2" value="quiz1-answer2"      
                selected={false}
              />
              <label className={styles.answerLabel} for="quiz1-answer2">Teste</label>
            </div>
          </a>
          <a href="#" class="submit-button w-button" data-bcup-haslogintext="no">Submit</a>
          <a href="#" className={styles.secondaryButton} data-bcup-haslogintext="no">Submit</a>
        </div>

      </form>
    </div>
  )
}