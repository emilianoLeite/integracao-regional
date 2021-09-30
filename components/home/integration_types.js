import Link from 'next/link'

export default function IntegrationTypes() {
  return (
    <section 
      className="container no-padding-mobile"
      style={{
        background: "#F9DCC4",
      }}
    >
      <div 
        className="content-inner-padding"
        style={{
          border: "2px solid #FFB5A7"
        }}
      >
        <div 
          className="alternative-title-wrapper"
          style={{
            background: "#F9DCC4",
          }}
        >
          <h3 
            id="integration-types"
            className="alternative-title dirtylife-font"
            style={{
              width: "100%",
              fontSize: "4em",
              textAlign: "start",
              marginLeft: "70px",

            }}
          >

              TIPOS DE
          </h3>
            <h3 
              className="kinan-font"
              style={{
                marginLeft: "120px"
              }}
            >
              Integração Regional
            </h3>
        </div>
        
        <div className="w-layout-grid grid-half">
          <Link href="/integration_types#integration-type-1">
            <span className="clickable grid-link w-inline-block">
              <div className="grid-wrapper">
              <div className="grid-image-wrapper">
              <img 
                src="/types/NAFTA.jpg" loading="lazy" 
                className="image-cover"
              />
            
            </div>
            <div className="grid-content-wrapper">
              <h4 className="today-easter-font">Área de livre comércio</h4>
            
            </div>
            
            </div>
            
            </span>
          </Link>
         
          <Link href="/integration_types#integration-type-2">
            <span className="clickable grid-link w-inline-block">
              <div className="grid-wrapper">
              <div className="grid-image-wrapper">
              <img 
                src="/types/UAAA.jpg" 
                loading="lazy"
                className="image-cover"
                />
            
            </div>
            <div className="grid-content-wrapper">
              <h4 className="today-easter-font">União Aduaneira</h4>
            
            </div>
          
            
            </div>
            
            </span>
          </Link>
         
          <Link href="/integration_types#integration-type-3">
            <span className="clickable grid-link w-inline-block">
              <div className="grid-wrapper">
                <div className="grid-image-wrapper">
                  <img 
                    src="/types/MERCOSUL.jpg" 
                    loading="eager"
                    className="image-cover"
                  />
                
                </div>
                
                <div className="grid-content-wrapper">
                  <h4 className="today-easter-font">Mercado Comum</h4>
                </div>
              </div>
            </span>
          </Link>
         
          <Link href="/integration_types#integration-type-4">
            <span className="clickable grid-link w-inline-block">
              <div className="grid-wrapper">
                <div className="grid-image-wrapper">
                  <img 
                    src="/types/UNIAO_EUROPEIA.jpg" 
                    loading="lazy" 
                    className="image-cover"
                  />
              
                </div>
                
                <div className="grid-content-wrapper">
                  <h4 className="today-easter-font">União Monetária</h4>
                </div>
              </div>
            </span>
          </Link>
        </div>
      </div>    
    </section>
  )
}