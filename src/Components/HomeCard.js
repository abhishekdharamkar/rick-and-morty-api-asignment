
import { useSelector } from "react-redux";
import "./HomeCard.css";
import React, { useState } from 'react';
function HomeCard(props) {

  const character = useSelector((state) => state.allCharacter.character);

  const handle = (objectC) =>  {
    var existingEntries = JSON.parse(localStorage.getItem("FavCharacter"));
    if(existingEntries == null ) {existingEntries = [];}
    const ids = existingEntries.map((c) => c.id);
    if((ids).includes(objectC.id)){
      
    }
    else{
       existingEntries.push(objectC);
    }
    localStorage.setItem('FavCharacter', JSON.stringify(existingEntries));  
    //   }
    //  }
    
    
      
 };

  const renderList = character?.map((c) => {
    const { id, image, name, species, gender, status } = c;
    

    return (
      <div className="col-md " key={id}>
        <img src={image} alt={name} />
        <div className="btn btn-primary 3  col-sm-12">{name}</div>
        <div className="btn btn-success 3  col-sm-12 "
            onClick={() => 
            {handle(c)}}

          >ADD TO FAVORITE </div>
        <div className="pack main">
          <div className="col-sm-3 left">
            <div className="">Status</div>
            <div className="">Species</div>
            <div className="">Gender</div>
          </div>
          <div className="col-sm-9 right">
            <div className="status">  {status === "Alive" ? (
          <span className="text-success">{status}</span>
        ) : status === "Dead" ? (
          <span className="text-danger">{status}</span>
        ) : (
          <span className="text-warning">{status}</span>
        )}</div>
            <div className="">{species}</div>
            <div className="">{gender}</div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{renderList}</div>
    </div>
  );
}
export default HomeCard;
