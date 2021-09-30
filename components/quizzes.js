import Link from 'next/link'

export default function Quizzes() {
  return (
  <section style={{marginBottom: "50px"}}>
    
    <div className="split-section wf-section">
      <div className="split-section-image-half">
        <div className="split-image bundle-image"></div>
      </div>
     
      <div className="split-section-content-half">
        <div className="title-wrapper">
          <h2 id="quizzes">Teste seus conhecimentos</h2>
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
                <img src="https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60e19250a3e8565db4b0fe13_follower-guide.jpg" loading="lazy" width="600" sizes="(max-width: 479px) 93vw, (max-width: 767px) 45vw, (max-width: 1919px) 21vw, 23vw" srcSet="https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60e19250a3e8565db4b0fe13_follower-guide-p-500.jpeg 500w, https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60e19250a3e8565db4b0fe13_follower-guide-p-1080.jpeg 1080w, https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60e19250a3e8565db4b0fe13_follower-guide.jpg 1200w" alt="A desk with a computer and branding assets on it" className="image-cover"/>
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
              <img src="https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60e87a117dcade4fd9a909f1_crash-course.jpg" loading="lazy" width="600" sizes="(max-width: 479px) 93vw, (max-width: 767px) 45vw, (max-width: 1919px) 21vw, 23vw" srcSet="https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60e87a117dcade4fd9a909f1_crash-course-p-500.jpeg 500w, https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60e87a117dcade4fd9a909f1_crash-course.jpg 1200w" alt="2 isometric papers laid on a wall with a cactus plant in front." className="image-cover"/>
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