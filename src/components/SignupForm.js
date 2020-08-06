import React, { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const Form = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const submit = () => {
    const EMAIL = email;
    const FNAME = firstName;
    const LNAME = lastName;

    setEmail("");
    setFirstName("");
    setLastName("");

    return email &&
      firstName &&
      lastName &&
      email.indexOf("@") > -1 &&
      onValidated({ EMAIL, FNAME, LNAME });
  }


  return (
    <div id="signup-form">
      <div className="form-field">
        <input
          value={firstName}
          onChange={(e) => { setFirstName(e.target.value) }}
          type="text"
          placeholder="Your first name"
          id="first-name"
        />
        <label htmlFor="first-name">First name</label>
      </div>
      <div className="form-field">
        <input
          value={lastName}
          onChange={(e) => { setLastName(e.target.value) }}
          type="text"
          placeholder="Your last name"
          id="last-name"
        />
        <label htmlFor="first-name">Last name</label>
      </div>
      <div className="form-field">
        <input
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}
          type="email"
          placeholder="Your email"
          id="email"
        />
        <label htmlFor="first-name">Email</label>
      </div>
      <button id="submit" onClick={submit}>GET IN TOUCH</button>
      <div id="message">
        {status === "sending" && <p>Sending...</p>}
        {status === "error" && <p className="error" dangerouslySetInnerHTML={{ __html: message }} />}
        {status === "success" && <p className="success" dangerouslySetInnerHTML={{ __html: message }} />}
      </div>
    </div>
  );
};

function SignupForm() {
  const url = process.env.REACT_APP_MAILCHIMP_MAILING_LIST_URL;

  return (
    <div>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <Form
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </div>
  )
}

export default SignupForm