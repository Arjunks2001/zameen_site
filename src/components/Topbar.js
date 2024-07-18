import React from 'react'

const Topbar = ({city,setCity}) => {

  // const mysurudata= ()=>{

  // }
  return (
    <div className="container-fluid bg-light">
      <nav className="navbar navbar-expand-lg custom-navbar ms-lg-4 ">
      <a className="navbar-brand brand d-block d-lg-none " href="#home">
          <img
            src="https://zameensquare.com/_next/static/media/zameen-mob-logo.74a5a37e.png"
            width=" "
            height="30"
            className="d-inline-block align-top "
            alt="Booking"
          />
        </a>
        <a className="navbar-brand brand d-none d-lg-block " href="#home">
          <img
            src="https://zameensquare.com/_next/static/media/zameen-logo.be926326.png"
            width=" "
            height="30"
            className="d-inline-block align-top ms-lg-5 "
            alt="Booking"
          />
        </a>
        <div class="dropdown ms-1  ">
          <button
            class="btn bg-info-subtle dropdown-toggle "
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            select
          </button>
          <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="#">
                Mysuru
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Bengaluru
              </a>
            </li>
          </ul>
        </div>
        <div className="align-items-end   offcanvas offcanvas-top nav-open">
          <div className="offcanvas-body  ">
            <ul className="navbar-nav me-auto  ">
              <li className="nav-item  pe-4">
                <a className="nav-link text-primary" href="#our-story">
                  Buy
                </a>
              </li>
              <li className="nav-item pe-4">
                <a className="nav-link text-primary" href="#our-story">
                  Rent
                </a>
              </li>
              <li className="nav-item pe-4">
                <a className="nav-link text-primary" href="#our-story">
                  Sell
                </a>
              </li>
              <li className="nav-item pe-4">
                <a className="nav-link text-primary" href="#our-story">
                  PG
                </a>
              </li>
             
            </ul>
           
            
          </div>
         
        </div>
        <button class="btn btn-primary" type="submit">
              Post Property
            </button>
            <a className="navbar-brand brand  " href="#home">
              <img
                src="https://s3-alpha-sig.figma.com/img/65f2/87db/7052c26fc3613af9921d95f82d75b2a1?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bz8fhyK6Ut5vBn-aTaeW5oSO4qnjAaBBPBi8U5nWlX4cpUWfi6eXOSDhTAD1~~XV2XtqQT4hXudmaAQMEmrnFSqA9oxKDhFID6w001sQpmGu9foOWN~JDzws5yaPhma4bpWibja43MP0F7zbYM~yRd-t-XGwabM5MvsyDpOvVjHM-atkNRnUPVNHvhWdZl-Nr7ffH1zu6oFvHWOtvNaBgz7lbaP7mLco7e4On5NQWc1l15w1CE5wvm2NTBjJBQq76fJjQqDRfR3xfeDhPmGh-KDx~43wIsxitcDjrv8YOgNcAAhZeC0o3DfEOXjVTXwIuQ90KabEVduLR9U3IGgz8w__"
                width=" "
                height="30"
                className="d-inline-block align-top ms-lg-5 "
                alt="Booking"
              />
            </a>
      </nav>
    </div>
  );
}

export default Topbar