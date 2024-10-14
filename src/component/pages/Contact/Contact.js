import React, { useState } from "react"
import contact1 from "./contact1.png"
import "./Contact.css"
import "../Portfolio/Portfolio.css"

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const handleInputMobileNo = (event) => {
    const value = event.target.value;
    // Ensure input contains only numbers and has a maximum length of 10 characters
    if (/^\d{0,10}$/.test(value) || value === '') {
      setData(prevData => ({
        ...prevData,
        phone: value
      }));
    }
  };

  const formSubmit = (event) => {
    event.preventDefault()

     // Use EmailJS to send the form data to your email
    //  emailjs.send(
    //   'YOUR_SERVICE_ID',      // Replace with your EmailJS Service ID
    //   'YOUR_TEMPLATE_ID',      // Replace with your EmailJS Template ID
    //   {
    //     fullname: data.fullname,
    //     phone: data.phone,
    //     email: data.email,
    //     subject: data.subject,
    //     message: data.message,
    //   },
    //   'YOUR_USER_ID'            // Replace with your EmailJS User ID
    // ).then((response) => {
    //   console.log('Email sent successfully!', response.status, response.text);
    //   alert("Your message has been sent successfully!");


    alert(
      `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject : ${data.subject}. 
	Here is my message : ${data.message}. `
    )

    // Reset form fields to initial values
    setData({
      fullname: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
    });
  }

  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>Lokinder Singh</h1>
                  <p>Front-End Web Developer</p>
                  <p>I am available for freelance work. Connect with me via and call in to my account.</p> <br />
                  <p>Phone: +91-8468092173</p>
                  <p>Email: lokinder007@gmail.com</p> <br />
                  <span>FIND WITH ME</span>

                  <div className='button f_flex'>
                    <a className='btn_shadow' href="https://www.linkedin.com/in/lokinder007/" target="_blank" rel="noopener noreferrer" title="Facebook">
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a className='btn_shadow' href="https://www.linkedin.com/in/lokinder007/" target="_blank" rel="noopener noreferrer" title="Instagram">
                      <i className='fab fa-instagram'></i>
                    </a>
                    <a className='btn_shadow' href="https://www.linkedin.com/in/lokinder007/" target="_blank" rel="noopener noreferrer" title="Twitter">
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a className='btn_shadow' href="https://www.linkedin.com/in/lokinder007/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                      <i className='fab fa-linkedin-in'></i>
                    </a>
                  </div>

                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} required />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='text' name='phone' value={data.phone} onChange={handleInputMobileNo} required />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} required />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
