import React from "react";
import { setGender, setSpecies, setStatus } from "../../../Redux/Actions/characterActions";

import { useDispatch } from "react-redux";
const Species = ({ updateSpecies, updatePageNumber }) => {
  const dispatch = useDispatch();
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  return (
    <div className="accordion-item ">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Species
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-4">
          {species.map((items, index) => {
            return (
        <label
          onClick={(x) => {
            dispatch(setSpecies(items));
            updatePageNumber(1);
          }}
          className="btn btn-outline-success"
        >
          {items}
        </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Species;