import React, { useState } from 'react'

function SignupForm() {
  return (
    <form 
      id="signup-form"
      action="https://newschool.us18.list-manage.com/subscribe/post"
      method="POST"
      noValidate
    >
      <input type="hidden" name="u" value="d811e057da3fb50be50c3bece" />
      <input type="hidden" name="id" value="59a4d2542d" />

      <div className="form-field">
        <input type="text" name="first-name" id="first-name" placeholder="First name here" />
        <label htmlFor="first-name">First Name</label>
      </div>
      <div className="form-field">
        <input type="text" name="last-name" id="last-name" placeholder="Last name here" />
        <label htmlFor="last-name">Last Name</label>
      </div>
      <div className="form-field">
        <input type="email" name="email" id="email" placeholder="Your e-mail" />
        <label htmlFor="email">Email</label>
      </div>
      <input type="submit" value="GET IN TOUCH" id="subscribe" name="subscribe" />
    </form>
  )
}

export default SignupForm