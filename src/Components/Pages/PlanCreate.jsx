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
const PlanCreate = (props) => {
    let history = useHistory();
    function handleRedirect() {
        history.push("/plan");
    }
    var UserId = null;
    if (localStorage.getItem('user')) {
        var obj = JSON.parse(localStorage.getItem('user'));
        UserId = obj.UserId;
    }
    let [apiData, setApiData] = useState("");
    let [error, setError] = useState("");
    let [success, setSuccess] = useState("");
    let [name, setName] = useState("");
    let [price, setPrice] = useState("");
    let [credit, setCredit] = useState("");
    let [template, setTemplate] = useState("");
    let [apikey, setApiKey] = useState("");
    let [contact, setContact] = useState("");


    const onSubmit = () => {
        if (name === "" && price === "" && credit === "" && template === "" && apikey === "" && contact === "") {
            setError("All Field Required");
        } else if (name === "") {
            setError("Name Required");
        } else if (price === "") {
            setError("Price Required");
        }
        else if (credit === "") {
            setError("Credit Required");
        }
        else if (template === "") {
            setError("Template Required");
        }
        else if (contact === "") {
            setError("Contact Required");
        }
        
        
        else {
            setName("");
            setPrice("");
            setCredit("");
            setTemplate("");
            setApiKey("");
            setContact("");
            setError("");
            onProcess();
            setSuccess(apiData.message);
        }
    };


    const onProcess = () => {
        var obj = { Name: name, Price: price, Credits: credit, Templates: template, ApiKeys: apikey, Contacts: contact };
        axios.post("plan/add", obj)
            .then(resp => {
                var data = resp.data;
                //alert(data.Message);
                //console.log(data);
                //handleRedirect();

                setApiData(resp.data);
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

                            <BreadcrumbNav page="Plan" title="Create"></BreadcrumbNav>

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
                                                <span className="field-validation-valid text-danger" data-valmsg-htmlhtmlfor="Name" data-valmsg-replace="true"></span>
                                            </div>


                                            <div className="form-group mb-3">
                                                <label htmlFor="product-meta-keywords">Price</label>
                                                <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" className="form-control" name="Price" id="Price" placeholder="" />
                                                <span className="field-validation-valid text-danger" data-valmsg-htmlhtmlfor="Name" data-valmsg-replace="true"></span>
                                            </div>


                                            <div className="form-group mb-3">
                                                <label htmlFor="product-meta-keywords">Credit</label>
                                                <input value={credit} onChange={(e) => setCredit(e.target.value)} type="text" className="form-control" name="Credit" id="Credit" placeholder="" />
                                                <span className="field-validation-valid text-danger" data-valmsg-htmlhtmlfor="Name" data-valmsg-replace="true"></span>
                                            </div>


                                            <div className="form-group mb-3">
                                                <label htmlFor="product-meta-keywords">Contact</label>
                                                <input value={contact} onChange={(e) => setContact(e.target.value)} type="text" className="form-control" name="Contact" id="Contact" placeholder="" />
                                                <span className="field-validation-valid text-danger" data-valmsg-htmlhtmlfor="Name" data-valmsg-replace="true"></span>
                                            </div>


                                            <div className="form-group mb-3">
                                                <label htmlFor="product-meta-keywords">Template</label>
                                                <input value={template} onChange={(e) => setTemplate(e.target.value)} type="text" className="form-control" name="Template" id="Template" placeholder="" />
                                                <span className="field-validation-valid text-danger" data-valmsg-htmlhtmlfor="Name" data-valmsg-replace="true"></span>
                                            </div>

                                            <div className="form-group mb-3">
                                                <label htmlFor="product-meta-keywords">ApiKey</label>
                                                <input value={apikey} onChange={(e) => setApiKey(e.target.value)} type="text" className="form-control" name="ApiKey" id="ApiKey" placeholder="" />
                                                <span className="field-validation-valid text-danger" data-valmsg-htmlhtmlfor="Name" data-valmsg-replace="true"></span>
                                            </div>



                                            






                                            <div className="text-center mb-3">
                                                <Link to="/contact" type="button" className="btn w-sm btn-light waves-effect">Cancel</Link>
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

export default PlanCreate;