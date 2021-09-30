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
                    src={props.answer[qAnswer]}
                    loading="lazy" 
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