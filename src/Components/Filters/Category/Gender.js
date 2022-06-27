import React from "react";


import { setGender, setSpecies, setStatus } from "../../../Redux/Actions/characterActions";

import { useDispatch } from "react-redux";
const Gender = ({ updateGender, updatePageNumber }) => {
  let genders = ["female", "male", "genderless", "unknown"];
  const dispatch = useDispatch();
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="true"
          aria-controls="collapseThree"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-4">
          {genders.map((items, index) => {
            return (
        <label
          onClick={(x) => {
            dispatch(setGender(items));
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

export default Gender;