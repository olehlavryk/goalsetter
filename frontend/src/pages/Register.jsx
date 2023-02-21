import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";

const Register = () => {
  const [formData, setFormDate] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });

  const { name, email, password, passwordConfirm } = formData;

  const onChange = (evt) => {
    setFormDate((prevState) => ({
      ...prevState,
      [evt.target.name]: evt.target.value
    }))
  }

  const onSubmit = (evt) => {
    evt.preventDefault()
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="passwordConfirm"
              name="passwordConfirm"
              value={passwordConfirm}
              placeholder="Confirm password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">Register</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register;