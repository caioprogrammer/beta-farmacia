import React from 'react';

const Banner = (props) => {
  return (
    <div 
    className="banner__sections" 
    // style={{backgroundImage: `url('https://via.placeholder.com/1440x360')`}}
    >
      <div className='container'>
        <h1>{props.name}</h1>
        <p>{props.subtitle}</p>
      </div>  
    </div>
  )
}

export default Banner