import Link from 'next/link'

export default function NavigationButtons() {
  return (
    <section 
      className="container wf-section"
      style={{background: "#fff4ab"}}
    > 
      <div>
        <div 
          className="scrollable-title-inner"
          style={{paddingTop: "5px"}}
        >
          <h1 className="margin-right-35 ">Navegue no</h1>
        </div>
        <div className="scrollable-title-inner" >
          <h1 className="margin-right-35 ">REGIONALIZANDO</h1>
        </div>
      </div> 

      <div className="container">
        <div className="content-centered">
          <div className="button-wrapper no-padding-top">
            <Link href="/integration_types">
              <a href="#" className="button medium w-inline-block">
                <div className="button-back-bcg"></div>
                <div className="button-top-bcg"></div>
                <div className="button-text today-easter-font" style={{fontSize: "1.8em"}} >O que é</div>
                <img src="https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60d0ba000e4b763ca38903e4_btn_arrow.svg" loading="lazy" alt="" className="button-arrow" />
              </a>
            </Link>
          </div>
          
          <div className="button-wrapper">
            <Link href="/integration_types">
              <a href="#" className="button medium w-inline-block">
                <div className="button-back-bcg"></div>
                <div className="button-top-bcg"></div>
                <div className="button-text today-easter-font" style={{fontSize: "1.8em"}} >Tipos de Integração</div>
                <img src="https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60d0ba000e4b763ca38903e4_btn_arrow.svg" loading="lazy" alt="" className="button-arrow" />
              </a>
            </Link>
          </div>
          
          <div className="button-wrapper">
            <Link href="/integration_types">
              <a href="#" className="button medium w-inline-block">
                <div className="button-back-bcg"></div>
                <div className="button-top-bcg"></div>
                <div className="button-text today-easter-font" style={{fontSize: "1.8em"}} >
                  Teste seus conhecimentos
                  </div>
                <img src="https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60d0ba000e4b763ca38903e4_btn_arrow.svg" loading="lazy" alt="" className="button-arrow" />
              </a>
            </Link>
          </div>
        </div>
    </div>
   </section>
  )
}