import React from "react";
import gallery from "../images/gallery.png"

export default function Players(){
    return(
     <section className="head">
        <img src={gallery} alt="" className="player-album"/>
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
    </section>
    )
}