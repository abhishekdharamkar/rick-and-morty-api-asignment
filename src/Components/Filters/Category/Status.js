import React from "react";
import { setGender, setSpecies, setStatus } from "../../../Redux/Actions/characterActions";

import { useDispatch } from "react-redux";
const Status = ({ }) => {
    const dispatch = useDispatch();
  let status = ["Alive", "Dead", "Unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-4">
          {status.map((items, index) => {
            return (
        <label
          onClick={(x) => {
            dispatch(setStatus(items));
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

export default Status;