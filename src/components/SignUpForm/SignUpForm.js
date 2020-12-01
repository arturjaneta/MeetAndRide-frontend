import React, { useState } from 'react';
import './style.css'
import logo from '../../assets/meetandride.png'

const SignUpForm = ({ onSubmit, onReturn }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value)
    }

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value)
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password===confirmPassword&&password.length!==0)
            if(firstName.length===0||lastName.length===0){
                alert("First name and last name cannot be empty!")
            }else
            onSubmit(firstName,lastName,email,password);
        else{
            //TODO
            alert("Passwords are not same or are empty")
            setPassword('')
            setConfirmPassword('')
        }
     }

    return (
        <div clasName="container">
            <div className="center-all columns is-centered">
                <div className="column is-half">
                    <img src={logo} className="image my-2" alt="meetandride logo"></img>
                    <div className="field">
                        <form onSubmit={handleSubmit}>
                        <label className="label">First name</label>
                            <div className="control">
                                <input
                                    value={firstName}
                                    onChange={handleFirstNameChange}
                                    type="text"
                                    className="is-rounded input"
                                />
                            </div>
                            <label className="label">Last name</label>
                            <div className="control">
                                <input
                                    value={lastName}
                                    onChange={handleLastNameChange}
                                    type="text"
                                    className="is-rounded input"
                                />
                            </div>
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
                            <label className="label">Confirm password</label>
                            <div className="control">
                                <input
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                    className="is-rounded input"
                                    type="password"
                                />
                            </div>
                            <div className="level my-2">
                                <div className="level-left">
                                    <button className="button is-text" onClick={onReturn}>Return</button>
                                </div>
                                <div className="level-right">
                                    <input
                                        type="submit"
                                        className="is-rounded button level-right is-primary"
                                        value="Sign Up"
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

export default SignUpForm;