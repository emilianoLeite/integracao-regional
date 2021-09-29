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
        <h3>Teste seus conhecimentos</h3>
      <p className="width-70">Includes all of the resources that helped me get $10K&nbsp;clients. It took me a long time to figure it out. That's why I want to help you get there faster.</p>
      </div>
      <div className="flex-horizontal">
        <div className="card-bundle margin-top" style={{
          willChange: "transform", 
          transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", 
          transformStyle: "preserve-3d"
        }}>
        <div className="card-bundle-image-wrapper">
        <img src="https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60e19250a3e8565db4b0fe13_follower-guide.jpg" loading="lazy" width="600" sizes="(max-width: 479px) 93vw, (max-width: 767px) 45vw, (max-width: 1919px) 21vw, 23vw" srcSet="https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60e19250a3e8565db4b0fe13_follower-guide-p-500.jpeg 500w, https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60e19250a3e8565db4b0fe13_follower-guide-p-1080.jpeg 1080w, https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60e19250a3e8565db4b0fe13_follower-guide.jpg 1200w" alt="A desk with a computer and branding assets on it" className="image-cover"/>
        </div>
      <div className="card-bundle-content-wrapper">
        <h5>Brand Strategy Template</h5>
      </div>
        </div>
        
        <div className="card-bundle" style={{
          willChange: "transform", transform: "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)" ,
          transformStyle: "preserve-3d"
        }}>
          <div className="card-bundle-image-wrapper">
          <img src="https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60e87a117dcade4fd9a909f1_crash-course.jpg" loading="lazy" width="600" sizes="(max-width: 479px) 93vw, (max-width: 767px) 45vw, (max-width: 1919px) 21vw, 23vw" srcSet="https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60e87a117dcade4fd9a909f1_crash-course-p-500.jpeg 500w, https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60e87a117dcade4fd9a909f1_crash-course.jpg 1200w" alt="2 isometric papers laid on a wall with a cactus plant in front." className="image-cover"/>
          </div>
        <div className="card-bundle-content-wrapper">
          <h5>Proposal Template</h5>
        </div>
        </div>
      </div>
     
      </div>
    </div>
    
    
        
  
  </section>
    )
}