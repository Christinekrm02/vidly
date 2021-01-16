import React from "react";

const Pagination = props => {
  return (
    <nav>
      <ul className="pagination">
        <li className="page-items">
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content*/}
          <a href="#!" className="page-link">
            1
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
