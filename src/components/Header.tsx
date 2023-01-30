import React from 'react'
import {
  Navbar,
  FormControl,
  Nav,
  Dropdown,
  Badge,
  Button,
} from 'react-bootstrap'
import Container from 'react-bootstrap/esm/Container'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useCartState } from '../Context'

const Header: React.FC = () => {
  const { cart } = useCartState()

  return (
    <Navbar bg='dark' variant='dark' style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to='/'>Shopping cart</Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link to='/cart'>Cart ({cart.length})</Link>
        </Navbar.Brand>
        <Navbar.Text className='search'>
          <FormControl
            style={{ width: 500 }}
            placeholder='Search a product'
            className='m-auto'
          />
        </Navbar.Text>

        <Nav>
          <Dropdown align='end'>
            <Dropdown.Toggle variant='success'>
              <FaShoppingCart color='white' fontSize='25px' />
              <Badge>10</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              {/* {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <span className='cartitem' key={prod.id}>
                      <img
                        src={prod.image}
                        className='cartItemImg'
                        alt={prod.name}
                      />
                      <div className='cartItemDetail'>
                        <span>{prod.name}</span>
                        <span>₹ {prod.price.split('.')[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize='20px'
                        style={{ cursor: 'pointer' }}
                        onClick={() =>
                          dispatch({
                            type: 'REMOVE_FROM_CART',
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to='/cart'>
                    <Button style={{ width: '95%', margin: '0 10px' }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
              )} */}
              <span style={{ padding: 10 }}>Cart is Empty!</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
