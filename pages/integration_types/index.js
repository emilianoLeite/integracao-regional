import styles from './integration_types.module.css';

export default function IntegrationTypes() {
  return (
    <>
      <section
        className="container"
      >
        <h1 className={styles.header}>
          Tipos de Integração
        </h1>
      </section>

      <section
        className="container"
      >
        <div className={styles.splitSection}>
          
          <div className={`${styles.halfSection} ${styles.firstRow}`}>
            <div className={styles.watermark1}>
              <span> 1 </span>
            </div>
          
            <h2 className="kinan-font" id="integration-type-1"> Área de livre comércio </h2>
            <p>
              Diz respeito a uma região livre de taxação de produtos, baixo nível de integração por ser pouco amplo como ocorre com o NAFTA (Acordo de livre-comércio da América do Norte).
            </p>
        
          </div>
         
          <div className={`${styles.halfSection} ${styles.firstRow}`}>
            <div className={styles.watermark2}>
              <span> 2 </span>
            </div>
            <h2 className="kinan-font" id="integration-type-2"> União Aduaneira </h2>
            <p>
              Também envolve o livre comércio, porém com tarifas iguais para produtos entre os países membros, trata-se de um nível a mais de integração, pois os países que fazem parte do acordo assumem riscos em relação à entrada facilitada de uma concorrência estrangeira, logo exige um maior esforço político de negociação para que a integração ocorra. Um exemplo deste tipo de integração é a União Aduaneira da África Austral.
            </p>
        
          </div>
        </div>        
      </section>
      
      <section 
        className="container"
      >
        <div className={styles.splitSection}>
          
          <div className={`${styles.halfSection} ${styles.secondRow}`}>
            <div className={styles.watermark3}>
              <span> 3 </span>
            </div>
            <h2 className="kinan-font" id="integration-type-3"> Mercado Comum </h2>
            <p>
              Neste caso a integração é voltada para um tema específico, como segurança, economia etc. Todos os países membros devem obrigatoriamente fazer parte de todas as negociações promovidas dentro da região, a exemplo do MERCOSUL (Mercado Comum do Sul).
            </p>
        
          </div>
         
          <div className={`${styles.halfSection} ${styles.secondRow}`}>
            <div className={styles.watermark4}>
              <span> 4 </span>
            </div>
            <h2 className="kinan-font" id="integration-type-4"> União Monetária </h2>
            <p>
              Neste estágio, além do livre comércio também temos o estabelecimento de uma moeda única, como no caso da União Europeia com o euro, um nível de integração muito maior do que em relação ao Mercado Comum, pois uma moeda única depende de um alinhamento das economias nacionais, sendo este um compromisso político muito mais duradouro e que pode gerar grandes efeitos positivos e negativos aos países membros.
            </p>
        
          </div>
        </div> 
           
      </section>

      <section className="container no-padding-mobile" style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      paddingTop: "45px",
      background: "rgb(238 233 229);",
    }}>
      <img 
        src="https://i.pinimg.com/564x/d9/b6/2b/d9b62b351d1be0995c8aaef6897fb606.jpg" loading="lazy" alt="" 
        style={{
          maxWidth: "550px",
          maxHeight: "500px",
          "WebkitTransform": "scaleX(-1)",
          transform: "scaleX(-1)",
          marginLeft: "-110px",
          marginTop: "50px",
        }}
      />
      <article
        style={{maxWidth:"600px"}}
      >
          <p>
          Quanto maior é o esforço que envolve as tomadas de decisão sobre os aspectos daquela integração, assim como o tamanho do compromisso econômico e político para os países, maior é o grau de aprofundamento daquela regionalização.
          </p>

          <p>
          Analogamente, uma região pode ser identificada de diversas formas, seja por critérios econômicos, sociais, políticos, ou simplesmente a sua localidade geográfica; no entanto, todas essas definições se referem à formas de interação. Devemos crer também que uma região pode, por vezes, ser melhor definida pelo seu nível de fragilidade perante as ações de outros atores, do que pela extensão física do território.
          </p>

          <p>
          Com isso entendemos que as regiões não precisam se relacionar de forma engessada apenas aos limites do Estado, elas podem compreender diferentes tipos de unidades (sejam estas subestatais, supraestatais ou transestatais) e oferecer colaboração entre atores.
          </p>

          <p>
          Desta forma, podemos entender Regionalização como um projeto, e um processo, para entender mudanças que ocorrem em uma região e gera um spillover regional que atinge outros atores de diferentes regiões. Ou seja, a regionalização é a ideia de olhar para processos que regionalizam países no âmbito macro, por meio da identificação de novos atores a uma região, como é o exemplo da Austrália, país localizado na Oceania que possui mecanismos e tratados econômicos com a Europa e Estados Unidos mesmo sem fazer parte da mesma região por diferenças de agendas.
          </p>

          <p>
          A regionalização cria tentáculos que atingem outros países, o que significa que, quando um processo de integração regional aumenta sua abrangência, ele cria mecanismos que atuam como um processo de identificação, ou até mesmo uma ponte para que novos atores façam parte do processo de integração, como acordos entre países de diferentes regiões.
          </p>

          <p>
          A OTAN é um excelente caso para se analisar a regionalização, tendo em vista seu processo de reformulação no contexto pós-Guerra Fria. A organização deixa de ter a União Soviética como alvo e passa a identificar novas ameaças, como o terrorismo e o narcotráfico, o que por consequência reconfirgura a natureza de suas operações e expande suas possibilidades geográficas de atuação, deixando então de focar suas interveções apenas em Estados-membros e expandindo para outras áreas, como o Oriente Médio por exemplo.
          </p>

          <p>
            Ou seja, é possível haver a regionalização de diversas agendas, da mesma forma que regiões mudam assim como os interesses dos atores, e também da mesma forma que a OTAN, em seu processo de reformulação, deixa de ser uma organização de natureza defensiva e passa a ser ativa na tentativa de combater o terrorismo e outras ameaças à democracia.
          </p>

        </article>
      </section>
    </>
  )
}