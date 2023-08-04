import React from "react"
import Time from "./Time"
import group from "./react photos/line of people.jpg"

export default function Hero(){

    return(
        <>
         <Time/>
         <img src={group} className="hero-image" alt=""/>
      <div className="first-header">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by
          <br /> one-of-a-kind hosts - all without leaving <br /> home.{" "}
        </p>
      </div> 
        </>
    )
}  