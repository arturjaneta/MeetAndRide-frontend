import React, {useState} from 'react';
import logo from '../../assets/meetandride.png'
import './SignInForm.style.css'
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const SignInForm = ({ onSubmit, onSignUp }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email,password);
    setRedirect(true);
  }

  return (
    
    <div className="container"> 
    <div>
      {redirect?<Redirect push to="/find" />:<div></div>}
    </div>
      <div className="center-all columns is-centered">
        <div className="column is-half">
          <img src={logo} className="image my-2" alt="meetandride logo"></img>
          <div className="field">
            <form onSubmit={handleSubmit}>
              <label className="label">Email</label>
              <div className="control">
                  <input 
                    value={email} 
                    onChange={handleEmailChange}
                    type="text"
                    className="is-rounded input"
                  />
              </div>
              <label className="label">Password</label>
              <div className="control">
                <input 
                  value={password}
                  onChange={handlePasswordChange}
                  className="is-rounded input" 
                  type="password"
                />
              </div>
              <div className="level my-2">
                <div className="level-left">
                  <button type="button" className="button is-text" onClick={onSignUp}>Sign Up</button>
                </div>
                <div className="level-right">
                  <input 
                    type="submit"
                    className="is-rounded button level-right is-primary"
                    value="Sign In"
                  />
                </div>
              </div>  
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

SignInForm.propTypes = {
  onSignUp: PropTypes.func,
  onSubmit: PropTypes.func
};

export default SignInForm;
