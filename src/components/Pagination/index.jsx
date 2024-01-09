// import React from 'react'
// import ReactPaginate from 'react-paginate';
// import styles from './Pagination.module.scss'

// const Pagination = ({currentPage, onChangePage}) => {
//   return (
//     <div>
//         <ReactPaginate
//         className={styles.root}
//         breakLabel="..."
//         nextLabel=">>"
//         onPageChange={event => onChangePage(event.selected+1)}
//         pageRangeDisplayed={5}
//         pageCount={3}
//         previousLabel="<<"
//         renderOnZeroPageCount={null}
//       />
//     </div>
//   )
// }

// export default Pagination

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/slices/paginationSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.pagination.currentPage);
  const totalPages = useSelector((state) => state.pagination.totalPages);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
    // Тут вы можете добавить логику для загрузки данных соответственно новой странице
  };

  return (
    <div>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          disabled={currentPage === page}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
