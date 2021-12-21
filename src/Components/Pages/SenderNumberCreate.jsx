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
import IsLoggegIn from "../IsLoggegIn";
const SenderNumberCreate = (props) => {
    let history = useHistory();
    function handleRedirect() {
        history.push("/senderNumber");
    }
    var UserId = null;
    if (localStorage.getItem('senderNumber')) {
        var obj = JSON.parse(localStorage.getItem('senderNumber'));
        UserId = obj.UserId;
    }
    let [error, setError] = useState("");
    let [success, setSuccess] = useState("");
    let [Number, setNumber] = useState("");
    let [DeviceId, setDeviceId] = useState("");
    let [ApiToken, setApiToken] = useState("");

    const onSubmit = () => {
        if (Number === "" && DeviceId === "" && ApiToken === "") {
            setError("All Field Required");
        } else if (Number === "") {
            setError("Number Required");
        } else if (DeviceId === "") {
            setError("Device ID Required");
        }
        else if (ApiToken === "") {
            setError("ApiToken Required");
        }
        else {
            setApiToken("");
            setDeviceId("");
            setNumber("");
            setError("");
            onProcess();
            setSuccess("Sender Number Create Successfully");
        }
    };


    const onProcess = () => {
        var obj = { Number: Number, DeviceId: DeviceId, ApiToken: ApiToken };


        axios.post("senderNumber/add", obj)
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

                            <BreadcrumbNav page="SenderNumber" title="Create"></BreadcrumbNav>

                            <div>

                                <input name="__RequestVerificationToken" type="hidden" defaultValue="HrOs0oHo1hWU4oBZfvLTRJTATqkFMvXwxQ1Jdf2U4tTp3Rlayc2Ni3wjkUm6MulAE-zAoXwpoIs7LaQH3hai9_CJ7jHA7Q22QgKhwUpXdI39_2B5Nc4zbulMFOYaNH3z0" />
                                <div className="row">


                                    <div className="col-lg-6">


                                        {error ? <AlertError msg={error}></AlertError> : ""}
                                        {success ? <AlertSuccess msg={success}></AlertSuccess> : ""}

                                        <div className="card-box">




                                            <div className="form-group mb-3">
                                                <label htmlFor="product-meta-keywords">Number</label>
                                                <input value={Number} onChange={(e) => setNumber(e.target.value)} type="text" className="form-control" name="Number" id="Number" placeholder="" />
                                                <span className="field-validation-valid text-danger" data-valmsg-htmlhtmlFor="Name" data-valmsg-replace="true"></span>
                                            </div>


                                            <div className="form-group mb-3">
                                                <label htmlFor="product-meta-keywords">Device ID</label>
                                                <input value={DeviceId} onChange={(e) => setDeviceId(e.target.value)} type="text" className="form-control" name="DeviceId" id="DeviceId" placeholder="" />
                                                <span className="field-validation-valid text-danger" data-valmsg-htmlhtmlFor="Name" data-valmsg-replace="true"></span>
                                            </div>


                                            <div className="form-group mb-3">
                                                <label htmlFor="product-meta-keywords">Api Token</label>
                                                <input value={ApiToken} onChange={(e) => setApiToken(e.target.value)} type="text" className="form-control" name="ApiToken" id="ApiToken" placeholder="" />
                                                <span className="field-validation-valid text-danger" data-valmsg-htmlhtmlFor="Name" data-valmsg-replace="true"></span>
                                            </div>



                                            


                                            <div className="text-center mb-3">
                                                <Link to="/senderNumber" type="button" className="btn w-sm btn-light waves-effect">Cancel</Link>
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

export default SenderNumberCreate;