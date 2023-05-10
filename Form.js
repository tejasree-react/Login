import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import './Form.css'
function Form() {
    return (
       <div className='wrapper d-flex bg-dark align-items-center justify-content-center w-100'>
         <div className='login'>
            <h2 className='mb-3'>Login Form</h2>
            <form className='needs-validation' autocomplete="off">
            <div className='form-group was-validated mb-2 '>
                <label htmlFor='email' className='form-label'>Email Address</label>
                <input type='email' className='form-control w-100' required/>
                <div className='invalid-feedback'>Enter your email</div>
            </div>
            <div className='form-group mb-2 was-validated'>
                <label htmlFor='password' className='form-label'>Password</label>
                <input type='Password' className='form-control w-100' required/>
                <div className='invalid-feedback'>
                    Enter your Password
                </div>
            </div>
            <div className='form-group'>
            <input type='checkbox'/>
                <label htmlFor='checkbox'>Remember me</label>
                </div>
                <button type="submit" className='btn btn-sucess w-100'>Login</button>
            </form>
        </div>

       </div>
        );
}

export default Form;
