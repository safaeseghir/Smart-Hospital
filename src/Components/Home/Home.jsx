import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import BannerBackground from "../../Assets/home-banner-background.png";
import BannerImage from "../../Assets/smart_hos.png";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate();
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        
        <div className="home-text-section">
          <h1 className="primary-heading">
          Smart Hospital : 
          </h1>
          <p className="primary-text">
          Votre Solution Ultime pour la Gestion des Patients et des Chambres
          </p>
          <button onClick={() =>navigate("/Login")} className="secondary-button">
            Se connecter <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};
 
export default Home;