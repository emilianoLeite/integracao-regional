import Link from 'next/link'

export default function Quizzes() {
  return (
  <section 
    style={{
      background: "#FCD2AF",
    }}>
    
    <div className="split-section wf-section">
      <div className="split-section-image-half">
        <div className="split-image quiz-bundle-image"></div>
      </div>
     
      <div className="split-section-content-half">
        <div className="title-wrapper">
          <h3 
            id="quizzes"
            className="alternative-title dirtylife-font"
            style={{
              width: "100%",
              fontSize: "4em",
              textAlign: "start",
            }}
          >
            TESTE SEUS
          </h3>
          <h3 
            className="kinan-font"
            style={{
              marginLeft: "70px"
            }}
          >
            Conhecimentos
          </h3>
          <p
            style={{fontSize:"1.6vw"}}  
          >
            Aprenda se divertindo!
          </p>
        </div>
        
        <div className="flex-horizontal">
        
          <Link href="/quiz1">
            <div className="card-bundle" style={{
                willChange: "transform", 
                transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", 
                transformStyle: "preserve-3d"
              }}>
                <div className="card-bundle-image-wrapper">
                <img 
                  src="https://i.pinimg.com/564x/90/25/1b/90251b9297c7016309001f1e4aef2064.jpg" 
                  loading="lazy" width="600" sizes="(max-width: 479px) 93vw, (max-width: 767px) 45vw, (max-width: 1919px) 21vw, 23vw" className="image-cover"/>
                </div>
                <div className="card-bundle-content-wrapper">
                  <h5 className="today-easter-font">Revisando seus conhecimentos</h5>
                </div>
            </div>
          </Link>
          
          <Link href="/quiz2">
            <div className="card-bundle margin-top" style={{
              willChange: "transform", transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)" ,
              transformStyle: "preserve-3d"
            }}>
              <div className="card-bundle-image-wrapper">
              <img 
                src="https://i.pinimg.com/564x/f6/3f/d1/f63fd1f18fc629eb499a38c4e80eee4a.jpg" 
                loading="lazy" width="600" sizes="(max-width: 479px) 93vw, (max-width: 767px) 45vw, (max-width: 1919px) 21vw, 23vw" className="image-cover"/>
              </div>
            <div className="card-bundle-content-wrapper">
              <h5 className="today-easter-font">Quiz dos Bichinhos</h5>
            </div>
            </div>
          </Link>
        </div> 
      </div>
    </div>
  </section>
    )
}