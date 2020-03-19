import React from "react";
import {Link} from 'gatsby'

import "react-datepicker/dist/react-datepicker.css"

import formStyles from "../../modules/form.module.scss"
import ReactDatePicker from "react-datepicker";

class Form extends React.Component {
    state = {
      startDate: new Date()
    };

    handleChange = date => {
      this.setState({
        startDate: date
      });
    };
  render(){
  return (
    <section className={formStyles.form}>
        <h2 className={formStyles.title}>Make a reservation</h2>
        <br></br>
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form
            action="https://formspree.io/hcnd90@gmail.com"
            method="POST"
          >
            {/* name */}
    <div >
    <div className={formStyles.formInputs}>
      <input className={formStyles.formInputsText} name="firstname" type="text" placeholder="First name"/>
      <br></br>
    </div>
    <div className={formStyles.formInputs}>
      <input className={formStyles.formInputsText} name="lastname" type="text" placeholder="Last name"/>
    </div>
  </div>
  <br></br>
  <div className={formStyles.formInputs}>
    <input className={formStyles.formInputsText}type="email" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>
  </div>
  <div >

    <div className={formStyles.formInputs}>
      <ReactDatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        className={formStyles.datepicker}
        name="date"
      />
    </div>
    <div className={formStyles.formInputs}>
      <input className={formStyles.formInputsText} type="text" name="time" placeholder="Time"/>
    </div>
  </div>
  <br></br>
  <div >
    <input className={formStyles.formInputsEnquiry} type="text" placeholder='Enquiries' name="enquiries
    "/>
  </div>
  <button className={formStyles.btn} type="submit">Submit</button>
          </form>
          <br></br>
          <small>We will be in touch after submitting your information</small>
          <br></br><br></br>
          <Link  to ='/'>Return Home</Link>
        </div>
      </div>
    </section>
  );
}
}

export default Form;