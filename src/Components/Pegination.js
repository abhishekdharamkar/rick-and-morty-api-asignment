import React from "react";
import {incPageNumber, decPageNumber,}from "../Redux/Actions/characterActions";
import { useDispatch, useSelector } from "react-redux";
function Pagination() {
  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => state.pageNumber);
  return (
    <div className="container d-flex justify-content-center gap-4">
      <button
        onClick={() => {
          dispatch(decPageNumber());
        }}
        className=" btn btn-primary"
      >
        Prev
      </button>
      <span className="btn btn-success">{pageNumber}</span>
      <button
        onClick={() => {
          dispatch(incPageNumber());
        }}
        className=" btn btn-primary"
      >
        Next
      </button>
      
    </div>
  );
}
export default Pagination;
