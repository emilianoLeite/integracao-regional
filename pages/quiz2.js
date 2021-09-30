import React, {Component, useEffect} from 'react';
import Question from '../components/quiz/question/question';
import Answer from '../components/quiz/answer/multiple-answer';
import styles from '../components/quiz/quiz.module.css'
import Link from 'next/link';

const results ={
  1: {
    title: 'OUSADE',
    text: "Dias calmos num escritório resolvendo problemas comuns? Não são para você. Você, assim como o patinho radical e o hamster rolezeiro, tem uma curiosidade pelo mundo e por novas formas de se entender o sistema internacional olhando para as diversas lentes culturais e sociais que existem."
  },
  2: {
    title: 'INTERNACIONALISTA PAZ E AMOR',
    text: "Você é internacionalista da paz, a cooperação para você não é uma estratégia calculista para se chegar aos fins necessários, mas um meio de criar vínculos sustentáveis de amizade entre os países a longo prazo."
  },
  3: {
    title: 'DIPLOMATA NATO',
    text: "Corre aqui Itamaraty! Você é diplomata nato, sabe usar seus argumentos de maneira séria e concisa sem perder a linha de raciocínio, nas rodadas de negociação é observador e cauteloso, mas sempre tem uma carta na manga."
  },
  4: {
    title: 'PALESTRINHA',
    text: "Você é internacionalista palestrinha, sempre envolvide em algum congresso ou palestra, o ambiente acadêmico é o seu habitat natural, produzir conhecimento, para você, é uma forma de mudar o mundo."  
  },
}

function finalResult(selectedAnswers) {
  if(selectedAnswers['1'] == '2' && selectedAnswers["2"] === '3') {
    return results["1"]
  } else{
    return results[[2,3,4][Math.floor(Math.random()*3)]] // random answer between 2,3 and
  }
}

export default class Quiz2 extends Component {

  // initiating the local state
  state = {
    questions: {
      1: {
        title: 'Comece escolhendo qual patinho mais te representa',
        subtitle: null,
      },
      2: {
        title: 'Qual hamster ganhou seu coração?',
        subtitle: null,
      },
      3: {
        title: 'É difícil, mas escolha apenas uma dessas vaquinhas fofas',
        subtitle: null,
      },
      4: {
        title: 'Qual desses filhotes mais te chama a atenção?',
        subtitle: null
      },
      5: {
        title: 'Qual duplinha de amigos é a sua preferida?',
        subtitle: null,
      },
      6: {
        title: 'E pra finalizar, qual dos pets do grupo você escolheria para ter uma amizade sincera?',
        subtitle: null,
      },
    },
    answers: {
      1: {
        1: '/quiz2/patinho1.jpeg',
        2: '/quiz2/patinho2.jpeg',
        3: '/quiz2/patinho3.jpeg',
        4: '/quiz2/patinho4.jpeg',
      },
      2: {
        1: '/quiz2/hamster1.jpeg',
        2: '/quiz2/hamster2.jpeg',
        3: '/quiz2/hamster3.jpeg',
        4: '/quiz2/hamster4.jpeg',
      },
      3: {
        1: 'https://i.pinimg.com/564x/d6/21/8c/d6218caae8a3a92ae0ff650833ba4f05.jpg',
        2: 'https://i.pinimg.com/564x/17/9b/6e/179b6e0ad9d6f60d91101dc4aa5fc48b.jpg',
        3: 'https://i.pinimg.com/564x/8e/17/8d/8e178d172b73d9d2293f03b019ee10b5.jpg',
        4: 'https://i.pinimg.com/564x/3b/68/75/3b68751a8a14149a8aedc58ae8fcda9e.jpg',
      },
      4: {
        1: '/quiz2/filhote1.jpeg',
        2: '/quiz2/filhote2.jpeg',
        3: '/quiz2/filhote3.jpeg',
        4: '/quiz2/filhote4.jpeg',
      },
      5: {
        1: '/quiz2/dupla1.jpeg',
        2: '/quiz2/dupla2.jpeg',
        3: '/quiz2/dupla3.jpeg',
        4: '/quiz2/dupla4.jpeg',
      },
      6: {
        1: '/quiz2/pet1.jpeg',
        2: '/quiz2/pet2.jpeg',
        3: '/quiz2/pet3.jpeg',
        4: '/quiz2/pet4.jpeg',
      },
      
    },
    selectedAnswers: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
    },
    clickedAnswer: 0,
    step: 1,
    finalResult: {},
  }

  // the method that checks the correct answer
  checkAnswer = answer => {
    const { step } = this.state;
    
    const selectedAnswers = { ...this.state.selectedAnswers, [step]: answer }

    this.setState({
      selectedAnswers,
      clickedAnswer: answer
    });
    
    console.log(selectedAnswers);
  }

  // method to move to the next question
  nextStep = (step) => {
    this.setState((state, props) => ({
      step: step + 1,
      clickedAnswer: 0,
      finalResult: finalResult(state.selectedAnswers),
    }));
  }

  render(){
    let { questions, answers, clickedAnswer, step } = this.state;
    let finalPage = step <= Object.keys(questions).length

    return(
      <div className="container">
        <div className="content-centered">
          <div
            style={{display: finalPage ? "block" : "none" }}
          >

            <h1> Quiz dos Bichinhos</h1>
            <p
              style={{fontSize: "2vw"}}
              >
              Escolha alguns bichos fofinhos e diremos que tipo de internacionalista você é
            </p>
          </div>
          <div className="w-layout-grid testimonial-grid">
            {finalPage? 
              (<div className="testimonial-card" style={{border: "2px solid #FFB5A7"}}>
              <div className="testimonial-content">
                <Question
                  title={questions[step].title}
                  subtitle={questions[step].subtitle}
                />
                <Answer
                  answer={answers[step]}
                  step={step}
                  checkAnswer={this.checkAnswer}
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
                <div className="content-centered">
                  <h1
                    style={{
                      textAlign: "center"
                    }}
                  >
                    Seu resultado
                  </h1>
                  <h2 className="today-easter-font">
                    {this.state.finalResult.title}

                  </h2>
                  <p
                    style={{
                      fontSize: "2vw",
                      textAlign: "center"
                    }}
                  >
                    {this.state.finalResult.text}
                  </p>
                  <Link href="/quiz2">
                    <button 
                      type="button" 
                      className={`${styles.submitButton} ${styles.wButton} `}
                      onClick={() => { document.location.reload()}}
                    >
                        Refazer
                    </button>
                  </Link>
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}