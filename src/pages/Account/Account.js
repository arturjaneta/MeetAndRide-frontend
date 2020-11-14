import React, { useEffect, useState } from 'react';

import { useFormik } from 'formik';

import Page from '../../components/Page/Page';

import './Account.css';

import * as services from '../../components/common/AxiosService';
import * as authService from '../../components/Auth/AuthService';

import * as config from './Account.config';

function Account() {
    
    const [userInitialData, setUserInitialData] = useState({name: '', surname: '', email:'',});
    const [emailConflictFlag, setEmailConflictFlag] = useState(false);
    const [conflictedEmail, setConflictedEmail] = useState("");

    // Getting current user name and email from API on component mount:
    useEffect(() => {

        // mockup login for debug purposes:
        // TODO: remove
        //authService.authenticationService.login('admin@admin.pl', 'admin');

        services.getAuthorizedUserInfo(setUserInitialData, console.log);

    }, []);  // empty array here prevents this hook from executing on every component update

    // Custom validator for user form:
    const validateUser = values => {  // This can also return a Promise according to Formik documentation
        
        if(values.email !== conflictedEmail) {  // Workaround for setting off this flag onChange
            setEmailConflictFlag(false);
        }

    };

    const userFormik = useFormik(config.userFormikConfig(userInitialData, validateUser, setEmailConflictFlag, setConflictedEmail));
    const passwordFormik = useFormik(config.passwordFormikConfig());

    return (
        <Page
            title='Account'
        >
            
            {/* USER FORM */}
            <form
                className='form mt-6'
                onSubmit={userFormik.handleSubmit}
            >    
                {/*  User name  */}
                <div className='field is-horizontal'>
                    <div className='field-label'>
                        <label htmlFor='name' className='label has-text-right'>First name</label>
                    </div>
                    <div className='field-body'>
                        <div className='field'>
                            <p className='control is-expanded'>
                                <input
                                    className={userFormik.errors.name && userFormik.touched.name ? 'input is-danger ' : 'input'}
                                    id='name'
                                    type='text'
                                    {...userFormik.getFieldProps('name')}
                                ></input>
                            </p>
                            <p className="help is-danger">
                                {userFormik.errors.name && userFormik.touched.name ? userFormik.errors.name : null}
                            </p>
                        </div>
                    </div>
                </div>

                {/*  User surname  */}
                <div className='field is-horizontal'>
                    <div className='field-label'>
                        <label htmlFor='surname' className='label has-text-right'>Last name</label>
                    </div>
                    <div className='field-body'>
                        <div className='field'>
                            <p className='control is-expanded'>
                                <input
                                    className={userFormik.errors.surname && userFormik.touched.surname ? 'input is-danger ' : 'input'}
                                    id='surname'
                                    type='text'
                                    {...userFormik.getFieldProps('surname')}
                                ></input>
                            </p>
                            <p className="help is-danger">
                                {userFormik.errors.surname && userFormik.touched.surname ? userFormik.errors.surname : null}
                            </p>
                        </div>
                    </div>
                </div>

                {/*  User e-mail  */}
                <div className='field is-horizontal'>
                    <div className='field-label'>
                        <label htmlFor='email' className='label has-text-right'>E-mail</label>
                    </div>
                    <div className='field-body'>
                        <div className='field'>
                            <p className='control is-expanded'>
                                <input
                                    className={(userFormik.errors.email || emailConflictFlag) && userFormik.touched.email ? 'input is-danger ' : 'input'}
                                    id='email'
                                    type='email'
                                    {...userFormik.getFieldProps('email')}
                                ></input>
                            </p>
                            <p className="help is-danger">
                                {userFormik.errors.email && userFormik.touched.email ? userFormik.errors.email : null}
                                {emailConflictFlag && "Ten adres jest już zajęty!"}
                            </p>
                        </div>
                    </div>
                </div>

                {/*  Save button  */}
                <div className='field'>
                    <div className='columns'>
                        <div className='column'></div>
                        <div className='column is-one-fifth'>
                            <button className='button is-link is-fullwidth' type='submit'>Save</button>
                        </div>
                    </div>
                </div>
            </form>

            <br></br>

            {/* ################################################################################################################################################ */}
            {/* PASSWORD FORM */}
            <form
                className='form'
                onSubmit={passwordFormik.handleSubmit}
            >    
                {/*  New password  */}
                <div className='field is-horizontal'>
                    <div className='field-label'>
                        <label htmlFor='newPassw' className='label has-text-right'>New password</label>
                    </div>
                    <div className='field-body'>
                        <div className='field'>
                            <p className='control is-expanded'>
                                <input
                                    className={passwordFormik.errors.newPassw && passwordFormik.touched.newPassw ? 'input is-danger ' : 'input'}
                                    id='newPassw'
                                    type='password'
                                    {...passwordFormik.getFieldProps('newPassw')}
                                ></input>
                            </p>
                            <p className="help is-danger">
                                {passwordFormik.errors.newPassw && passwordFormik.touched.newPassw ? passwordFormik.errors.newPassw : null}
                            </p>
                        </div>
                    </div>
                </div>

                {/*  Repeat password  */}
                <div className='field is-horizontal'>
                    <div className='field-label'>
                        <label htmlFor='repeatPassw' className='label has-text-right'>Repeat password</label>
                    </div>
                    <div className='field-body'>
                        <div className='field'>
                            <p className='control is-expanded'>
                                <input
                                    className={passwordFormik.errors.repeatPassw && passwordFormik.touched.repeatPassw ? 'input is-danger ' : 'input'}
                                    id='repeatPassw'
                                    type='password'
                                    {...passwordFormik.getFieldProps('repeatPassw')}
                                ></input>
                            </p>
                            <p className="help is-danger">
                                {passwordFormik.errors.repeatPassw && passwordFormik.touched.repeatPassw ? passwordFormik.errors.repeatPassw : null}
                            </p>
                        </div>
                    </div>
                </div>

                {/*  Change password button  */}
                <div className='field'>
                    <div className='columns'>
                        <div className='column'></div>
                        <div className='column is-one-fifth'>
                            <button className='button is-link is-fullwidth' type='submit'>Change password</button>
                        </div>
                    </div>
                </div>
            </form>
        </Page>
    );
}

export default Account;