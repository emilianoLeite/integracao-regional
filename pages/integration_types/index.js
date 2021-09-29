import styles from './integration_types.module.css';

export default function IntegrationTypes() {
  return (
    <>
      <section 
        className="container"
        style={{background: "#fff4ab"}}
        className="container no-padding-mobile"
      >
        <div className={styles.splitSection}>
          
          <div className={styles.halfSection}>
            <div className={styles.watermark}>
              <span> 1 </span>
            </div>
            <h2 id="integration-type-1"> Área de livre comércio </h2>
            <p>
              Diz respeito a uma região livre de taxação de produtos, baixo nível de integração por ser pouco amplo como ocorre com o NAFTA (Acordo de livre-comércio da América do Norte).
            </p>
        
          </div>
         
          <div className={styles.halfSection}>
            <div className={styles.watermark}>
              <span> 2 </span>
            </div>
            <h2 id="integration-type-2"> União Aduaneira </h2>
            <p>
              Também envolve o livre comércio, porém com tarifas iguais para produtos entre os países membros, trata-se de um nível a mais de integração, pois os países que fazem parte do acordo assumem riscos em relação à entrada facilitada de uma concorrência estrangeira, logo exige um maior esforço político de negociação para que a integração ocorra. Um exemplo deste tipo de integração é a União Aduaneira da África Austral.
            </p>
        
          </div>
        </div>        
      </section>
      <section 
        className="container"
        style={{background: "#fff4ab"}}
        className="container no-padding-mobile"
      >
        <div className={styles.splitSection}>
          
          <div className={styles.halfSection}>
            <div className={styles.watermark}>
              <span> 3 </span>
            </div>
            <h2 id="integration-type-3"> Mercado Comum </h2>
            <p>
              Neste caso a integração é voltada para um tema específico, como segurança, economia etc. Todos os países membros devem obrigatoriamente fazer parte de todas as negociações promovidas dentro da região, a exemplo do MERCOSUL (Mercado Comum do Sul).
            </p>
        
          </div>
         
          <div className={styles.halfSection}>
            <div className={styles.watermark}>
              <span> 4 </span>
            </div>
            <h2 id="integration-type-4"> União Monetária </h2>
            <p>
              Neste estágio, além do livre comércio também temos o estabelecimento de uma moeda única, como no caso da União Europeia com o euro, um nível de integração muito maior do que em relação ao Mercado Comum, pois uma moeda única depende de um alinhamento das economias nacionais, sendo este um compromisso político muito mais duradouro e que pode gerar grandes efeitos positivos e negativos aos países membros.
            </p>
        
          </div>
        </div>        
      </section>
    </>
  )
}