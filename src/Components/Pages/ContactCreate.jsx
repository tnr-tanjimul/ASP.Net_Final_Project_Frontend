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
const ContactCreate = (props) => {
    let history = useHistory();
    function handleRedirect() {
        history.push("/contact");
    }
    var UserId = null;
    if (localStorage.getItem('user')) {
        var obj = JSON.parse(localStorage.getItem('user'));
        UserId = obj.UserId;
    }
    let [error, setError] = useState("");
    let [success, setSuccess] = useState("");
    let [groupid, setGroup] = useState("");
    let [number, setNumber] = useState("");
    let [name, setName] = useState("");
    const [groupData, setGroupData] = useState([]);

    const onSubmit = () => {
        if (groupid === "" && number === "" && name === "") {
            setError("Name & Group Required");
        } else if (name === "") {
            setError("Name Required");
        } else if (groupid === "") {
            setError("Group  Required");
        }
        else if (number === "") {
            setError("Number Required");
        } else {
            setGroup("");
            setNumber("");
            setName("");

            setError("");
            onProcess();
            setSuccess("Contact Create Successfully");
        }
    };


    const onProcess = () => {
        var obj = { GroupId: groupid, Number: number, Name: name };
        axios.post("contact/add", obj)
            .then(resp => {
                var data = resp.data;
                //alert(data.Message);
                console.log(data);
                //handleRedirect();


            }).catch(err => {
                console.log(err);
            });


    }

    const fetchGroup = () => {
        var url = "group/get?UserId=" + UserId;
        axios.get(url)
            .then(resp => {
                var data = resp.data;
                //alert(data.Message);
                //console.log(data);
                //handleRedirect();
                setGroupData(resp.data);
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

                            <BreadcrumbNav page="Template" title="Create"></BreadcrumbNav>

                            <div>

                                <input name="__RequestVerificationToken" type="hidden" defaultValue="HrOs0oHo1hWU4oBZfvLTRJTATqkFMvXwxQ1Jdf2U4tTp3Rlayc2Ni3wjkUm6MulAE-zAoXwpoIs7LaQH3hai9_CJ7jHA7Q22QgKhwUpXdI39_2B5Nc4zbulMFOYaNH3z0" />
                                <div className="row">


                                    <div className="col-lg-6">


                                        {error ? <AlertError msg={error}></AlertError> : ""}
                                        {success ? <AlertSuccess msg={success}></AlertSuccess> : ""}

                                        <div className="card-box">




                                        <div className="form-group mb-3">
                                                <label htmlFor="product-meta-title">Group</label>
                                                <select onClick={fetchGroup} onChange={(e) => setGroup(e.target.value)} name="GroupId" className="custom-select " required="">
                                                    <option value="">Open menu</option>
                                                    {
                                                        groupData.map(p => (
                                                            <option key={p.Id} value={p.Id}>{p.Name}</option>
                                                        ))
                                                    }
                                                </select>
                                                <span className="field-validation-valid text-danger" data-valmsg-replace="true"></span>
                                            </div>



                                            <div className="form-group mb-3">
                                                <label htmlFor="product-meta-keywords">Number</label>
                                                <input value={number} onChange={(e) => setNumber(e.target.value)} type="text" className="form-control" name="Number" id="Number" placeholder="" />
                                                <span className="field-validation-valid text-danger" data-valmsg-htmlhtmlFor="Number" data-valmsg-replace="true"></span>
                                            </div>

                                            <div className="form-group mb-3">
                                                <label htmlFor="product-meta-keywords">Name</label>
                                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" name="Name" id="Name" placeholder="" />
                                                <span className="field-validation-valid text-danger" data-valmsg-htmlhtmlFor="Name" data-valmsg-replace="true"></span>
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

export default ContactCreate;