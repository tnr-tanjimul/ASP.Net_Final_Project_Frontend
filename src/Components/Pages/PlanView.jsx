import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";
import BreadcrumbNav from "../BreadcrumbNav";
import { Link } from "react-router-dom";





import React, { useState, useEffect } from "react";
import axios from "axios";
import FetchUserId from "./FetchUserId";



const PlanView = (props) => {
    const [apiData, setApidata] = useState([]);


    var UserId = null;
    if (localStorage.getItem('user')) {
        var obj = JSON.parse(localStorage.getItem('user'));
        UserId = obj.UserId;
    }

    useEffect(() => {
        var url = "plan/get?UserId=" + UserId;
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

                        {/* Start Content*/}
                        <div className="container-fluid">

                        <BreadcrumbNav page="Plan" title="All"></BreadcrumbNav>


                            <div className="row justify-content-center">
                                <div className="col-xl-10">

                                    {/* Pricing Title*/}
                                    <div className="text-center">
                                        <h3 className="mb-2">Our <b>Plans</b></h3>
                                        <p className="text-muted w-50 m-auto">
                                            We have plans and prices that fit your business perfectly. Make your client site a success with our products.
                                        </p>
                                    </div>

                                    {/* Plans */}
                                    <div className="row my-3">



                                        {
                                            apiData.map((p, index) => (


                                                <div key={index} className="col-md-4">

                                                    <div className="card card-pricing">
                                                        <div className="card-body text-center">
                                                            <p className="card-pricing-plan-name font-weight-bold text-uppercase">{p.Name}</p>
                                                            <span className="card-pricing-icon text-primary">
                                                                <i className="fe-users"></i>
                                                            </span>
                                                            <h2 className="card-pricing-price">{p.Price} <span>Tk</span></h2>
                                                            <ul className="card-pricing-features">
                                                                <li>{p.Credits} SMS Credit</li>
                                                                <li>{p.Templates} Template Limit</li>
                                                                <li>{p.ApiKeys} ApiKey Limit</li>
                                                                <li>{p.Contacts} Contacts Limit</li>
                                                                <li>Unlimited Validity</li>
                                                                <li>24x7 Support</li>
                                                            </ul>


                                                            <Link to={"/plan/buy/" + p.Id + ""} className="action-icon">
                                                                <button className="btn btn-primary waves-effect waves-light mt-4 mb-2 width-sm">Buy Now</button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>

                                            ))
                                        }


                                    </div>
                                    {/* end row */}

                                </div> {/* end col*/}
                            </div>
                            {/* end row */}

                        </div> {/* container */}

                    </div> {/* content */}


                    <Footer></Footer>



                </div>

            </div>
            <RightSidebar></RightSidebar>
            <div className="rightbar-overlay"></div>
        </>

    );
}

export default PlanView;