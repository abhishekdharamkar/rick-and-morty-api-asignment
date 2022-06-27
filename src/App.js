import { React, useState, useEffect } from "react";
import "./App.css";
import HomeCard from "./Components/HomeCard";
import NavBar from "./Components/NavBar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllCharacter } from "./Redux/Actions/characterActions";
import Pagination from "./Components/Pegination";
import Filter from "./Components/Filters/Filter";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Searchbar from "./Components/Searchbar";
import { BrowserRouter, Routes, Route ,Link } from "react-router-dom";
import FavoriteChar from './Components/FavoriteChar';
function App() {
 
  ///save to store
  const character = useSelector((state) => state.allcharacter);
  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => state.pageNumber);
  const gender =useSelector((state)=>state.filterGender.gender);
  const status =useSelector((state)=>state.filterStatus.status);
  const species =useSelector((state)=>state.filterSpecies.species)
  const search = useSelector((state) => state.searchCharacter.text_search);
  const favoriteCharacter=useSelector((state=>state.favoriteCharacter.favorite_character))
  const f=useSelector((state=>state.addToFavourites))

  // console.log(search,"kkkk");
  
  console.log(favoriteCharacter,"ppppppp");
 let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&gender=${gender ||""}&status=${status || ""}&species=${species || ""}&name=${search || ""}`;

 // let api = `https://rickandmortyapi.com/api/character/result/?id=${favoriteCharacter}`;
  //let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&gender=${gender || ""}`;
  const fetchProducts = async () => {
    const response = await axios.get(api).catch((err) => {
      console.log("Err: ", err);
    });
    dispatch(getAllCharacter(response.data.results));
    // console.log("hi",response.data.results)
  };
  console.log("character", character);
  useEffect(() => {
    fetchProducts();
  }, [api]);

  return (
    <div className="App">
    
    <BrowserRouter>
      <Routes>
     <Route exact path="fav" element={<FavoriteChar/>}/>
     <Route exact path="/" element={
      <div>
     <NavBar/>
      <br />
      <Filter/>
      <br/>
      <Searchbar/>
      <br/>
      <Pagination/>
      <br />
      <HomeCard />
      </div>
      }>
      </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
