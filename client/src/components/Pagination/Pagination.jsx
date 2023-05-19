import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextPage, prevPage } from '../../redux/actions';
import './Pagination.css'

const Paginate = ({ cantPages }) => {
  const numPage = useSelector((state) => state.numPage);
  const dispatch = useDispatch();

  const next = () => {
    dispatch(nextPage());
  };

  const prev = () => {
    dispatch(prevPage());
  };

  return (
    <div className='paginate'>
      {numPage > 1 && (
          <div className='control'>
            <button onClick={prev} className='btn'>⤌</button>
            <p>{numPage - 1}</p>
          </div>
      )}

      <h2 className='h2'>{numPage}</h2>

      {numPage < cantPages && (
          <div className='control'>
            <p>{numPage + 1}</p>
            <button onClick={next} className='btn'>⤍</button>
          </div>
      )}
    </div>
  );
};

export default Paginate;
