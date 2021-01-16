import React from "react";
import _ from "lodash";

const Pagination = props => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  /* console.log(currentPage); */

  /* raise pagesCount to nearest whole value because floating points still return a page */
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            /* highlights each page per active class */
            className={page === currentPage ? "page-item active" : "page-item"}>
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content*/}
            <a
              href="#!"
              className="page-link"
              onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
