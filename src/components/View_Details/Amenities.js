import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle} from '@fortawesome/free-solid-svg-icons';


const Amenities = () => {
  return (
    <div className="container bg-white shadow-sm mb-5 rounded-4 mt-5">
    <div className='row border-bottom border-2 ms-2'>
    <h5 className='mt-3'>Amenities</h5>
    </div>
     <div className='row  m-3 row-cols-md-2 row-cols-lg-3'>
    <div className='d-flex '>
    <p> <FontAwesomeIcon className="me-2" icon={faCircle} size="2xs" style={{color: "#63E6BE",}} />Elevators/Lifts</p>
    </div>
    <div className='d-flex  '>
    <p> <FontAwesomeIcon className="me-2" icon={faCircle} size="2xs" style={{color: "#63E6BE",}} />Swimming Pool</p>
    </div>
    <div className='d-flex  '>
    <p> <FontAwesomeIcon className="me-2" icon={faCircle} size="2xs" style={{color: "#63E6BE",}} />Guest Parking Spaces</p>
    </div>
    <div className='d-flex  '>
    <p> <FontAwesomeIcon className="me-2" icon={faCircle} size="2xs" style={{color: "#63E6BE",}} />Gym</p>
    </div>
    <div className='d-flex  '>
    <p> <FontAwesomeIcon className="me-2" icon={faCircle} size="2xs" style={{color: "#63E6BE",}} />CCTV Surveillance</p>
    </div>
    <div className='d-flex  '>
    <p> <FontAwesomeIcon className="me-2" icon={faCircle} size="2xs" style={{color: "#63E6BE",}} />Play Ground</p>
    </div>
    <div className='d-flex  '>
    <p> <FontAwesomeIcon className="me-2" icon={faCircle} size="2xs" style={{color: "#63E6BE",}} />Pet Room</p>
    </div>
    <div className='d-flex  '>
    <p> <FontAwesomeIcon className="me-2" icon={faCircle} size="2xs" style={{color: "#63E6BE",}} />Yoga Meditation Area</p>
    </div>
    
     </div>
     

    </div>
  );
}

export default Amenities