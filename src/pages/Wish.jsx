import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { removeFromwishList } from '../redux/Slices/wishSice';
import { addToCart } from '../redux/Slices/cartSlice';
function Wish() {
  const { items } = useSelector((state) => state.wishReducer)
  console.log(items);

  const dispatch=useDispatch()

  const handleAddToCart=(data)=>{
    console.log(data);
  dispatch(addToCart({...data}))
 dispatch(removeFromwishList(data.id))
  }
  

  return (
    <>
      <h2 className='my-3 text-center'>WishList</h2>
      <div className='row container-fluid p-3'>

        {
          items?.length > 0 ?
            items?.map(wish => (
              <div className='col-3'>
                <div className="card h-100">
                  <img className="card-img-top" src={wish.thumbnail} alt="..." />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">{wish.title}</h5>
                      ${wish.price}
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
                    <button className='btn' onClick={()=>{dispatch(removeFromwishList(wish.id))}}>
                    <i className="fa-solid fa-heart-circle-xmark fs-3" style={{color: "#e8113c",}} />
                    </button>
                    <button className='btn' onClick={()=>handleAddToCart(wish)}>
                    <i className="fa-solid fa-cart-plus fs-3" style={{color: "#0c926a",}} />
                    </button>
                  </div>
                </div>
              </div>
            ))
            :
            <h3>No Items Added Yet !!</h3>
        }

      </div>
    </>
  )
}

export default Wish

