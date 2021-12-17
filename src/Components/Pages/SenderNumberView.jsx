import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";
import BreadcrumbNav from "../BreadcrumbNav";
import { Link } from "react-router-dom";
function SenderNumberView() {
    return (
        <>
            <div id="wrapper">
                <TopBar></TopBar>
                <LeftSideBar></LeftSideBar>
                <div className="content-page">
                    <div className="content">


                        <div className="container-fluid">

                            {/* start page title */}

                            <BreadcrumbNav page="User" title="View"></BreadcrumbNav>

                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">


                                            <div className="table-responsive">
                                                <table className="table table-centered table-striped dt-responsive nowrap w-100" id="products-datatable">
                                                    <thead>
                                                        <tr>
                                                            <th>ID</th>
                                                            <th>Number</th>
                                                            <th>Device ID</th>
                                                            <th>ApiToken</th>



                                                            <th style={{width: "75px"}}>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>

                                                            <td className="table-user">

                                                                1
                                                            </td>
                                                            <td>+8801833245245</td>
                                                            <td>
                                                                1110|0
                                                            </td>
                                                            <td>
                                                                441ed028b1f065c1f39e6a31386af823dbb2f476
                                                            </td>



                                                            <td>
                                                                <a href="/SenderNumber/Edit/1" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></a>
                                                                <a href="/SenderNumber/Delete/1" className="action-icon"> <i className="mdi mdi-delete"></i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td className="table-user">

                                                                2
                                                            </td>
                                                            <td>+8801844784850</td>
                                                            <td>
                                                                1110|1
                                                            </td>
                                                            <td>
                                                                441ed028b1f065c1f39e6a31386af823dbb2f476
                                                            </td>



                                                            <td>
                                                                <a href="/SenderNumber/Edit/2" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></a>
                                                                <a href="/SenderNumber/Delete/2" className="action-icon"> <i className="mdi mdi-delete"></i></a>
                                                            </td>
                                                        </tr>

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

export default SenderNumberView;