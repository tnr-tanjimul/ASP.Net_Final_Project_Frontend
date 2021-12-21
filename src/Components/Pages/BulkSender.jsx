import BreadcrumbNav from "../BreadcrumbNav";
import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";
import axios from "axios";
import React, { useState, userEffect } from "react";
import AlertError from "./AlertError";
import AlertSuccess from "./AlertSuccess";
const BulkSender = (props) => {
    var UserId = null;
    if (localStorage.getItem('user')) {
        var obj = JSON.parse(localStorage.getItem('user'));
        UserId = obj.UserId;
    }
    const [apiData, setApidata] = useState([]);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const [templateData, setTemplateData] = useState([]);
    const [groupData, setGroupData] = useState([]);
    const [senderNumberData, setSenderNumberData] = useState([]);

    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [group, setGroup] = useState("");
    const [senderNumber,setSenderNumber] = useState("");

    

    const onSubmit = () => {
        if (number === "" && message === "" && senderNumber == "") {
            setError("Number Message & Sender Required");
            setSuccess("");
        } else if (number === "") {
            setError("Number Required");
            setSuccess("");
        } else if (message === "") {
            setError("Message Required");
            setSuccess("");
        }
        else if (senderNumber === "") {
            setError("Sender Required");
            
            setSuccess("");
        }
        else {
            setNumber("");
            setMessage("");
            setError("");
            onProcess();
            setSuccess(apiData.message);
        }
    };


    const onProcess = () => {
        var obj = { UserId: UserId,GroupId:group, SenderNumberId: senderNumber,Numbers: number, Message: message };
        axios.post("bulksender", obj)
            .then(resp => {
                var data = resp.data;
                //alert(data.Message);
                //alert("njj");
                console.log(data);
                //handleRedirect();
                setApidata(resp.data);
            }).catch(err => {
                console.log(err);
            });
    }

    const fetchTemplate = () => {
        var url = "template/get?UserId=" + UserId;
        axios.get(url)
            .then(resp => {
                var data = resp.data;
                //alert(data.Message);
                //console.log(data);
                //handleRedirect();
                setTemplateData(resp.data);
                setMessage(templateData.Message)
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

    const fetchSenderNumber = () => {

        axios.get("sendernumber/all")
            .then(resp => {
                var data = resp.data;
                //alert(data.Message);
                //console.log(data);
                //handleRedirect();
                setSenderNumberData(resp.data);
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

                            <BreadcrumbNav page="Bulk Sender" title="Bulk Sender"></BreadcrumbNav>

                            <div>

                                <input name="__RequestVerificationToken" type="hidden" defaultValue="qbAhVPmtBFAwH8xOImGMpxY3lSZXVrvdvfX7rpKQlAQs9Lnjs3wnmbxcLLoSlPQnHrprzeeqCxyS6808pSayVCIGPMIYP5bMIWSpKkAMbJE7KsdXXsWQlOPTqHWg4Khz0" />
                                <div className="row">


                                    <div className="col-lg-6">


                                        <div className="form-group">


                                            {error ? <AlertError msg={error}></AlertError> : ""}
                                            {success ? <AlertSuccess msg={success}></AlertSuccess> : ""}


                                        </div>

                                        <div className="card-box">





                                            <div className="form-group mb-3">
                                                <label htmlFor="product-meta-title">Sender Numbers</label>
                                                <select onClick={fetchSenderNumber} onChange={(e) => setSenderNumber(e.target.value)} name="SenderNumberId" className="custom-select " required="">
                                                    <option value="">Open menu</option>
                                                    {
                                                        senderNumberData.map(p => (
                                                            <option key={p.Id} value={p.Id}>{p.Number}</option>
                                                        ))
                                                    }
                                                </select>
                                                <span className="field-validation-valid text-danger" data-valmsg-replace="true"></span>
                                            </div>


                                            <div className="form-group mb-3">
                                                <label htmlFor="product-meta-title">Templates</label>
                                                <select name="TemplateId" className="custom-select" onClick={fetchTemplate} onChange={(e) => setMessage(e.target.value)} required="">
                                                    <option value="">None</option>



                                                    {
                                                        templateData.map(t => (
                                                            <option key={t.Id} value={t.Id}>{t.Name}</option>
                                                        ))
                                                    }    


                                            </select>
                                            <span className="field-validation-valid text-danger" data-valmsg-replace="true"></span>
                                        </div>

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
                                            <label htmlFor="product-meta-keywords">Mobile Numbers</label>
                                            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} className="form-control" name="Numbers" id="Numbers" placeholder="+8801XXXXXXXXX,+8801XXXXXXXXX" />
                                            <span className="field-validation-valid text-danger" data-valmsg-replace="true"></span>
                                        </div>

                                        <div className="form-group mb-3">
                                            <label htmlFor="messageInput">Message</label>
                                            <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" data-counter="#smsCounter" className="form-control" rows="5" id="messageInput" placeholder="Please enter description"></textarea>
                                            <span className="field-validation-valid text-danger" data-valmsg-replace="true"></span>
                                        </div>
                                        <ul>You Can use <b>[Name]</b> Place Holder for Add contact name</ul>
                                        <ul id="smsCounter" hidden="hidden">
                                            <li>Encoding: <span className="encoding"></span></li>
                                            <li>Length: <span className="length"></span></li>
                                            <li>Messages: <span className="messages"></span></li>
                                            <li>Per Message: <span className="per_message"></span></li>
                                            <li>Remaining: <span className="remaining"></span></li>
                                        </ul>
                                    </div>

                                    <div className="text-center mb-3">
                                        <button type="button" className="btn w-sm btn-light waves-effect">Cancel</button>
                                        <button type="submit" onClick={onSubmit} className="btn w-sm btn-success waves-effect waves-light">Send</button>

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

            </div >
            <RightSidebar></RightSidebar>
            <div className="rightbar-overlay"></div>
        </>

    );
}

export default BulkSender;