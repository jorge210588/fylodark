import React from 'react'
import stayProductiveImg from '../../images/illustration-stay-productive.png';
import './ProductSection.scss';
import arrowIcon from "../../images/icon-arrow.svg"; 

const ProductSection = () => {
  const title = 'Stay productive, wherever you are';
  const description1 = 'Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.'
  const description2 = 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
  
  return (
    <section className='product-section'>
      <img src={stayProductiveImg} alt='Stay productive' className='product-image'/>
      <article className='product-description'>
        <h1 className='title'>{title}</h1>
        <p className='description'>{description1}</p>
        <p className='description'>{description2}</p>
        <div className='functionality-btn'>
          <a href="#" className='fylo-link'>See how Fylo works</a>
          <img src={arrowIcon} alt='See how Fylo works' className='arrow-img'/>
        </div>
      </article>
    </section>
  )
}

export default ProductSection