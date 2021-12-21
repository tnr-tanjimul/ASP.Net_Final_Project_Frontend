import AuthLogo from "../AuthLogo";
import AuthQuotes from "../AuthQuotes";
import AuthSocialButton from "../AuthSocialButton";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, userEffect } from "react";
import { Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import AlertError from "../Pages/AlertError";
import AlertSuccess from "../Pages/AlertSuccess";
const AuthRegistration = (props) => {
    let history = useHistory();
    function handleRedirect() {
        history.push("/template");
    }
    var UserId = null;
    if (localStorage.getItem('user')) {
        var obj = JSON.parse(localStorage.getItem('user'));
        UserId = obj.UserId;
    }
    let [error, setError] = useState("");
    let [success, setSuccess] = useState("");
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    const onSubmit = () => {
        if (name === "" && email === "" && password === "") {
            setError("All Field Required");
            setSuccess("");
        } else if (name === "") {
            setError("Name Required");
            setSuccess("");
        } else if (email === "") {
            setError("Email Required");
            setSuccess("");
        }
        else if (password === "") {
            setError("Password Required");
            setSuccess("");
        }
        else {
            setName("");
            setEmail("");
            setPassword("")
            setError("");
            onProcess();
            setSuccess("User Registration Successfull");
        }
    };


    const onProcess = () => {
        var obj = { Name: name, Email: email, Password: password };
        axios.post("register", obj)
            .then(resp => {
                var data = resp.data;
                //alert(data.Message);
                console.log(data);
                //handleRedirect();


            }).catch(err => {
                console.log(err);
            });


    }
    return (
        <div className="auth-fluid">
            {/*Auth fluid left content */}
            <div className="auth-fluid-form-box">
                <div className="align-items-center d-flex h-100">
                    <div className="card-body">

                        {/* Logo */}
                        <AuthLogo></AuthLogo>

                        {/* title*/}
                        <h4 className="mt-0"></h4>
                        <p className="text-muted mb-4">Don't have an account? Create your account, it takes less than a minute</p>

                        {/* form */}
                        <div>



                            <div className="form-group">


                                {error ? <AlertError msg={error}></AlertError> : ""}
                                {success ? <AlertSuccess msg={success}></AlertSuccess> : ""}


                            </div>

                            <div className="form-group">
                                <label htmlFor="Name">Full Name</label>
                                <input className="form-control " value={name} onChange={(e) => setName(e.target.value)} type="text" name="Name" id="Name" placeholder="Enter your name" autoComplete="name" autoFocus />
                                <span className="field-validation-valid text-danger" data-valmsg-htmlhtmlfor="Name" data-valmsg-replace="true"></span>

                            </div>



                            <div className="form-group">
                                <label htmlFor="Email">Email address</label>
                                <input className="form-control " value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="Email" id="Email" placeholder="Enter your email" autoComplete="email" autoFocus />
                                <span className="field-validation-valid text-danger" data-valmsg-htmlhtmlfor="Email" data-valmsg-replace="true"></span>
                            </div>
                            <div className="form-group">
                                <Link to="auth-recoverpw-2.php" className="text-muted float-right"><small>Forgot your password?</small></Link>
                                <label htmlFor="Password">Password</label>
                                <div className="input-group input-group-merge">
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="Password" id="Password" className="form-control " placeholder="Enter your password" />



                                    <div className="input-group-append" data-password="false">
                                        <div className="input-group-text">
                                            <span className="password-eye"></span>
                                        </div>
                                    </div>

                                    <span className="field-validation-valid text-danger" data-valmsg-htmlhtmlfor="Password" data-valmsg-replace="true"></span>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" name="terms" className="custom-control-input" id="checkbox-signup" />
                                    <label className="custom-control-label" htmlFor="checkbox-signup">I accept <Link to="#" className="text-dark">Terms and Conditions</Link></label>
                                </div>
                            </div>
                            <div className="form-group mb-0 text-center">
                                <button className="btn btn-primary waves-effect waves-light btn-block" onClick={onSubmit}> Sign Up </button>
                            </div>
                            {/* social*/}
                            <AuthSocialButton></AuthSocialButton>
                        </div>
                        {/* end form*/}
                        {/* Footer*/}
                        <footer className="footer footer-alt">
                            <p className="text-muted">Already have account? <Link to="/login" className="text-muted ml-1"><b>Log In</b></Link></p>
                        </footer>

                    </div> {/* end .card-body */}
                </div> {/* end .align-items-center.d-flex.h-100*/}
            </div>
            {/* end auth-fluid-form-box*/}
            {/* Auth fluid right content */}
            <AuthQuotes></AuthQuotes>
            {/* end Auth fluid right content */}
        </div>
    )
}

export default AuthRegistration;