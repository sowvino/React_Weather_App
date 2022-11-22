/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import './Card.css';



const Card = ({ Max, Min, city, Date, Day, Night, Img, NightImg }) => {

    return (
        <div className="card tc">
            <h1 className="tc  bg-animate white pointer 
            bg-orange hover-bg-black mt2 i ttc">{city} </h1>
            <h2>{Date}</h2>
            <h3 className="tc bg-moon-gray dib br3 pa3 ma2 grow bw2 shadow-5'"> MAX: {Max}°C  </h3>
            <h3 className="tc bg-moon-gray dib br3 pa3 ma2 grow bw2 shadow-5'"> MIN: {Min}°C</h3>
            <h3>At Day:    {Day}</h3>
            <img src={Img} width='130px' alt="weather image"></img>
            <h3>At Night:  {Night}</h3>
            <img src={NightImg} width='130px' alt="weather image"></img>
        </div>


    )
}





export default Card;