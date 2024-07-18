import React from 'react'

const ContactCard = () => {
  return (
    <>
 <div className='bg-whhite shadow-sm rounded-4'>                
     <div class="card-body ">
     <div className='row'>
     <div className='col-5 '>
     <div className='ratio ratio-1x1'>
     <img src="https://s3-alpha-sig.figma.com/img/a223/540d/2e10a474358a5f36b3329ce46d53be1a?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GoPu32nglfZbVSm-ZdaSPY5LXRy1Sh6AvZR-EfmgfS3CHrL9vDxSbEtoJCoQKUYpWeTJIslmNHqQQr2NEY1sf73QWq2c0l9-vUFV6kwRT5VTR0GgPGZtTFZMT27GHoAMveeTq5t06Bv9cp7OSCCVzS7TQ2sAqG2Tl1JDEWa0DuawYf~SJvm1cKex~ri5pimKBN3yaTw6b4vBEaI5PP3rifeNuCz27AA~DhBVuWq6c7bxiLdtADejxx-l74V1tE3gIPcFh5R6tpT4RlwrMIgwL~WCKBKNh6VSJNaPhjdFqd1fCSQc9BMMGy6Ltno-RDDMmjaOnvbbmniRs~UTzb4URg__" 
     class="img-fluid  object-fit-cover rounded-4" alt="img"/>
     </div>
     
     </div>
    <div className='col-7'>
      <p className='fw-lighter'>Posted By</p>
      <p className='fw-bolder'>Rohith</p>
      <a>Call : 98765XXXXX</a>
      <button type="button" class="btn btn-primary mt-2">Request Callback</button>
    </div>
    

     </div>
    </div>
    
    </div>
    <div className='card-body mt-5 bg-white shadow-sm rounded-4'>
    <div className='row'>
    <div className='col-lg-12 px-5'>
    <h4 className='mt-4'>Contact Us</h4>
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="email" class="form-control" placeholder='Enter your name' id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email Address</label>
    <input type="password" placeholder='Enter your email address' class="form-control" id="exampleInputPassword1"/>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Contact Number</label>
    <input type="password" placeholder='Enter your contact number' class="form-control" id="exampleInputPassword1"/>
  </div>
  <div className='d-flex justify-content-center mt-3'>
    <button type="submit" class="btn btn-primary mb-3 mt-3 px-5 rounded-2  w-100">Submit</button>
    </div>
</form>

    </div>

    </div>
   

    </div>
    </>
   
  )
}

export default ContactCard