import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";
import BreadcrumbNav from "../BreadcrumbNav";
import { Link } from "react-router-dom";





import React, { useState, useEffect } from "react";
import axios from "axios";
import FetchUserId from "./FetchUserId";



const MessagesView = (props) => {
    const [apiData, setApidata] = useState([]);


    var UserId = null;
    if (localStorage.getItem('user')) {
        var obj = JSON.parse(localStorage.getItem('user'));
        UserId = obj.UserId;
    }

    useEffect(() => {
        var url = "message/get?UserId=" + UserId;
        //alert(url);
        axios.get(url)
            .then(resp => {
                console.log(resp.data);
                setApidata(resp.data);
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

                            <BreadcrumbNav page="Group" title="View"></BreadcrumbNav>
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">


                                            <div className="table-responsive">
                                                <table className="table table-centered table-striped dt-responsive nowrap w-100" id="products-datatable">
                                                    <thead>
                                                        <tr>

                                                            <th>ID</th>
                                                            <th>Numbers</th>
                                                            <th>Message</th>
                                                            <th>SendTime</th>
                                                            <th>Status</th>
                                                            <th style={{ width: "75px" }}>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            apiData.map((p, index) => (
                                                                <tr key={index}>

                                                                    <td className="table-user">
                                                                        {p.Id}
                                                                    </td>
                                                                    <td>{p.Numbers}</td>
                                                                    <td>{p.MessageBody}</td>
                                                                    <td>{p.SendTime}</td>

                                                                    <td>
                                                                        {p.Status === "Success" &&
                                                                            <span className="badge badge-soft-success">{p.Status}</span>
                                                                        }
                                                                        {p.Status === "Failed" &&
                                                                            <span className="badge badge-soft-warning">{p.Status}</span>
                                                                        }
                                                                    </td>

                                                                    <td>
                                                                        <Link to={"/message/edit/" + p.Id + ""} className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></Link>
                                                                        <Link to={"/message/delete/" + p.Id + ""} className="action-icon"> <i className="mdi mdi-delete"></i></Link>
                                                                    </td>
                                                                </tr>

                                                            ))
                                                        }

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <Footer></Footer>



                </div>

            </div>
            <RightSidebar></RightSidebar>
            <div className="rightbar-overlay"></div>
        </>

    );
}

export default MessagesView;