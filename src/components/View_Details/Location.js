import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Location = () => {
  return (
    <div class="container p-4 bg-white shadow-sm mb-5 rounded-4">
    <div class="card mb-3 w-100 border-white" >
      <div class="row g-0">
       
        <div class="col-md-8 col-lg-5">
          <div class="card-body h-100 d-flex flex-column">
          <div className='d-flex justify-content-between'>
          <h5 class="card-title">Location</h5>
          </div>
            <p className='fw-lighter'>Address</p>
            <p class="card-text fw-bold">Apartment Name Goes Here </p>
           <p> 2nd Floor, Dejgow Building, Kannada Sahithya Parishath Rd, Mysuru, Karnataka 570017</p> 
            <a class="card-text "><FontAwesomeIcon className='me-2' icon={faLocationDot} size="sm" style={{color: "#63E6BE",}} />View on map </a>
          </div>
        </div>
        <div class="col-md-4 col-lg-7">
          <img src="https://s3-alpha-sig.figma.com/img/b2da/d38e/e687922a66e4d03d2478403a67e8d2e8?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QuL6u9ebqgnEGfp1VpgipYrD3cKIxZDTo6W~W5QWYkZRo2Tt~vgOgLg1Go0hzpvkSugeeqUJGJ~hjiNTTdnl5gSAS23q9ghZbFQ2SZV9~cb20csX01CoEP6CdZTEJpmY7kFEYf4kGI1vtAqwWY0l0bTD08atNbcbqufVa2mZbs6raFx9bqQkn7ki77FmlpYf1~1LlV8mSkzBFko7L~YOaf5GINh9aSvQO59LAKuwdHYQZE7wuu1UxckbGO8aqFdCMWd06JDx-xXBWn5t5TH9qfp2Bx3rCW2jlVuryl-HkR~eDyYsAa33XCmqAWrRDN1rlrEDs35PfHWmMnP9hBOJeQ__"
           class="img-fluid w-100 h-100" alt="img"/>
        </div>

      </div>
    </div>
    
    
  </div>
  )
}

export default Location