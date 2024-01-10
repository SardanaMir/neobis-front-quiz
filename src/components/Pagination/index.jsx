import React, {useState} from 'react';
import {setCurrentPage} from '../../redux/slices/paginationSlice'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Pagination.module.scss'

function Pagination(){
  const [page, setPage] = useState(null)
  const dispatch = useDispatch();
  const totalPages = useSelector(state => state.pagination.totalPages)

  const handlePageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
    setPage(pageNumber)
  };

  const handlePrevPage = () =>{
    if(page > 1){
      dispatch(setCurrentPage(page-1));
      setPage(page-1)
    }
  }
  const handleNextPage = () =>{
    if(page < totalPages){
      dispatch(setCurrentPage(page + 1));
      setPage(page + 1)
    }
  }

  return (
    <>
      <div className={styles.root}>
        <li onClick={handlePrevPage}>{'<<'}</li>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <li className={styles.btn} key={page} onClick={() => handlePageChange(page)}>
            {page}
          </li>
        ))}
        <li onClick={handleNextPage}>{'>>'}</li>
      </div>
    </>
  );
};

export default Pagination;



