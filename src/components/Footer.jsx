import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <> 
    <div className='container-fluid bg-dark text-light p-4'>
        <Row>
           <Col>
           <h2 >Ecom-Cart</h2>
           <p style={{textAlign:'justify'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed cumque ex doloribus obcaecati consequuntur laborum
             in nemo voluptate, nisi ipsa commodi culpa distinctio, ipsam porro laudantium atque vitae officiis! Aperiam?</p>
           </Col>
           <Col>
           <h3 className='text-center'>LINKS</h3>
           <div className='d-flex flex-column justify-content-between text-center'>
             <Link className='text-info' to={'/'}>Home</Link>
             <Link className='text-info'to={'/wish'}>Wishlist</Link>
             <Link className='text-info' to={'/cart'}>Cart</Link>
           </div>
           </Col>
           <Col >
           <h3>FEEDBACKS</h3>
           <textarea name="" id="" className='form-control'></textarea>
           <button className='btn btn-success mt-2'>Send</button>
           </Col>
           
        </Row>
    </div>
    </>
  )
}

export default Footer