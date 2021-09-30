import React, {Component} from 'react';
import Question from '../components/quiz/question/question';
import Answer from '../components/quiz/answer/multiple-answer';
import styles from '../components/quiz/quiz.module.css'
import Link from 'next/link';


export default class Quiz2 extends Component {

  // initiating the local state
  state = {
    questions: {
      1: {
        title: 'Identifique o <u>tipo de integração</u> descrita a seguir:',
        subtitle: 'Voltada para um tema específico, como segurança, economia etc. Todos os países membros devem obrigatoriamente fazer parte de todas as negociações promovidas dentro da região. O intuito é facilitar transações para todos os envolvidos e, assim, fortalecer o grupo como um todo',
      },
      2: {
        title: 'Assinale a alternativa com a explicação mais assertiva em relação ao <u>Regionalismo Aberto</u>:',
        subtitle: null,
      },
      3: {
        title: 'Sobre <u>Regionalização</u>, pode-se afirmar que:',
        subtitle: null,
      },
      4: {
        title: 'Leia o trecho a seguir:',
        subtitle: '“Ao final da Guerra Fria, passou por um processo de reforma, e, após reconfigurar seu <i>modus operandi</i> e expandir sua linha de atuação se tornou uma organização voltada para a identificação e combate de ameaças, como o terrorismo e o narcotráfico”.',
      },
      5: {
        title: 'Sobre os níveis de integração regional, assinale a <u>errada</u>:',
        subtitle:null,
      },
      6: {
        title: 'Sobre os níveis de integração regional, assinale a alternativa <u>incorreta</u>:',
        subtitle:null,
      },
    },
    answers: {
      1: {
        1: 'União Aduaneira',
        2: 'União Monetária',
        3: 'Mercado Comum',
        4: 'Área de Livre Comércio',
      },
      2: {
        1: 'Concentração da região limitada à suas fronteiras. Seu objetivo é incentivar o desenvolvimento interno nos diversos setores produtivos, com foco na industrialização',
        2: 'Inserção dos países ao comércio multilateral, abrindo a economia para a concorrência externa',
        3: 'Região livre de taxação de produto e baixo nível de integração',
        4: 'Instituições de segurança que lidam de forma diplomática com os conflitos internacionais, evitando o desencadeamento de guerras',
      },
      3: {
        1: 'É a ideia de olhar para processos que regionalizam países no âmbito macro, por meio da identificação de novos atores a uma região',
        2: 'Movimento de fechamento regional, que tem por objetivo desenvolver as condições internas de competitividade e depois abrir o seu mercado interno para o comércio internacional',
        3: 'Acordo pelo qual os países assumem riscos em relação a entrada facilitada de uma concorrência estrangeira. Exige maior esforço político de negociação',
        4: 'É um conjunto de decisões que passam por ajustes e adequações políticas, visando a conformação de práticas comuns, com ganhos positivos coletivos e individuais',
      },
      4: {
        1: 'OTAN',
        2: 'ONU',
        3: 'OMC',
        4: 'União Europeia',
      },
      5: {
        1: 'Trata-se de uma cooperação política, e a dimensão coletiva dos blocos resulta em redução da soberania',
        2: 'Países entram em um acordo formal para maximizar seus ganhos',
        3: 'Quanto maiores os esforços na tomada de decisão, o compromisso econômico e o comprometimento político dentro de uma integração, maior é o grau de aprofundamento da regionalização',
        4: 'Seu objetivo é fortalecer as políticas públicas municipais voltadas para crianças, adolescentes, meio ambiente etc',
      },
      6: {
        1: 'Uma área de livre comércio é uma região livre de taxação de produtos, e constitui um baixo nível de integração',
        2: 'Em uma União Monetária, temos o nível máximo de integração, sendo a União Europeia a principal representante',
        3: 'O Mercado Comum estabelece o livre fluxo de pessoas, bens e serviços',
        4: 'A União Aduaneira envolve o livre comércio e tarifas igualitária somente para os países membros',
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
    this.setState({
      step: step + 1,
      clickedAnswer: 0
    });
  }

  render(){
    let { questions, answers, clickedAnswer, step, score } = this.state;
    return(
      <div className="container">
        <div className="content-centered">
          <div className="w-layout-grid testimonial-grid">
            {step <= Object.keys(questions).length ? 
              (<div className="testimonial-card">
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
                    Você finalizou o teste!
                  </h1>
                  <p
                    style={{
                      fontSize: "2vw",
                      textAlign: "center"
                    }}
                  >
                    Suas escolhas foram: {Object.values(this.state.selectedAnswers).join(', ')}
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