import BreadcrumbNav from "../BreadcrumbNav";
import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";
import axios from "axios";
import React, { useState, userEffect } from "react";
import AlertError from "./AlertError";
import AlertSuccess from "./AlertSuccess";
const ApiKeyGenerator = (props) => {
    var UserId = null;
    if (localStorage.getItem('user')) {
        var obj = JSON.parse(localStorage.getItem('user'));
        UserId = obj.UserId;
    }
    const [apiData, setApidata] = useState([]);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    const [senderNumberData, setSenderNumberData] = useState([]);
    const [apiKeyData, setApiKeyData] = useState([]);
    const [apiKey, setApiKey] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [senderNumber,setSenderNumber] = useState("");

    const [generatedKey,setGeneratedKey] = useState("");

    

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
            let msg ="https://localhost:44390/api/send?Key="+apiKey+"&Sender="+senderNumber+"&Number="+number+"&Message="+encodeURIComponent(message);
            setSuccess(msg);
        }
    };


    


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

    const fetchApiKey = () => {
        var url = "apikey/get?UserId=" + UserId;
        axios.get(url)
            .then(resp => {
                var data = resp.data;
               // alert("hey");
                //console.log(data);
                //handleRedirect();
               setApiKeyData(resp.data);
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

                            <BreadcrumbNav page="Api Key Generator" title="Api Key Generator"></BreadcrumbNav>

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
                                                <label htmlFor="product-meta-title">Api keys</label>
                                                <select onClick={fetchApiKey} onChange={(e) => setApiKey(e.target.value)} name="ApiId" className="custom-select " required="">
                                                    <option value="">Open menu</option>
                                                    {
                                                        apiKeyData.map(p => (
                                                            <option key={p.Id} value={p.SecretKey}>{p.Name}</option>
                                                        ))
                                                    }
                                                </select>
                                                <span className="field-validation-valid text-danger" data-valmsg-replace="true"></span>
                                            </div>


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
                                            <label htmlFor="product-meta-keywords">Mobile Numbers</label>
                                            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} className="form-control" name="Numbers" id="Numbers" placeholder="+8801XXXXXXXXX,+8801XXXXXXXXX" />
                                            <span className="field-validation-valid text-danger" data-valmsg-replace="true"></span>
                                        </div>

                                        <div className="form-group mb-3">
                                            <label htmlFor="messageInput">Message</label>
                                            <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" data-counter="#smsCounter" className="form-control" rows="5" id="messageInput" placeholder="Please enter description"></textarea>
                                            <span className="field-validation-valid text-danger" data-valmsg-replace="true"></span>
                                        </div>
                                        <ul id="smsCounter" hidden="hidden">
                                            <li>Encoding: <span className="encoding"></span></li>
                                            <li>Length: <span className="length"></span></li>
                                            <li>Messages: <span className="messages"></span></li>
                                            <li>Per Message: <span className="per_message"></span></li>
                                            <li>Remaining: <span className="remaining"></span></li>
                                        </ul>
                                    </div>

                                    <div className="text-center mb-3">
                                      
                                        <button type="submit" onClick={onSubmit} className="btn w-sm btn-success waves-effect waves-light">Generate</button>

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

export default ApiKeyGenerator;