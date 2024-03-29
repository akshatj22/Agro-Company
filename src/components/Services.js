
import React from "react";
import MCard from "./mainCard";
import { useNavigate } from "react-router-dom";
import on from "../img/Eggs_on_bowl_-4-removebg-preview 1.png"
import egg from "../img/red-onion-removebg-preview 1.png"
import ban from "../img/18965815-removebg-preview 1.png"
function Services() {
  const navigate = useNavigate();
  const productsData = [
    {
      title: "Onion Powder",
      img: egg,
      text: "Agri Earth Exports offers top-quality onion powder: convenient, flavorful, enhances any dish effortlessly.",
      route:'/onion-powder',
    },
    {
      title: "Banana Powder",
      img: ban,
      text: "Elevate your menu with our premium banana powder a versatile ingredient for culinary innovation.",
      route:'/banana-powder',
    },
    {
      title: "Egg Powder",
      img: on,
      text: "Explore superior egg powder: a convenient, nutritious addition for cooking and baking adventures.",
      route: '/egg-powder',
    },
  ];
  
  const handleCardClick = (route) => {
    navigate(route);
  };

  const generateProductCards = () => {
    return (
      <div className="row" >
        {productsData.map((product, index) => (
          <div key={index} className="col-md-4 mb-2" onClick={() => handleCardClick(product.route)}>

            <MCard title={product.title} img={product.img} text={product.text} route={product.route} />
          </div>
        ))}
      </div>
    );
  };
  

  return (
    <div className="container services" style={{paddingTop:'60px',marginBottom:'-100px'}}>
      <h2 className="main-title text-center" >Our Products</h2>
      {/* <div className="bg-img">      */}
      <div className="card-cover">
        <div className="col-md-12 ">
          {generateProductCards()}
        </div>
      {/* </div> */}
       </div>
    </div>
  );
}

export default Services;


