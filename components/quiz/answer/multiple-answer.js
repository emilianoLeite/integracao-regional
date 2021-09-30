import styles from '../quiz.module.css';

export default function MultipleAnswer(props) {
    let answers = Object.keys(props.answer)
        .map((qAnswer, i) => (
            <li
            className=
            {
                props.clickedAnswer === qAnswer ? 
                `${styles.answerOption} ${styles.selected}` : `${styles.answerOption}`
            }
            onClick={() => props.checkAnswer(qAnswer)}
            key={qAnswer}>
                <img 
                    src="https://i.pinimg.com/564x/e8/87/f0/e887f0eb96d2fa532955180419680dfb.jpg" loading="lazy" 
                    className={styles.imgAnswer}
                />
            </li>
        ));

        return (
            <>
                <ul className={`${styles.answerList} ${styles.multiple}`}>
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