import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";
import BreadcrumbNav from "../BreadcrumbNav";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AlertError from "./AlertError";
import AlertSuccess from "./AlertSuccess";
import IsLoggegIn from "../IsLoggegIn";
const UserCreate = (props) => {
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
    let [credit, setCredit] = useState("");
    let [role, setRole] = useState("");
    let [maxcontacts, setMaxContacts] = useState("");
    let [maxapikeys, setMaxApiKeys] = useState("");
    let [maxtemplates, setMaxTemplates] = useState("");




    const onSubmit = () => {
        if (name === "" && email === "" && credit === "" && role === "" && maxcontacts === "" && maxapikeys === "" && maxtemplates === "") {
            setError("All fields Required");
        } else if (name === "") {
            setError("Name Required");
        } else if (email === "") {
            setError("Email Required");
        }
        else if (password === "") {
            setError("Password Required");
        }
        else if (credit === "") {
            setError("Credit Required");
        } else if (role === "") {
            setError("Role Required");
        } else if (maxcontacts === "") {
            setError("Maxcontacts Required");
        } else if (maxapikeys === "") {
            setError("maxapikeys Required");
        } else if (maxtemplates === "") {
            setError("MaxTemplates Required");
        } else {
            setName("");
            setEmail("");
            setCredit("");
            setRole("");
            setPassword("");
            setMaxContacts("");
            setMaxApiKeys("");
            setMaxTemplates("");
            setError("");
            onProcess();
            setSuccess("User Create Successfully");
        }
    };


    const onProcess = () => {
        var obj = { Name: name, Email: email, Password: password, Credit: credit, Role: role, RegTime: null, MaxContacts: maxcontacts, MaxApiKeys: maxapikeys, MaxTemplates: maxtemplates };


        axios.post("user/add", obj)
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
        <>
        <IsLoggegIn></IsLoggegIn>
            <div id="wrapper">
                <TopBar></TopBar>
                <LeftSideBar></LeftSideBar>
                <div className="content-page">
                    <div className="content">


                        <div className="container-fluid">

                            {/* start page title */}

                            <BreadcrumbNav page="User Create" title="User Create"></BreadcrumbNav>

                            <div>

                                <input name="__RequestVerificationToken" type="hidden" defaultValue="HrOs0oHo1hWU4oBZfvLTRJTATqkFMvXwxQ1Jdf2U4tTp3Rlayc2Ni3wjkUm6MulAE-zAoXwpoIs7LaQH3hai9_CJ7jHA7Q22QgKhwUpXdI39_2B5Nc4zbulMFOYaNH3z0" />
                                <div className="row">


                                    <div className="col-lg-6">


                                        {error ? <AlertError msg={error}></AlertError> : ""}
                                        {success ? <AlertSuccess msg={success}></AlertSuccess> : ""}

                                        <div className="card-box">




                                            <div className="form-group mb-3">
                                                <label htmlFor="product-meta-keywords">Name</label>
                                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" name="Name" id="Name" placeholder="" />
                                                <span className="field-validation-valid text-danger" data-valmsg-htmlhtmlFor="Name" data-valmsg-replace="true"></span>
                                            </div>


                                            <div className="form-group mb-3">
                                                <label htmlFor="product-meta-keywords">Email</label>
                                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" name="Email" id="Email" placeholder="" />
                                                <span className="field-validation-valid text-danger" data-valmsg-htmlhtmlFor="Email" data-valmsg-replace="true"></span>
                                            </div>


                                            <div className="form-group mb-3">
                                                <label htmlFor="product-meta-keywords">Password</label>
                                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" name="Email" id="Email" placeholder="" />
                                                <span className="field-validation-valid text-danger" data-valmsg-htmlhtmlFor="Email" data-valmsg-replace="true"></span>
                                            </div>



                                            <div className="form-group mb-3">
                                                <label htmlFor="product-meta-keywords">Credit</label>
                                                <input value={credit} onChange={(e) => setCredit(e.target.value)} type="text" className="form-control" name="Credit" id="Credit" placeholder="" />
                                                <span className="field-validation-valid text-danger" data-valmsg-htmlhtmlFor="Credit" data-valmsg-replace="true"></span>
                                            </div>


                                            <div class="form-group mb-3">
                                                <label for="product-meta-title">Role</label>
                                                <select name="TemplateId1" onChange={(e) => setRole(e.target.value)} onClick={(e) => setRole(e.target.value)} class="custom-select">
                                                    <option value="">Select One</option>
                                                    <option value="2">User</option>
                                                    <option value="1">Admin</option>
                                                </select>
                                                <span class="field-validation-valid text-danger" data-valmsg-replace="true"></span>
                                            </div>

                                            <div className="form-group mb-3">
                                                <label htmlFor="product-meta-keywords">MaxContacts</label>
                                                <input value={maxcontacts} onChange={(e) => setMaxContacts(e.target.value)} type="text" className="form-control" name="MaxContacts" id="MaxContacts" placeholder="" />
                                                <span className="field-validation-valid text-danger" data-valmsg-htmlhtmlFor="MaxContacts" data-valmsg-replace="true"></span>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor="product-meta-keywords">MaxApiKeys</label>
                                                <input value={maxapikeys} onChange={(e) => setMaxApiKeys(e.target.value)} type="text" className="form-control" name="MaxApiKeys" id="MaxApiKeys" placeholder="" />
                                                <span className="field-validation-valid text-danger" data-valmsg-htmlhtmlFor="MaxApiKeys" data-valmsg-replace="true"></span>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label htmlFor="product-meta-keywords">MaxTemplates</label>
                                                <input value={maxtemplates} onChange={(e) => setMaxTemplates(e.target.value)} type="text" className="form-control" name="MaxTemplates" id="MaxTemplates" placeholder="" />
                                                <span className="field-validation-valid text-danger" data-valmsg-htmlhtmlFor="MaxTemplates" data-valmsg-replace="true"></span>
                                            </div>




                                            <div className="text-center mb-3">
                                                <Link to="/user" type="button" className="btn w-sm btn-light waves-effect">Cancel</Link>
                                                <button type="submit" onClick={onSubmit} className="btn w-sm btn-success waves-effect waves-light">Save</button>

                                            </div>


                                        </div>



                                    </div>
                                </div>


                            </div>

                            {/* end row*/}
                        </div>
                    </div>
                    {/* content */}
                    {/* Footer Start */}
                    <Footer></Footer>
                    {/* end Footer */}


                </div>

            </div>
            <RightSidebar></RightSidebar>
            <div className="rightbar-overlay"></div>
        </>

    );
}

export default UserCreate;