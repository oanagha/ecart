import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromCart,increaeQuantity ,decreaseQuantity, checkOut} from '../redux/Slices/cartSlice'
function Cart() {
  const { cart } = useSelector((state) => state.cartReducer)
  const dispatch=useDispatch()
  return (
    <>
      <div className='container-fluid p-4'>
        <h3>Cart Summary</h3>
        <Row>
          <Col sm={12} md={8}>
          {
            cart.length>0?
            <table className='table table-bordered border shadow border-4 border-dark'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Image</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                cart?.map(item=>(
                  <tr>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>
                    <img src={item.thumbnail} alt="can't load" />
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <button className='btn'onClick={()=>{dispatch(increaeQuantity(item.id))}}>+</button>
                    <input type="text" className='form-control w-25 ' value={item.quantity} />
                    <button className='btn' onClick={()=>{dispatch(decreaseQuantity(item.id))}}>-</button>
                  </td>
                  <td>
                    <button className='btn' onClick={()=>{dispatch(removeFromCart(item.id))}}>
                      <i className="fa-solid fa-trash" style={{ color: "#d70909", }} />
                    </button>
                  </td>
                </tr>
                ))
              }
             
             
            </tbody>
          </table>
          :
          <h3>No Items Added Yet!!</h3>
          }
           
          </Col>
          <Col sm={12} md={4}>
            <div className='border shadow p-5 border-3'>
              <h4>Total Items : {cart?.length}</h4>
              <h4>Total Amount : {cart?.reduce((prev,item)=>prev+(item.price*item.quantity),0)}</h4>
              <div className='mt-2 d-grid'>
                <button className='btn btn-success' onClick={()=>dispatch(checkOut())}>Checkout</button>
              </div>
            </div>
            <Link className='btn btn-outline-info mt-5' to={'/'}>shop More</Link>
          </Col>
        </Row>
      </div>
    </>
  )
}




export default Cart