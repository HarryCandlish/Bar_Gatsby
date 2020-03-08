import React from "react";

import datepicker from 'js-datepicker'

// const picker = datepicker('#picker')

export default function Form() {
  return (
    <section style={{backgroundColor: `#f5f5f5`, maxWidth:`60%`, position: `relative`, top:`100px`, left: `20%`}} className="contact py-5">
        <h2 style={{textAlign: `center`}}>Make a reservation</h2>
        <br></br>
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form
            action="https://formspree.io/hcnd90@gmail.com"
            method="POST"
          >
            {/* name */}
    <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name"/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name"/>
    </div>
  </div>
  <br></br>
  <div class="form-group">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>
  </div>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Date"/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Time"/>
    </div>
  </div>
  <br></br>
  <div class="form-group">
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Enquiries'/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}