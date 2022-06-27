import { useDispatch, useSelector } from "react-redux";
import { getAllCharacter } from "../Redux/Actions/characterActions";
import { React, useState, useEffect } from "react";
import axios from "axios";

function FavoriteChar() {
//remove
  const handle = (removename) =>  {

    var existingEntries = JSON.parse(localStorage.getItem("FavCharacter"));
    
    for (var i =0; i < existingEntries.length; i++){
    if (existingEntries[i].id === removename) {
      existingEntries.splice(i,1);
      window.location.reload();
       break;
    }
  }
   
    localStorage.setItem('FavCharacter', JSON.stringify(existingEntries));  
 };

    var existingEntries = JSON.parse(localStorage.getItem("FavCharacter"));
      
      const renderList = existingEntries?.map((c) => {
        const { id, image, name, species, gender, status } = c;
        
       // if(existingEntries.includes(name)){
        return (
          <div className="col-md " key={id}>
            <img src={image} alt={name} />
            <div className="btn btn-primary 3  col-sm-12">{name}</div>
            <div className="btn btn-danger 3  col-sm-12 "
                 onClick={() => 
            {handle(id)}}
              >Remove from FAVORITE </div>
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
        <div>
        <h2>FAVORITE CHARACTERS</h2>
        <hr/>
        <br/>
        <br/>
        <div className="container">
          <div className="row">{renderList}</div>
        </div>
        </div>
      );
}
export default FavoriteChar;