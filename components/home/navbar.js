import Link from 'next/link'

export default function Navbar(){
  return (
    <div data-collapse="none" data-animation="default" data-duration="400" data-w-id="c943ea70-6d38-dd90-a640-e8f27fb8f5a2" role="banner" className="navigation w-nav" style={{"opacity": 1}}>
      <div className="nav-container w-container">
      
    <nav role="navigation" className="nav-menu w-nav-menu">
      <a 
        className="social-link w-inline-block" 
        style={{textDecoration: "none"}}
      >
        <div className="social-back-bcg"></div>
        <div className="social-top-bcg">

        </div>
        <div className="button-text dirtylife-font"
          style={{fontSize: "2em"}}
        >1</div>
      </a>
      <a 
        className="social-link w-inline-block" 
        style={{textDecoration: "none"}}
      >
        <div className="social-back-bcg"></div>
        <div className="social-top-bcg">

        </div>
        <div className="button-text dirtylife-font"
          style={{fontSize: "2em"}}
        >2</div>
        </a>
        <Link href="/about">
          <a 
            className="social-link w-inline-block"
            style={{textDecoration: "none"}}
          >
            <div className="social-back-bcg"></div>
            <div className="social-top-bcg">

            </div>
            <div className="button-text dirtylife-font"
              style={{fontSize: "2em"}}
            >3</div>
          </a>
        </Link>
        
    </nav>
    <div className="w-nav-button" style={{"WebkitUserSelect": "text"}} aria-label="menu" role="button" tabIndex="0" aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false" >
      <div className="w-icon-nav-menu">
      </div>
    </div>
    </div>
    <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0">

    </div>
    </div>
  )
}