import React from "react";
import ForwardIcon from "@mui/icons-material/Forward";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "@mui/material";
import "./Contact.css";
import Header from "./Header";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.Name) {
    errors.Name = "Required";
  } else if (values.Name.length > 15) {
    errors.Name = "Must be 15 characters or less";
  }
  if (!values.Emaill) {
    errors.Email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
    errors.Email = "Invalid email address";
  }
  if (!values.Budget) {
    errors.Budget = "Required";
  } else if (values.Budget.length > 15) {
    errors.Budget = "Must be 15 characters or less";
  }
  if (!values.Description) {
    errors.Description = "Required";
  } else if (values.Description.length > 50) {
    errors.Description = " words Limit only 50 ";
  }

  return errors;
};

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Budget: "",
      Description: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 4));
    },
  });
  return (
    <div className="Contactmainpage">
      <Header />
      <div className="Greetings">
        <h1 className="Thanks">
          <b> Thank You! </b>
        </h1>
        <text>
          <b>Get in touch with me now.</b>
        </text>
      </div>
      <div className="gridview">
        <div className="contactpage">
          <form onSubmit={formik.handleSubmit}>
            <input
              className="inputbox"
              type="text"
              id="Name"
              placeholder="Your name"
              value={formik.values.Name}
              name="Name"
              onChange={formik.handleChange}
              required
            />
            {formik.touched.Name && formik.errors.Name ? (
              <text className="errormsg">{formik.errors.Name}</text>
            ) : null}
            <br />
            <input
              className="inputbox"
              type="text"
              id="Email"
              placeholder="Your email"
              value={formik.values.Email}
              name="Email"
              onChange={formik.handleChange}
              required
            />
            {formik.touched.Email && formik.errors.Email ? (
              <text className="errormsg">{formik.errors.Email}</text>
            ) : null}
            <br />
            <input
              className="inputbox"
              type="text"
              id="Budget"
              placeholder="Your Budget"
              value={formik.values.Budget}
              name="Budget"
              onChange={formik.handleChange}
              required
            />
            {formik.touched.Budget && formik.errors.Budget ? (
              <text className="errormsg">{formik.errors.Budget}</text>
            ) : null}
            <br />
            <input
              className="inputbox"
              type="text"
              id="Description"
              placeholder="Your Description"
              value={formik.values.Description}
              name="Description"
              onChange={formik.handleChange}
              required
            />
            {formik.touched.Description && formik.errors.Description ? (
              <text className="errormsg">{formik.errors.Description}</text>
            ) : null}
            <br />

            {/* <input className='inputbox' type="text" placeholder='Your Budget' value= {formik.values.Budget} name="Budget" onBlur={formik.handleBlur} onChange={formik.handleChange}/><br/>
      <input  id='Description' type="text" placeholder='Description' value= {formik.values.Description} name="Description" onBlur={formik.handleBlur} onChange={formik.handleChange}/><br/>  */}
            <button type="submit" className="Submitbox">
              Submit Now
              <ForwardIcon />
            </button>
          </form>
        </div>
        <div className="inlinecss">
          <div className="socialize">
            <text>Connect with me via:</text>
            <br />
            <Link to="#" className="links">
              <TwitterIcon />
            </Link>
            <Link to="#" className="links">
              <FacebookIcon />
            </Link>
            <Link to="#" className="links">
              <InstagramIcon />
            </Link>
            <Link to="#" className="links">
              <MailIcon />
            </Link>
          </div>

          <div className="Sleekodata">
            <h1 id="Headsleek">Sleeko</h1>
            <text>
              This is a Free Single page Website design created in photoshop{" "}
              <br />
              format exclusively for pixelactic.com's readers. This design is
              created by Rafi.Hope you'll like this design.Thanks!
            </text>
            <br />
            <text>Copyright. All rights reserved.</text>
          </div>
        </div>
      </div>
      <button className="pagenext"></button>
    </div>
  );
};
export default Contact;
