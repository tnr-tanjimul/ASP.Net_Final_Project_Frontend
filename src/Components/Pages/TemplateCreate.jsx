import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";
import BreadcrumbNav from "../BreadcrumbNav";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import AlertError from "./AlertError";
import AlertSuccess from "./AlertSuccess";
const TemplateCreate = (props) => {
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
    let [message, setMessage] = useState("");

    const onSubmit = () => {
        if (name === "" && message === "") {
            setError("Name & Message Required");
        } else if (name === "") {
            setError("Name Required");
        } else if (message === "") {
            setError("Message Required");
        } else {
            setName("");
            setMessage("");
            setError("");
            onProcess();
            setSuccess("Template Create Successfully");
        }
    };


    const onProcess = () => {
        var obj = { UserId: UserId, Name: name, Message: message };
        axios.post("template/add", obj)
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
            <div id="wrapper">
                <TopBar></TopBar>
                <LeftSideBar></LeftSideBar>
                <div className="content-page">
                    <div className="content">


                        <div className="container-fluid">

                            {/* start page title */}

                            <BreadcrumbNav page="Template" title="Create"></BreadcrumbNav>

                            <div>

                                <input name="__RequestVerificationToken" type="hidden" defaultValue="HrOs0oHo1hWU4oBZfvLTRJTATqkFMvXwxQ1Jdf2U4tTp3Rlayc2Ni3wjkUm6MulAE-zAoXwpoIs7LaQH3hai9_CJ7jHA7Q22QgKhwUpXdI39_2B5Nc4zbulMFOYaNH3z0" />
                                <div className="row">


                                    <div className="col-lg-6">


                                        {error ? <AlertError msg={error}></AlertError>: ""}
                                        {success ? <AlertSuccess msg={success}></AlertSuccess> : ""}

                                        <div className="card-box">




                                            <div className="form-group mb-3">
                                                <label htmlFor="product-meta-keywords">Name</label>
                                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" name="Name" id="Name" placeholder="" />
                                                <span className="field-validation-valid text-danger" data-valmsg-htmlhtmlFor="Name" data-valmsg-replace="true"></span>
                                            </div>


                                            <div className="form-group mb-3">
                                                <label htmlFor="messageInput">Message</label>
                                                <textarea value={message} name="message" onChange={(e) => setMessage(e.target.value)} className="form-control" rows="5" id="messageInput" data-counter="#smsCounter" placeholder="Please enter description">
                                                    
                                                </textarea>
                                                <span className="field-validation-valid text-danger" data-valmsg-htmlhtmlFor="Message" data-valmsg-replace="true"></span>
                                            </div>


                                            <div className="text-center mb-3">
                                                <Link to="/template" type="button" className="btn w-sm btn-light waves-effect">Cancel</Link>
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

export default TemplateCreate;