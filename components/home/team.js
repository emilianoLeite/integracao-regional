export default function Team() {
  return (
    <section className="container content-centered no-padding-mobile" style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      paddingTop: "45px",
      background: "rgb(255 193 185)",
    }}>
      
      <h1 
        id="team"
        style={{
          width: "100%",
          marginBottom: "10px",
          textAlign:"center",
          textTransform: "uppercase",
          fontSize: "4em",
        }}
        >
        <u>
          Integrantes
        </u>
      </h1>
      {/* <hr
        style={{
          height: "7px",
          width: "100%",
        }}
      /> */}
        <ul className="team">
          <li>
            <span>Mariana Correia (19020276)</span>

          </li>
          <li>
            <span>Patrícia Dupin (19020399)</span>

          </li>
          <li>
            <span>Isis Machado (19020428)</span>

          </li>
          <li>
          <span>Luciana Almeida (19020318)</span>

          </li>
          <li>
          <span>Rafaela Brunheira (19022028)</span>
          </li>
          
        </ul>
    
    </section>
  )
}