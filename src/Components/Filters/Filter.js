import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";
import { setGender, setSpecies, setStatus,incPageNumber} from "../../Redux/Actions/characterActions";
import { useDispatch } from "react-redux";
const Filter = () => {
  const dispatch = useDispatch();
  let clear = () => {
    dispatch(setGender(""));
    dispatch(setSpecies(""));
    dispatch (setStatus(""));
    dispatch(incPageNumber(1));
    window.location.reload(false);
  };
  return (
    <div className=" container col-lg-12 col-12 mb-5">
      
     
      <div className="accordion" id="accordionExample">
        <Status
        
        />
        <Species
        
        />
        <Gender
         
        />
      </div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="text-primary text-decoration-underline text-center mb-3"
      >
        Clear Filters
      </div>
    </div>
  );
};

export default Filter;