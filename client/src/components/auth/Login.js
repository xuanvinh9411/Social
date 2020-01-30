import { Link } from "react-router-dom";
import React, { Fragment, useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    console.log(formData)
  }
  const { email, password } = formData;
  return (
    <Fragment>
      <section className="container">
        <div className="alert alert-danger">
          Invalid credentials
      </div>
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
        <form className="form" onSubmit={e => onSubmit(e)} >
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
              value={email}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
        <p className="my-1">
          Don't have an account? <Link to="/Register">Sign Up</Link>
        </p>
      </section>
    </Fragment>
  )
}

export default Login
