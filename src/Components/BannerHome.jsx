import React from 'react';
// import logo from '../assets/thumbnail.png';

const BannerHome = (props) => {
  return (
    <div className="banner__sections bg-full">
      <div className='container flex-column flex-lg-row d-flex'>
        <div className="textHome col-12 col-lg-6">
          <h1>{props.name}</h1>
          <p>{props.subtitle}</p>
          <a href="#0" className='redirectButton'>
            Conheça a nossa linha
          </a>
        </div>
        <div className="videoHome col-12 col-lg-6">
          <img className='rounded-lg' src="https://via.placeholder.com/600x400" alt="alt" />
        </div>
      </div>  
    </div>
  )
}

export default BannerHome