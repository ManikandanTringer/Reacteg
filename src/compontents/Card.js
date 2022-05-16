import React from "react";
import star from "../images/star.png"
import dot from "../images/dot.png"
export default function Card(props){
    return(
        <div className="card">
            <img className="card-image" src={props.img} alt=""  />
            <div className="separate-card">
                <img src={star} alt="" className="card-star" />
                <span>{props.rating} </span>
                <span className="gray" > ({props.reviewCount}) </span>
                <img  className="gray" scr={dot} alt="" />
                <span className="gray" >{props.country}</span>

            </div>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price}</span> / person</p>

        </div>
    )
}