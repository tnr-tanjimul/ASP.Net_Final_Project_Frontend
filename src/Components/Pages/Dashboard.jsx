import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";
import DashItem from "./DashItem";
import { Link } from "react-router-dom";
import IsLoggegIn from "../IsLoggegIn";
import axios from "axios";
import React, { useState, useEffect } from "react";
export const Dashboard = () => {
    const [apiData, setApidata] = useState([]);
    const [SendMessages, setSendMessages] = useState("");
    const [FailedMessages, setFailedMessages] = useState("");
    const [SuccessMessages, setSuccessMessages] = useState("");
    const [Credit, setCredit] = useState("");
    const [Users, setUsers] = useState("");
    const [Groups, setGroups] = useState("");
    const [Templates, setTemplates] = useState("");
    const [ApiKeys, setApiKeys] = useState("");
    const [Payemnts, setPayemnts] = useState("");

    var UserId = null;
    if (localStorage.getItem('user')) {
        var obj = JSON.parse(localStorage.getItem('user'));
        UserId = obj.UserId;
        await TuseEffect();
    }
   //alert(UserId);

    async TuseEffect(() => {
          const url = "dashboard/get?UserId=" + UserId;
          axios.get(url)
                .then(resp => {
                     // console.log(resp.data);
                      setApidata(resp.data);
                      
                      setSendMessages(apiData.SendMessages);

                      
                      setFailedMessages(apiData.FailedMessages);
                      setSuccessMessages(apiData.SuccessMessages);
                      setCredit(apiData.Credit);
                      setUsers(apiData.Users);
                      setGroups(apiData.Groups);
                      setTemplates(apiData.Templates);
                      setApiKeys(apiData.ApiKeys);
                      setPayemnts(apiData.Payemnts);
                      
                }).catch(err => {
                      console.log(err);
                });
    }, []);
    return (
    <>
    
    <div id="wrapper">
        <TopBar></TopBar>
        <LeftSideBar></LeftSideBar>
        <div className="content-page">
            <div className="content">


                <div className="container-fluid">

                    {/* start page title */}
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box">
                                <div className="page-title-right">
                                    <form className="form-inline">
                                        <div className="form-group">
                                            <div className="input-group input-group-sm">
                                                <input type="text" className="form-control border-0" id="dash-daterange" />
                                                <div className="input-group-append">
                                                    <span className="input-group-text bg-blue border-blue text-white">
                                                        <i className="mdi mdi-calendar-range"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <Link to="#" className="btn btn-blue btn-sm ml-2">
                                            <i className="mdi mdi-autorenew"></i>
                                        </Link>
                                        <Link to="#" className="btn btn-blue btn-sm ml-1">
                                            <i className="mdi mdi-filter-variant"></i>
                                        </Link>
                                    </form>
                                </div>
                                <h4 className="page-title">Dashboard</h4>
                            </div>
                        </div>
                    </div>
                    {/* end page title */}

                    <div className="row">
                        <div className="col-12">
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

export default Dashboard;