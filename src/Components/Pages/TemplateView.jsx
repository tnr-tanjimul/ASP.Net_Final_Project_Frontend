import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";
import BreadcrumbNav from "../BreadcrumbNav";
import { Link } from "react-router-dom";
function TemplateView() {
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
                                                        <tr>

                                                            <td className="table-user">

                                                                2
                                                            </td>
                                                            <td>tan                                                                                                 </td>
                                                            <td>
                                                                csfdgdgsg
                                                            </td>




                                                            <td>
                                                                <Link to="/Template/Edit/2" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></Link>
                                                                <Link to="/Template/Delete/2" className="action-icon"> <i className="mdi mdi-delete"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td className="table-user">

                                                                14
                                                            </td>
                                                            <td>CseBatch                                                                                            </td>
                                                            <td>
                                                                jugvuih
                                                            </td>




                                                            <td>
                                                                <Link to="/Template/Edit/14" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></Link>
                                                                <Link to="/Template/Delete/14" className="action-icon"> <i className="mdi mdi-delete"></i></Link>
                                                            </td>
                                                        </tr>

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