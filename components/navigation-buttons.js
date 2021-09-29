export default function NavigationButtons() {
  return (
    <section 
      className="section wf-section"
      style={{background: "#fff4ab"}}
    >
      <div className="scrollable-title-wrapper">
        <div className="scrollable-title-inner">
          <h2 className="margin-right-96 kinan-font">Integrante 1</h2>
          <h2 className="margin-right-96 bacalisties-font">Integrante 2</h2>
        </div>
        <div className="scrollable-title-inner" >
          <h2 className="margin-right-96 today-easter-font">Integrante 3</h2>
          <h2 className="margin-right-96">Integrante 4</h2>
          <h2 className="margin-right-96">Integrante 5</h2>
        </div>
      </div>
      
      <div className="container">
      <div className="content-centered">
      <div className="button-wrapper no-padding-top">
      <a href="#" className="button big w-inline-block">
      <div className="button-back-bcg">
      </div>
    <div className="button-top-bcg"></div>
    <div className="button-text today-easter-font" style={{fontSize: "1.8em"}} >O que é</div>
    <img src="https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60d0ba000e4b763ca38903e4_btn_arrow.svg" loading="lazy" alt="" className="button-arrow" />
      </a>
      </div>
      <div className="button-wrapper">
        <a href="#" className="button big w-inline-block">
        <div className="button-back-bcg">
        </div>
      <div className="button-top-bcg"></div>
      <div className="button-text today-easter-font" style={{fontSize: "1.8em"}} >Tipos de Integração</div>
      <img src="https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60d0ba000e4b763ca38903e4_btn_arrow.svg" loading="lazy" alt="" className="button-arrow" />
        </a>
      </div>
      <div className="button-wrapper">
        <a href="#" className="button big w-inline-block">
          <div className="button-back-bcg">
          </div>
          <div className="button-top-bcg"></div>
          <div className="button-text today-easter-font" style={{fontSize: "1.8em"}} >
            Teste seus conhecimentos
            </div>
          <img src="https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60d0ba000e4b763ca38903e4_btn_arrow.svg" loading="lazy" alt="" className="button-arrow" />
        </a>
      </div>
      </div>
    </div>
   </section>
  )
}