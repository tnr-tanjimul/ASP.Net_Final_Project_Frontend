import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";
import BreadcrumbNav from "../BreadcrumbNav";
import { Link } from "react-router-dom";





import React, { useState, useEffect } from "react";
import axios from "axios";
import FetchUserId from "./FetchUserId";



const TemplateView = (props) => {
    const [apiData, setApidata] = useState([]);


    var UserId = null;
    if (localStorage.getItem('user')) {
        var obj = JSON.parse(localStorage.getItem('user'));
        UserId = obj.UserId;
    }

    useEffect(() => {
        var url = "template/get?UserId="+UserId;
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

                            <BreadcrumbNav page="Template" title="View"></BreadcrumbNav>
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">


                                            <div className="table-responsive">
                                                <table className="table table-centered table-striped dt-responsive nowrap w-100" id="products-datatable">
                                                    <thead>
                                                        <tr>
                                                            <th>ID</th>
                                                            <th>Name</th>
                                                            <th>Message</th>




                                                            <th style={{ width: "75px" }}>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            apiData.map(p => (
                                                                <tr key={p.id}>

                                                                    <td className="table-user">{p.Id.toString().trim()}</td>

                                                                    <td>{p.Name.trim()}</td>


                                                                    <td>{p.Message.trim()}</td>


                                                                    <td>
                                                                        <Link to={"/template/edit/" + p.Id + ""} className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></Link>
                                                                        <Link to={"/template/delete/" + p.Id + ""} className="action-icon"> <i className="mdi mdi-delete"></i></Link>
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

export default TemplateView;