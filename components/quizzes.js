import Link from 'next/link'

export default function Quizzes() {
  return (
  <section style={{marginBottom: "50px"}}>
    <div className="container no-padding-mobile">

      <div className="w-layout-grid grid-half">
      <Link href="/quiz1">
        <a href="#" className="grid-link w-inline-block" data-bcup-haslogintext="no">
          <div className="grid-wrapper">
          <div className="grid-image-wrapper">
          <img src="http\s://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60e19250a3e8565db4b0fe13_follower-guide.jpg" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 79vw, (max-width: 991px) 62vw, (max-width: 1919px) 43vw, 667.407470703125px" srcSet="https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60e19250a3e8565db4b0fe13_follower-guide-p-500.jpeg 500w, https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60e19250a3e8565db4b0fe13_follower-guide-p-1080.jpeg 1080w, https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60e19250a3e8565db4b0fe13_follower-guide.jpg 1200w" alt="A desk with a computer and branding assets on it" className="image-cover" style={{"transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}/>
          
          </div>
          <div className="grid-content-wrapper">
            <h4>Fundamentals of a thriving business</h4>
          
          </div>
          <div className="grid-cta">
            <div className="button-text" style={{"transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}>Buy Course
          
          </div>
          <img src="https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60d0ba000e4b763ca38903e4_btn_arrow.svg" loading="lazy" alt="" className="button-arrow" style={{"transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}/>
          
          </div>
          
          </div>
        
        </a>
      </Link>
      <Link href="/quiz2">
        <a href="#" className="grid-link w-inline-block" data-bcup-haslogintext="no">
          <div className="grid-wrapper">
            <div className="grid-image-wrapper">
              <img src="https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60e87a117dcade4fd9a909f1_crash-course.jpg" loading="lazy" width="600" sizes="(max-width: 479px) 92vw, (max-width: 767px) 85vw, (max-width: 991px) 79vw, (max-width: 1919px) 54vw, 846.8519287109375px" srcSet="https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60e87a117dcade4fd9a909f1_crash-course-p-500.jpeg 500w, https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60e87a117dcade4fd9a909f1_crash-course.jpg 1200w" alt="2 isometric papers laid on a wall with a cactus plant in front." className="image-cover" style={{"transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}/>
          
            </div>
            <div className="grid-content-wrapper">
              <h4>The perfect proposal</h4>
            </div>
            <div className="grid-cta">
              <div className="button-text">Testes</div>
      
      
              <img 
                src="https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60d0ba000e4b763ca38903e4_btn_arrow.svg" 
                loading="lazy" alt="" className="button-arrow" 
                style={{
                  "transform": "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", 
                  transformStyle: "preserve-3d"
                }}
              />
            </div>
          </div>
        
        </a>
      </Link>
      
      
      </div>
    </div>
  </section>
    )
}