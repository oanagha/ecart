import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductThunk, nextPage, prevPage } from '../redux/Slices/productSlice';
import Spinner from 'react-bootstrap/Spinner';


function Home() {
  const { products, error, loading,productsPerPage,currentPage} = useSelector((state) => state.productReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProductThunk())
    console.log(products);
  }, [])

  const totalPages=Math.ceil(products?.length/productsPerPage)
  const lastproductIndex=currentPage*productsPerPage
  const firstProductindex=lastproductIndex-productsPerPage
  const visibleProducts=products?.slice(firstProductindex,lastproductIndex)

 const handleNext=()=>{
  if(currentPage<totalPages){
    dispatch(nextPage())
  }
 }
 const handlePrev=()=>{
  if(currentPage>1){
    dispatch(prevPage())
  }
 }
  return (
    <>
      <header className="bg-secondary py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <Carousel>
              <Carousel.Item>
                <img src="https://capturly.com/blog/wp-content/uploads/2018/01/eCommerce-website-search-customer-experience.jpg"
                  alt="img1" className='' width={"60%"} height={"330px"} />
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-visualizing-e-commerce-in-benin-through-3d-rendering-for-social-media-image_3640688.jpg"
                  alt="img2" className='' width={"60%"} height={"330px"} />
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://cdn.prod.website-files.com/61f16f767ddbd57caf367904/64a8323953b353ae788d7696_kLOGIdcf3lXmKlHu038RnFoWMenBNVNRqRT0xoJ8ixOVRRXqh73wwbhrdlA17e4YMZdx2jMtRWdN580yB5Z9b0DzOWamPgeLLsGeiDxn_zYZf4q2VDhztWGJc-hvH0n8u_PJtCS3Ak-kxDo8GIJ0QN0.png"
                  alt="img3" className='' width={"60%"} height={"330px"} />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </header>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
              loading ?
                <h3>
                  <Spinner animation="border" role="status">
                  </Spinner>
                  <span >Loading...</span>
                </h3>
                :
                (
                  error ?
                    <h3>{error}</h3>
                    :
                    <>
                    {visibleProducts?.map(
                      item=>(
                        <div className="col mb-5">
                        <div className="card h-100">
                          <img className="card-img-top" src={item?.thumbnail} alt="..." />
                          <div className="card-body p-4">
                            <div className="text-center">
                              <h5 className="fw-bolder">{item?.title}</h5>
                              ${item?.price}
                            </div>
                          </div>
                          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
                            <Link to={`/view/${item?.id}`} className='btn btn-outline-dark'>view more</Link>
                          </div>
                        </div>
                      </div>
                      )
                    )}
                    </>
                )
            }
          </div>
        </div>
      </section>
            <div className='mt-4 d-flex justify-content-center'>
              <div>
            <button className='btn' onClick={handlePrev}>
            <i className="fa-solid fa-angles-left" />
            </button>
            {' '}
            {currentPage}/{totalPages}
            {' '}
            <button className='btn' onClick={handleNext}>
            <i className="fa-solid fa-angles-right" />
            </button>
              </div>
            </div>
    </>
  )
}
export default Home