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
            <span className="grid-link w-inline-block">
              <div className="grid-wrapper">
              <div className="grid-image-wrapper">
              <img 
                src="https://i.pinimg.com/564x/e8/87/f0/e887f0eb96d2fa532955180419680dfb.jpg" loading="lazy" 
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
            <span className="grid-link w-inline-block">
              <div className="grid-wrapper">
              <div className="grid-image-wrapper">
              <img 
                src="uniao-aduaneira.jpg" 
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
            <span className="grid-link w-inline-block">
              <div className="grid-wrapper">
                <div className="grid-image-wrapper">
                  <img 
                    src="https://i.pinimg.com/564x/8b/24/1e/8b241e36c5968e12b3e6c2aac1534832.jpg" 
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
            <span className="grid-link w-inline-block">
              <div className="grid-wrapper">
                <div className="grid-image-wrapper">
                  <img 
                    src="https://i.pinimg.com/564x/af/32/16/af3216d4d54884bbc4bb91afd67929ce.jpg" 
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