import { Title, TitleSm } from "@/components/common/Title";
import React, { useState } from "react";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const countryCodes = [
  { code: "+1", name: "USA" },
  { code: "+44", name: "UK" },
  { code: "+61", name: "Australia" },
  { code: "+91", name: "India" },
  { code: "+81", name: "Japan" },
  { code: "+86", name: "China" },
  { code: "+33", name: "France" },
  { code: "+49", name: "Germany" },
  { code: "+39", name: "Italy" },
  // Add more country codes as needed
];

const Contact = () => {
  const [verified, setVerified] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    timeframe: "",
    projectDetails: "",
    countryCode: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({});

  // reCAPTCHA function
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : "This field is required.";
    tempErrors.email = formData.email ? "" : "This field is required.";
    tempErrors.budget = formData.budget ? "" : "This field is required.";
    tempErrors.timeframe = formData.timeframe ? "" : "This field is required.";
    tempErrors.projectDetails = formData.projectDetails
      ? ""
      : "This field is required.";
    tempErrors.countryCode = formData.countryCode
      ? ""
      : "This field is required.";
    tempErrors.phoneNumber = formData.phoneNumber
      ? ""
      : "This field is required.";

    if (formData.email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      tempErrors.email = emailPattern.test(formData.email)
        ? ""
        : "Email is not valid.";
    }

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate() && verified) {
      emailjs
        .send(
          "service_g6wsggb", // Replace with your EmailJS service ID
          "template_j1joepl", // Replace with your EmailJS template ID
          formData,
          "p-_pNoyFKi6vQznK6" // Replace with your EmailJS user ID
        )
        .then(
          (response) => {
            console.log("Success:", response);
            toast.success("Your form has been submitted!");
            setFormData({
              name: "",
              email: "",
              budget: "",
              timeframe: "",
              projectDetails: "",
              countryCode: "",
              phoneNumber: "",
            });
            setVerified(false);
          },
          (error) => {
            console.error("Error:", error);
            toast.error("There was an error submitting your form.");
          }
        );
    } else {
      console.log("Form validation failed.");
    }
  };

  return (
    <>
      <section className="contact bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="CONTACT" /> <br />
            <br />
            <Title title="Let's start right now!" className="title-bg" />
          </div>
          <div className="content py flex1">
            <div className="left w-30">
              <div className="contact-deatils">
                <div className="box">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.3402934316946!2d150.924761075827!3d-33.70014247329156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129f3ff4adc9b5%3A0x32cc0c3b4d476c73!2sSydney%20Investors%2C%20Professionals%20and%20Business%20Networking%20Group%20Incorporated%20(SIPBN)!5e0!3m2!1sen!2sin!4v1719363681619!5m2!1sen!2sin"
                    width="300"
                    height="400"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="box">
                  <FiHeadphones size={30} className="icons" />
                  <h3>Call Us:</h3>
                  <span>+61 29659 4339</span>
                </div>
                <div className="box">
                  <IoLocationOutline size={30} className="icons" />
                  <h3>Find Us</h3>
                  <span>G01, 8 Merriville Road, Kellyville Ridge NSW 2155</span>
                </div>
                <div className="box">
                  <FiHelpCircle size={30} className="icons" />
                  <h3>info@sipbn.com.au</h3>
                  <span>Drop us a line anytime!</span>
                </div>
              </div>
            </div>
            <div className="right w-70">
              <TitleSm title="Make an online enquiry" />

              <form onSubmit={handleSubmit}>
                <div className="grid-2">
                  <div className="inputs">
                    <span>Name</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                  </div>
                  <div className="inputs">
                    <span>Email</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid-2">
                  <div className="inputs">
                    <span>Your budget</span>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    />
                    {errors.budget && <p className="error">{errors.budget}</p>}
                  </div>
                  <div className="inputs">
                    <span>Timeframe</span>
                    <input
                      type="text"
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleChange}
                    />
                    {errors.timeframe && (
                      <p className="error">{errors.timeframe}</p>
                    )}
                  </div>
                </div>
                <div className="grid-2">
                  <div className="inputs">
                    <span>Country Code</span>
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="styled-select"
                    >
                      <option value="">Select</option>
                      {countryCodes.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.code} ({country.name})
                        </option>
                      ))}
                    </select>
                    {errors.countryCode && (
                      <p className="error">{errors.countryCode}</p>
                    )}
                  </div>
                  <div className="inputs">
                    <span>Phone Number</span>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                    {errors.phoneNumber && (
                      <p className="error">{errors.phoneNumber}</p>
                    )}
                  </div>
                </div>
                <div className="inputs">
                  <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
                  <textarea
                    cols="30"
                    rows="10"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleChange}
                  ></textarea>
                  {errors.projectDetails && (
                    <p className="error">{errors.projectDetails}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="button-primary"
                  disabled={!verified}
                >
                  Submit
                </button>
                <ReCAPTCHA
                  className="captcha"
                  sitekey="6Ldu3ggqAAAAAOxYno4zfSKarTV8K415AB6x7SWf"
                  onChange={onChange}
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
