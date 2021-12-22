
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";
import BreadcrumbNav from "../BreadcrumbNav";
import { Redirect } from 'react-router-dom';
import AlertError from "./AlertError";
import AlertSuccess from "./AlertSuccess";
import IsLoggegIn from "../IsLoggegIn";

const PayNow = (props) => {
    const { id } = useParams();
    const { amount } = useParams();




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

                            <BreadcrumbNav page="Payment Make" title="Payment"></BreadcrumbNav>

                            <div>

                                <input name="__RequestVerificationToken" type="hidden" defaultValue="HrOs0oHo1hWU4oBZfvLTRJTATqkFMvXwxQ1Jdf2U4tTp3Rlayc2Ni3wjkUm6MulAE-zAoXwpoIs7LaQH3hai9_CJ7jHA7Q22QgKhwUpXdI39_2B5Nc4zbulMFOYaNH3z0" />
                                <div className="row">


                                    <div className="col-lg-6">


                                      

                                        <div className="card-box">




                                            <div className="col-md-12" id="bkash_img" align="left">
                                                <b style={{ color: "red", fontSize: "13px !important" }}>Please input bKash Transaction ID in Capital Letters &amp; Only Once, Also pay exact amount mentioned in your merchant store.</b>
                                                <hr />
                                                <h4><b>How to Make Payment with bKash / পেমেন্ট বিকাশ করতে নীচের ধাপগুলো অনুসরণ করুন</b></h4>
                                                <br />
                                                <p style={{ fontSize: "13px !important", padding: "0px !important" }}>
                                                    1. Go to your bKash Mobile Menu by dialing <b style={{ color: "green" }}>*247#</b><br />
                                                    2. Choose <b style={{ color: "green" }}>Send Money</b><br />
                                                    3. Enter the Personal bKash Account Number <b style={{ color: "green" }}>01971789282</b><br />
                                                    4. Enter the amount <b style={{ color: "green" }} id="invo_amount">{amount}</b><br />
                                                    5. Enter a reference <b style={{ color: "green" }}>{id}</b><br />
                                                    6. Enter the Counter Number <b style={{ color: "green" }}>1</b><br />
                                                    7. Now enter your bKash Mobile Menu <b style={{ color: "green" }}>PIN to confirm</b><br />
                                                    8. Done! You will receive a confirmation message from bKash<br/>
                                                        9. Put the Transaction ID in the upper box and press <b style={{ color: "green" }}>Confirm</b>
                                                </p>
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
export default PayNow;