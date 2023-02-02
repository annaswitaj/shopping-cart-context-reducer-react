import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useCartState } from '../context/Context'
import { sorting } from './model'
import Rating from './Rating'

const Filters: React.FC = () => {
  const [rate, setRate] = useState(3)
  const {
    filterProductDispatch,
    filterProductState: { byStock, byFastDelivery, sort, byRating },
  } = useCartState()

  console.log(byStock, byFastDelivery, sort, byRating)

  return (
    <div className='filters'>
      <span className='title'>Filter Products</span>
      <span>
        <Form.Check
          inline
          label='Ascending'
          name='group1'
          type='radio'
          id={`inline-1`}
          onChange={() =>
            filterProductDispatch({
              type: 'SORT_BY_PRICE',
              payload: sorting[0],
            })
          }
          checked={sort === sorting[0] ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label='Descending'
          name='group1'
          type='radio'
          id={`inline-2`}
          onChange={() =>
            filterProductDispatch({
              type: 'SORT_BY_PRICE',
              payload: sorting[1],
            })
          }
          checked={sort === sorting[1] ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label='Include Out of Stock'
          name='group1'
          type='checkbox'
          id={`inline-3`}
          onChange={() =>
            filterProductDispatch({
              type: 'FILTER_BY_STOCK',
            })
          }
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label='Fast Delivery Only'
          name='group1'
          type='checkbox'
          id={`inline-4`}
          onChange={() =>
            filterProductDispatch({
              type: 'FILTER_BY_DELIVERY',
            })
          }
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={rate}
          onClick={(i) => {
            setRate(i + 1)
            filterProductDispatch({
              type: 'FILTER_BY_RATING',
              payload: i + 1,
            })
          }}
          style={{ cursor: 'pointer' }}
        />
      </span>

      <Button
        variant='light'
        onClick={() =>
          filterProductDispatch({
            type: 'CLEAR_FILTERS',
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  )
}

export default Filters
