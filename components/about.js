export default function About() {
  return (
    <section className="container no-padding-mobile" style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      marginBottom: "50px",
      paddingTop: "45px",
    }}>
      
      <h3 
        id="about"
        style={{
          width: "100%",
          marginBottom: "0px",
          marginLeft: "100px",
          textTransform: "uppercase",
          fontSize: "4em",
        }}
        >
        O que é 
      </h3>
        <h2 
          className="kinan-font"
        >
        Integração Regional?

        </h2 >
      <img 
        src="https://global-business-leaders.com/wp-content/uploads/2019/02/GBL-Illustration-peoplewithtorches-01-01.png" loading="lazy" alt="" 
        style={{
          maxWidth: "500px",
          maxHeight: "400px",
          "WebkitTransform": "scaleX(-1)",
          transform: "scaleX(-1)",
          marginLeft: "-65px",
          marginTop: "36px",
        }}
      />
      <article
        style={{maxWidth:"400px"}}
      >
        <p style={{textAlign: "justify"}}>
          <span 
            className="today-easter-font"
            style={{
              fontSize: "1.7rem",
              marginRight: "5px",
            }}
          >
            O que está por trás da paz? 
          </span>
          Seria a ausência de guerra? Temos muitos eventos históricos que nos mostram que na verdade existem diversos outros elementos políticos que podem gerar instabilidade no sistema internacional, a única maneira de alocar diplomaticamente os Estados seria, na verdade, através da cooperação. Um espaço seguro para que as nações/atores internacionais entrem em um acordo formal para maximizar os ganhos entre as partes.
        </p>

        <p style={{textAlign: "justify"}}>
          O processo de integração regional é necessariamente uma dinâmica de cooperação política, e considerando a dimensão coletiva dos blocos no cenário internacional ao avançar nos processos de integração os países acabam abrindo mão de sua soberania.
        </p>

        <p style={{textAlign: "justify"}}>
          Com o objetivo de reordenar o Sistema Internacional no pós-guerras surge o movimento de regionalismos para o desenvolvimento de instituições de segurança. A primeira onda de Regionalismo foi caracterizada como Regionalismo Fechado, as regiões se fechavam para criar estratégias comuns de desenvolvimento de inserção no Sistema Internacional, englobando assim todo tipo de processo de cooperação a nível regional e não só processos de integração econômica. Sendo assim, o  regionalismo aberto é visto como uma etapa intermediária para a liberalização econômica multilateral, e não como um fim em si mesmo. Já o Regionalismo Fechado promove o protecionismo a nível regional.



        </p>
      </article>
    
    </section>
  )
}