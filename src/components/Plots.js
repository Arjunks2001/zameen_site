
import React, { useState } from 'react';
import { plots} from './Totaldata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Plots = () => {
  const [filter, setFilter] = useState('All');
  const [likedItems, setLikedItems] = useState(plots.map(item => ({ ...item, liked: false })));

  const handleLike = (id) => {
    const newLikedItems = likedItems.map(item =>
      item.id === id ? { ...item, liked: !item.liked } : item
    );
    setLikedItems(newLikedItems);

    // Update the data as needed, for example, send a request to the server.
    console.log(newLikedItems.find(item => item.id === id));
  };

  const filteredData = likedItems.filter(item => {
    if (filter === 'All') return true;
    if (filter === '1200Sqft' && item.title.includes('1200Sqft')) return true;
    if (filter === '2400Sqft' && item.title.includes('2400Sqft')) return true;
    return false;
  });

  const items = filteredData.map((item) => (
    <div className='col-lg-8'>
<div className='item' data-value={item.id} key={item.id}>
      <div className='card object-fit-fill border rounded-4 h-50' style={{width:"23rem"}}>
        <img src={item.image} className='card-img-top rounded-4' alt={item.title} />
         
        <div className='card-body'>
        <div className='d-flex'>
          <button 
          className='btn  ' 
          style={{ color: item.liked ? 'red' : '#c2d8ff', position: 'absolute', right: '10px' }} 
          onClick={() => handleLike(item.id)}
        >
          <FontAwesomeIcon icon={faHeart} size="xl" />
        </button>
          <p className='card-title text-primary fw-bold fs-5 mt-1'>{item.price}</p>
          
          </div>
        <div>
        <h6 className='card-title font fs-0'>{item.title}</h6>
        <p className='fw-lighter'>{item.location}</p>
        </div>
          <div className='row fw-lighter'>
            <div className='col d-flex ' >
            <p className='me-3'>{item.sqft}</p>
                  <p className='me-3'>{item.wash}</p>
                  <p className='me-3'> {item.furnished}</p>
                
            </div>
            <p>  Listed On</p>
            <div className='col d-flex ' >
           
            <p className='fw-normal'>{item.listed}</p>
            <div className='ms-5 '>
            <button type="button" class="btn btn-primary  px-1 py-0">Veiw Details</button>
            </div>
            
            </div>

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
          <div className='fs-3 flex-grow-1 d-flex'>
            <div>
            <p>Plots in Prime Location</p>
            </div>
            <div className='d-flex d-none d-md-inline ms-3'>
            <button
              className='btn btn-success text-dark px-3 py-0 me-2'
              onClick={() => setFilter('All')}
            >
              All
            </button>
            <button
              className='btn btn-success text-dark px-3 py-0 me-2'
              onClick={() => setFilter('1200Sqft')}
            >
             1200 Sqft
            </button>
            <button
              className='btn btn-success text-dark px-3 py-0'
              onClick={() => setFilter('2400Sqft')}
            >
             2400 Sqft
            </button>
          </div>
           
            
          </div>
          
          {/* <div>
          <p>s</p>
          <FontAwesomeIcon icon={faSquareCaretRight} size="lg" style={{color: "#63E6BE",}} />
          </div> */}
         
          
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

export default Plots;
          
