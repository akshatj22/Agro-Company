import { Link, animateScroll as scroll } from 'react-scroll'
import logo from "../img/logo.png"
function Footer() {


  return (
    <footer>
      <div className="container footer ">
        <div className="row" style={{height:'3rem'}}>
          <div className="side1">
            <div className="row" style={{alignItems:'flex-end'}}>
              <div className="col-md-3" >
                {/* <h1 className="logo">Agro Company</h1> */}
                <img src={logo}  className='logoimg' style={{marginTop:'15px'}} />
                <p className="footer-text">
                  {/* Lorem ipsum Here are thriteen health benefits of apples Lorem */}
        
                </p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Important Link</p>
                <ul>
                  <li>
                  <Link   
                         spy={true}
                         smooth={true}
                         duration={1000}
                         to="header"
                  > Home </Link>
                  </li>
                  <li>
                  <Link to="services" spy={true} smooth={true} duration={1000} > Our Products </Link>
                  </li>
                  <li>
                  <Link to="about" spy={true} smooth={true} duration={1000}>About Us  </Link>
                  </li>
                  <li>
                  <Link to="enquiry" spy={true} smooth={true} duration={1000}> Contact  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row" style={{height:'13rem'}}>
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                    <Link to="#" >A / P - junction, Tal - Indapur, Dist - Pune, Maharashtra - India - 413114</Link>
                  </li>
                  <li>
                    <Link to="#" >+91-7757941111</Link>
                  </li>
                  <li>
                    <Link>+91-8605051135</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3" style={{marginRight:'10px'}}>
                <p className="footer-title">Social Media</p>
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/agriearthexports/" > Linkedin</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/agriearthexports/ " > Instagram</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://x.com/agriearthexport?t=Uy2p2eYBC9gzVQWcWegLfg&s=09" > Twitter</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}
export default Footer;
