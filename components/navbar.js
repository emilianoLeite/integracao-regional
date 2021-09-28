import Link from 'next/link'

export default function Navbar(){
  return (
    <div data-collapse="none" data-animation="default" data-duration="400" data-w-id="c943ea70-6d38-dd90-a640-e8f27fb8f5a2" role="banner" className="navigation w-nav" style={{"opacity": 1}}>
      <div className="nav-container w-container">
      <a href="/" aria-current="page" className="brand w-nav-brand w--current" aria-label="home" >
      <img src="https://assets.website-files.com/60d0b9d684d42a0424dfb8c5/60e1ff1316de164832251ae8_quicklinks-logo2.svg" loading="lazy" alt="Quicklinks Logo"/>
    </a>
    <nav role="navigation" className="nav-menu w-nav-menu">
      <a href="https://www.pinterest.com/" target="_blank" className="social-link w-inline-block" >
        <div className="social-back-bcg"></div>
        <div className="social-top-bcg"></div>
        <div className="button-text">Sobre</div>
      </a>
      <a href="https://www.instagram.com/" target="_blank" className="social-link w-inline-block" >
        <div className="social-back-bcg"></div>
        <div className="social-top-bcg"></div>
        <div className="button-text">Tipos</div>
        </a>
        <Link href="/about">
          <a className="social-link w-inline-block" >
            <div className="social-back-bcg"></div>
            <div className="social-top-bcg"></div>
            <div className="button-text">Testes</div>
          </a>
        </Link>
        
    </nav>
          <div className="w-nav-button" style={{"-webkit-user-select": "text"}} aria-label="menu" role="button" tabIndex="0" aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false" ><div className="w-icon-nav-menu"></div></div></div><div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
          </div>
  )
}