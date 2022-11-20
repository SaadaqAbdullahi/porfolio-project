import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] =useState("");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const emailRegex = /.+@.+\.[A-Za-z]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setErrMsg("Please enter your name!");
      setSuccess("");
    } else if (!emailRegex.test(email)) {
      setErrMsg("Please enter a valid email!");
      setSuccess("");
    }else if (!message) {
      setErrMsg("Please enter a message!");
      setSuccess("");
    }else if (name && emailRegex.test(email) && message) {
      setErrMsg("");
      setSuccess(true);
    }
  }

  return (
    <div className="Contact">
      <form className="ContactForm" onSubmit={handleSubmit}>
        <fieldset>
        <legend>Contact</legend>
        <label htmlFor="contact">Name</label>
        <input 
          type="text" 
          id="contact" 
          name="contact" 
          placeholder="Enter your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input 
          type="text" 
          id="email" 
          name="email" 
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="message">Message</label>
        <textarea 
          id="message" 
          name="message" 
          placeholder="Write a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {errMsg ? <p className="ErrorMsg">{errMsg}</p> : ""}
        {success ? <p className="SuccessMsg">Success!</p> : ""}
        <center><button type="submit">Submit</button></center>
        </fieldset>
      </form>
    </div>
  );
};

export default Contact;
