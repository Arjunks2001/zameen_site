import React from 'react'
import PopularCard from './PopularCard'
import ContactCard from './ContactCard'
import MoreProperties from './MoreProperties'
import RelatedProperties from './RelatedProperties'
import Location from './Location'
import Amenities from './Amenities'
import Owenr from './Owenr'
import AboutProperty from './AboutProperty'
 

const Popular_Details = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <PopularCard />
          </div>
          <div className="col-lg-4 mt-5">
            <ContactCard/>
          </div>
        </div>
      </div>
      <AboutProperty />
      <Amenities />
      <Owenr />
      <Location />
      <MoreProperties />
      <RelatedProperties />
    </>
  );
}

export default Popular_Details