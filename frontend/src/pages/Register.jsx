import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Spinner from "../components/Spinner";
import { toast } from 'react-toastify';
import { FaUser } from "react-icons/fa";
import { register, reset } from './../features/auth/authSlice';

const Register = () => {
  const [formData, setFormDate] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });

  const { name, email, password, passwordConfirm } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [
    user,
    isLoading,
    isError,
    isSuccess,
    message,
    navigate,
    dispatch
  ]);

  const onChange = (evt) => {
    setFormDate((prevState) => ({
      ...prevState,
      [evt.target.name]: evt.target.value
    }))
  }

  const onSubmit = (evt) => {
    evt.preventDefault();

    if (password !== passwordConfirm) {
      toast.error('Password do not match');
    } else {
      const userData = {
        name,
        email,
        password
      }
      dispatch(register(userData));
    }
  }

  if (isLoading) {
    return (
      <Spinner />
    )
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