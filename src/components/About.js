
import { useEffect,useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
function About() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/about');
  };

  useEffect(() => {
    const aboutElement = aboutRef.current;

    const handleScroll = () => {
      const top = aboutElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      setIsVisible(top < windowHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="about" >
        <div className="row" style={{justifyContent:'center'}}>
          <div className="col-md-6" >
            <div className="customdiv">
              <h2 className="main-title text-center about-h2" style={{color:'#e8e1d9',fontSize:'48px',fontWeight:'400',marginTop:'10px'}}>
                About Us
              </h2>
                <p className="aboutp" >
                  Agri Earth Exports PVT LTD connects rural Indian farmers directly to consumers, eliminating middlemen exploitation. We prioritize top-quality agriculture products, adhering to global standards.
                   Founded in 2023, we operate from Maharashtra, leveraging expertise spanning over five decades in agriculture technology. 
                   Our commitment to maintaining robust supplier relationships ensures uncompromising quality. 
                   With stringent quality checks from farm to final product, we deliver excellence in every variant.
                </p>
                <button onClick={handleButtonClick} className="abtn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
