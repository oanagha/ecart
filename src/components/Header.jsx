import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { searchWithKey } from '../redux/Slices/productSlice';
function Header() {
  const { items } = useSelector((state) => state.wishReducer)
  const { cart } = useSelector((state) => state.cartReducer)

      const[key,setKey]=useState([])
      const dispatch = useDispatch()
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" className='ms-2'>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
              {' '}
              <i className="fa-solid fa-cart-arrow-down fs-3" style={{ color: "#e84fa1", }} />
              E-Cart
            </Link>
          </Navbar.Brand>

          <div className='d-flex'>
            <div className='d-flex'>
              <input type="text" placeholder='Enter Product' className='form-control me-2 ' onChange={(e)=>{setKey(e.target.value)}}/>
              <button className='btn btn-dark me-2' onClick={()=>{dispatch(searchWithKey(key))}}>search</button>
            </div>


            <Link className='btn border border-1  border-dark me-3   ' to={'/wish'}>
              <i className="fa-solid fa-hand-holding-heart me-1 fs-5" style={{ color: "#ea4d6c", }} />
              WishList
              {''}
              <span className='badge bg-dark ms-1'>
                {items?.length}

              </span>
            </Link>
            <Link className='btn border border-1 border-dark ' to={'/cart'}>
              <i className="fa-solid fa-cart-plus me-1 fs-5" style={{ color: "#088e06", }} />
              Cart
              <span className='badge bg-dark ms-1'>
                {cart?.length}

              </span>
            </Link>
          </div>
          
        </Container>
      </Navbar>
    </>
  )
}

export default Header