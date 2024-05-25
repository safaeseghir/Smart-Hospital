import React from "react";

import AboutBackgroundImage from "../Assets/Hospital-1.png";
import { BsFillPlayCircleFill } from "react-icons/bs";


const About = () => {
  return (
<div> 
  
    <div className="about-section-container">
      
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Smart Hospital

        </h1>
        <p className="primary-text">Gestion des Patients sans Effort :
        </p>
        <p className="secondary-text">
         Gérez facilement les informations des patients, suivez leur historique médical et mettez à jour les plans de traitement. Notre interface intuitive vous garantit d'avoir tous les détails nécessaires à portée de main, améliorant ainsi votre capacité à fournir des soins personnalisés.
        </p>
        <p className="primary-text"> Attribution des Chambres Simplifiée :
        </p>
        <p className="secondary-text">
        Optimisez l'attribution des chambres d'hôpital grâce à notre système intelligent de gestion des chambres. Attribuez rapidement des chambres en fonction des besoins et des disponibilités des patients, garantissant un processus fluide et efficace.


        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div></div>
  );
};

export default About;