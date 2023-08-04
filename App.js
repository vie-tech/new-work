import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Navbar from "./Navbar"
import Hero from "./Hero"
import Time from "./Time"
import Card from "./Card"
import Carddata from "./Carddata"

 

function App() {

  const cardElements = Carddata.map(data => {
 
    return <Card
    
    key={data.id}
    image={data.image}
    title={data.title}
    price={data.price}
    openSlots={data.openSlots}
    status={data.status}
    region={data.region}
    rating={data.stats.rating}
    review={data.stats.review}

    /* ALTERNATIVE
    items ={items} 
    {...items} would not need the items props in Card.js*/
    />
  })
  console.log(cardElements)


   

  return (
    <>
      <Navbar/>
      <Hero/>
     

      <div className="photocards">
      {cardElements}
      </div>

 
    </>
  );
}
export default App;
