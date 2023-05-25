import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nextPage, prevPage } from '../../redux/actions'
import './Pagination.css'

const Paginate = ({ cantPages }) => {
  const numPage = useSelector((state) => state.numPage)
  const allPokemons = useSelector((state) => state.allPokemons)
  const dispatch = useDispatch();

  const next = () => {
    dispatch(nextPage())
  }

  const prev = () => {
    dispatch(prevPage())
  }

  return (
    <div className='paginate'>

      {numPage > 1 && (

          <div className='control'>

            <button onClick={prev} className='btnPage'>{'<<'}</button>

            {
              numPage > 3 && (<p className='numPage'>{numPage - 3}</p>)
            }

            {
              numPage > 2 && (<p className='numPage'>{numPage - 2}</p>)
            }

            <p className='numPage'>{numPage - 1}</p>
            
          </div>
      )}

      
      {
    
      allPokemons.length !== 0 &&  <h2 className='numPage'>{numPage}</h2>
      }

      {numPage < cantPages && (

          <div className='control'>

            <p className='numPage'>{numPage + 1}</p>

            {
              numPage < cantPages - 2 && (<p className='numPage'>{numPage + 2}</p>)
            }

            {
              numPage < cantPages - 3 && (<p className='numPage'>{numPage + 3}</p>)
            }

            <button onClick={next} className='btnPage'>{'>>'}</button>
          </div>
      )}
    </div>
  )
}

export default Paginate;
