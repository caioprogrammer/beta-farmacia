import React from 'react';
// import logo from '../assets/thumbnail.png';

const BannerHome = (props) => {
  return (
    <div className="banner__sections">
      <div className='container d-flex'>
        <div className="textHome col-6">
          <h1>{props.name}</h1>
          <p>{props.subtitle}</p>
        </div>
        <div className="videoHome col-6">
          <img src="https://via.placeholder.com/600x400" alt="alt" />
        </div>
      </div>  
    </div>
  )
}

export default BannerHome