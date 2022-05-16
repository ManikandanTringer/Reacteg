import React from "react"
import '../App.css'
import trollface from "../images/trollface.png"


export default function Header(){
 return (
		<header className="header">
            <img className="header-image"src={trollface} alt="" />
            <div className="title-head">
            <h2  className="header-title">Meme Generator</h2>
            <h4  className="header-project">React Course - Project 3</h4>
            </div>
		</header>
)	
}