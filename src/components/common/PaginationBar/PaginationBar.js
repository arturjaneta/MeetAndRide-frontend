import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getPagination, range, BREAK } from "./utils";

const PaginationBar = ({
  totalPages,
  currentPage = 1,
  pageNeighbours = 1,
  onPageChange,
}) => {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
      const p = getPagination(startPage, endPage, totalPages, totalNumbers);
      setPages([1, ...p, totalPages]);
    } else {
      setPages(range(1, totalPages));
    }
  }, [totalPages, currentPage, pageNeighbours]);

  const handleClick = (page) => (e) => {
    onPageChange(page);
    e.target.blur();
  };

  const handlePreviousPage = (e) => {
    onPageChange(currentPage - 1);
    e.target.blur();
  };

  const handleNextPage = (e) => {
    onPageChange(currentPage + 1);
    e.target.blur();
  };

  return pages !== [] ? (
    <nav
      className="pagination is-centered is-rounded"
      role="navigation"
      aria-label="pagination"
    >
      <button
        class="button pagination-previous"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        Poprzednia
      </button>
      <button
        class="button pagination-next"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Następna
      </button>
      <ul className="pagination-list">
        {pages.map((page, index) => {
          if (page === BREAK)
            return (
              <li key={index}>
                <span className="pagination-ellipsis">&hellip;</span>
              </li>
            );

          return (
            <li key={index}>
              <button
                className={`button pagination-link${
                  page === currentPage ? " is-current" : ""
                }`}
                onClick={handleClick(page)}
              >
                {page}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  ) : null;
};

export default PaginationBar;

PaginationBar.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  pageNeighbours: PropTypes.number,
  onPageChange: PropTypes.func,
};
