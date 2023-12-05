import React from "react";
import "./pagination.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, previousPage } from "../features/pagination/paginationSlice";

function Pagination() {
  const { patients } = useSelector((state) => state.patients);
  const { currentPage, postsPerPage } = useSelector(
    (state) => state.pagination
  );
  let pages = Math.ceil(patients.length / postsPerPage);
  const dispatch = useDispatch();

  function goToNextPage() {
    dispatch(nextPage());
  }

  function goToPreviousPage() {
    dispatch(previousPage());
  }

  return (
    <div>
      <div className="pagination">
        <button
          onClick={goToPreviousPage}
          className={`prev_btn ${currentPage === 1 ? "disabled" : ""}`}
        >
          {currentPage === 1 ? (
            ""
          ) : (
            <FaArrowAltCircleLeft className="page-btn" />
          )}
          Previous
        </button>
        <div className="pages">
          <button>{currentPage}</button>
          <p>of</p>
          <button className="total_pages">{pages}</button>
        </div>
        <button
          onClick={goToNextPage}
          className={`prev_btn ${currentPage === pages ? "disabled" : ""}`}
        >
          {currentPage === pages ? (
            ""
          ) : (
            <FaArrowAltCircleRight className="page-btn" />
          )}
          Next
        </button>
      </div>
    </div>
  );
}
export default Pagination;
