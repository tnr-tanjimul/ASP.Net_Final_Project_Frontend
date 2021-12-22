import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";
import BreadcrumbNav from "../BreadcrumbNav";
import { Link } from "react-router-dom";





import React, { useState, useEffect } from "react";
import axios from "axios";
import FetchUserId from "./FetchUserId";
import IsLoggegIn from "../IsLoggegIn";



const PaymentView = (props) => {
    const [apiData, setApidata] = useState([]);


    var UserId = null;
    if (localStorage.getItem('user')) {
        var obj = JSON.parse(localStorage.getItem('user'));
        UserId = obj.UserId;
    }

    useEffect(() => {
        var url = "payment/get?UserId=" + UserId;
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
        <IsLoggegIn></IsLoggegIn>
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
                                                         
                                                            <th>Plan</th>                                                           
                                                            <th>Status</th>
                                                            <th>Amount</th>
                                                            <th>Fee</th>
                                                            <th>Method</th>
                                                            <th>Ref.Number</th>
                                                            <th>TxnNo</th>
                                                            <th>CreatedAt</th>
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
                                                                   
                                                                    <td>{p.PlanName}</td>
                                                                    <td>
                                                                        {p.Status === "Success" &&
                                                                            <span className="badge badge-soft-success">{p.Status}</span>
                                                                        }
                                                                        {p.Status === "Pending" &&
                                                                            <span className="badge badge-soft-warning">{p.Status}</span>
                                                                        }
                                                                    </td>
                                                                    <td>{p.Amount}</td>
                                                                    <td>{p.Fee}</td>
                                                                    <td>{p.Method}</td>
                                                                    <td>{p.RefNo}</td>
                                                                    <td>{p.TxnNo}</td>
                                                                    <td>{p.CreatedAt}</td>

                                                                    <td>

                                                                    {p.Status === "Pending" &&
                                                                          <Link to={"/payment/make/" + p.Id + "/"+p.Amount+""} className="action-icon">
                                                                          <button type="button" className="btn btn-info btn-rounded waves-effect waves-light">Pay</button>
                                                                        </Link>
                                                                    }
                                                                    
                                                                        
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

export default PaymentView;