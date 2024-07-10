
import React, { useState } from 'react';
import {projectsdata } from './Totaldata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {

  const items = projectsdata.map((item) => (
    <div className='col-lg-8'>
<div className='item ' data-value={item.id} key={item.id}>
      <div className='card object-fit-fill border rounded-4 h-50'style={{width:"23rem"}}>
        <img src={item.image} className='card-img-top rounded-4' alt={item.title} />
        
        <div className='card-body'>
          <div className='d-flex'>
          <p className='card-title text-primary fw-bold fs-5 mt-1'>{item.price}</p>
          
          </div>
        <div>
        <h6 className='card-title font fs-0'>{item.title}</h6>
        <p className='fw-lighter'>{item.location}</p>
        </div>
         
          
        </div>
      </div>
    </div>
    </div>
    
  ));

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <div className='container mt-5'>
      <div className='row'>
      <div className='d-flex flex-wrap align-items-center mb-4'>
          <div className=" col-xl-6 d-flex justify-content-center  m-auto ">
          <div className="row">
          <h3 className='text-center'>Projects in Mysuru</h3>
            <p className='fw-lighter'>
            
            Lorem ipsum dolor sit amet consectetur. Libero lobortis donec velit habitant.
             Lectus aliquam adipiscing id auctor et cursus lectus dictum. Morbi.
            </p>
          </div>
        </div>
        </div>

        <AliceCarousel
          mouseTracking={true}
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          disableDotsControls={true}
          className=""
        />
      </div>
    </div>
  );
};

export default Projects;
          
