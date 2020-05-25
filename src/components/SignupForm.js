import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const Form = ({ status, message, onValidated }) => {
  let email, firstName, lastName, type;
  const submit = () => {
    return email &&
      firstName &&
      lastName &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        FNAME: firstName.value,
        LNAME: lastName.value,
        TYPE: type.value
      });
  }


  return (
    <div id="signup-form">
      <div className="form-field">
        <input
          ref={node => (firstName = node)}
          type="text"
          placeholder="Your first name"
          id="first-name"
        />
        <label htmlFor="first-name">First name</label>
      </div>
      <div className="form-field">
        <input
          ref={node => (lastName = node)}
          type="text"
          placeholder="Your last name"
          id="last-name"
        />
        <label htmlFor="first-name">Last name</label>
      </div>
      <div className="form-field">
        <input
          ref={node => (email = node)}
          type="email"
          placeholder="Your email"
          id="email"
        />
        <label htmlFor="first-name">Email</label>
      </div>
      <input
        ref={node => (type = node)}
        type="hidden"
        value="Keep Me Posted"
      />
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