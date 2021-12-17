import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";
import BreadcrumbNav from "../BreadcrumbNav";
import { Link } from "react-router-dom";
function MessagesView() {
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
                                                        <tr>

                                                            <td className="table-user">

                                                                26
                                                            </td>
                                                            <td>01792426831</td>
                                                            <td>
                                                                Dear user,
                                                                Good Morning.
                                                            </td>
                                                            <td>
                                                                11/3/2021 12:41:01 PM
                                                            </td>

                                                            <td>
                                                                <span className="badge badge-soft-success">Success</span>


                                                            </td>

                                                            <td>
                                                                <Link to="#" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></Link>
                                                                <Link to="/Message/Delete/26" className="action-icon"> <i className="mdi mdi-delete"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td className="table-user">

                                                                27
                                                            </td>
                                                            <td>01792426831</td>
                                                            <td>
                                                                Dear Tanjimul                                                                                            ,
                                                                Good Morning
                                                            </td>
                                                            <td>
                                                                11/3/2021 12:51:24 PM
                                                            </td>

                                                            <td>
                                                                <span className="badge badge-soft-success">Success</span>


                                                            </td>

                                                            <td>
                                                                <Link to="#" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></Link>
                                                                <Link to="/Message/Delete/27" className="action-icon"> <i className="mdi mdi-delete"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td className="table-user">

                                                                28
                                                            </td>
                                                            <td>01971789282</td>
                                                            <td>
                                                                Dear Tanjimul                                                                                            ,
                                                                Good Morning
                                                            </td>
                                                            <td>
                                                                11/3/2021 12:51:26 PM
                                                            </td>

                                                            <td>
                                                                <span className="badge badge-soft-success">Success</span>


                                                            </td>

                                                            <td>
                                                                <Link to="#" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></Link>
                                                                <Link to="/Message/Delete/28" className="action-icon"> <i className="mdi mdi-delete"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td className="table-user">

                                                                29
                                                            </td>
                                                            <td>01792426831</td>
                                                            <td>
                                                                Dear Tanjimul                                                                                             , Good Morning
                                                            </td>
                                                            <td>
                                                                11/3/2021 12:55:31 PM
                                                            </td>

                                                            <td>
                                                                <span className="badge badge-soft-success">Success</span>


                                                            </td>

                                                            <td>
                                                                <Link to="#" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></Link>
                                                                <Link to="/Message/Delete/29" className="action-icon"> <i className="mdi mdi-delete"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td className="table-user">

                                                                30
                                                            </td>
                                                            <td>01971789282</td>
                                                            <td>
                                                                Dear Sumaya                                                                                               , Good Morning
                                                            </td>
                                                            <td>
                                                                11/3/2021 12:55:32 PM
                                                            </td>

                                                            <td>
                                                                <span className="badge badge-soft-success">Success</span>


                                                            </td>

                                                            <td>
                                                                <Link to="#" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></Link>
                                                                <Link to="/Message/Delete/30" className="action-icon"> <i className="mdi mdi-delete"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td className="table-user">

                                                                44
                                                            </td>
                                                            <td>01792426831</td>
                                                            <td>
                                                                csfdgdgsg
                                                            </td>
                                                            <td>
                                                                11/5/2021 1:29:41 PM
                                                            </td>

                                                            <td>
                                                                <span className="badge badge-soft-success">Success</span>


                                                            </td>

                                                            <td>
                                                                <Link to="#" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></Link>
                                                                <Link to="/Message/Delete/44" className="action-icon"> <i className="mdi mdi-delete"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td className="table-user">

                                                                48
                                                            </td>
                                                            <td>01792426831</td>
                                                            <td>
                                                                csfdgdgsg
                                                            </td>
                                                            <td>
                                                                11/6/2021 1:20:43 AM
                                                            </td>

                                                            <td>
                                                                <span className="badge badge-soft-warning">Failed</span>


                                                            </td>

                                                            <td>
                                                                <Link to="#" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></Link>
                                                                <Link to="/Message/Delete/48" className="action-icon"> <i className="mdi mdi-delete"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td className="table-user">

                                                                49
                                                            </td>
                                                            <td>01792426831</td>
                                                            <td>
                                                                csfdgdgsg
                                                            </td>
                                                            <td>
                                                                11/7/2021 7:04:51 AM
                                                            </td>

                                                            <td>
                                                                <span className="badge badge-soft-warning">Failed</span>


                                                            </td>

                                                            <td>
                                                                <Link to="#" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></Link>
                                                                <Link to="/Message/Delete/49" className="action-icon"> <i className="mdi mdi-delete"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td className="table-user">

                                                                53
                                                            </td>
                                                            <td>01792426831</td>
                                                            <td>
                                                                csfdgdgsg
                                                            </td>
                                                            <td>
                                                                11/9/2021 8:50:10 PM
                                                            </td>

                                                            <td>
                                                                <span className="badge badge-soft-warning">Failed</span>


                                                            </td>

                                                            <td>
                                                                <Link to="#" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></Link>
                                                                <Link to="/Message/Delete/53" className="action-icon"> <i className="mdi mdi-delete"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td className="table-user">

                                                                54
                                                            </td>
                                                            <td>01792426831</td>
                                                            <td>
                                                                csfdgdgsg
                                                            </td>
                                                            <td>
                                                                11/9/2021 8:56:09 PM
                                                            </td>

                                                            <td>
                                                                <span className="badge badge-soft-warning">Failed</span>


                                                            </td>

                                                            <td>
                                                                <Link to="#" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></Link>
                                                                <Link to="/Message/Delete/54" className="action-icon"> <i className="mdi mdi-delete"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td className="table-user">

                                                                55
                                                            </td>
                                                            <td>01792426831</td>
                                                            <td>
                                                                csfdgdgsg
                                                            </td>
                                                            <td>
                                                                11/9/2021 8:58:13 PM
                                                            </td>

                                                            <td>
                                                                <span className="badge badge-soft-warning">Failed</span>


                                                            </td>

                                                            <td>
                                                                <Link to="#" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></Link>
                                                                <Link to="/Message/Delete/55" className="action-icon"> <i className="mdi mdi-delete"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td className="table-user">

                                                                56
                                                            </td>
                                                            <td>01792426831</td>
                                                            <td>
                                                                csfdgdgsg
                                                            </td>
                                                            <td>
                                                                11/9/2021 9:02:00 PM
                                                            </td>

                                                            <td>
                                                                <span className="badge badge-soft-warning">Failed</span>


                                                            </td>

                                                            <td>
                                                                <Link to="#" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></Link>
                                                                <Link to="/Message/Delete/56" className="action-icon"> <i className="mdi mdi-delete"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td className="table-user">

                                                                57
                                                            </td>
                                                            <td>01792426831</td>
                                                            <td>
                                                                csfdgdgsg
                                                            </td>
                                                            <td>
                                                                11/9/2021 9:20:13 PM
                                                            </td>

                                                            <td>
                                                                <span className="badge badge-soft-warning">Failed</span>


                                                            </td>

                                                            <td>
                                                                <Link to="#" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></Link>
                                                                <Link to="/Message/Delete/57" className="action-icon"> <i className="mdi mdi-delete"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td className="table-user">

                                                                58
                                                            </td>
                                                            <td>01792426831</td>
                                                            <td>
                                                                csfdgdgsg
                                                            </td>
                                                            <td>
                                                                11/9/2021 9:25:13 PM
                                                            </td>

                                                            <td>
                                                                <span className="badge badge-soft-warning">Failed</span>


                                                            </td>

                                                            <td>
                                                                <Link to="#" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></Link>
                                                                <Link to="/Message/Delete/58" className="action-icon"> <i className="mdi mdi-delete"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td className="table-user">

                                                                59
                                                            </td>
                                                            <td>01792426831</td>
                                                            <td>
                                                                csfdgdgsg
                                                            </td>
                                                            <td>
                                                                11/9/2021 9:31:43 PM
                                                            </td>

                                                            <td>
                                                                <span className="badge badge-soft-success">Success</span>


                                                            </td>

                                                            <td>
                                                                <Link to="#" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></Link>
                                                                <Link to="/Message/Delete/59" className="action-icon"> <i className="mdi mdi-delete"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td className="table-user">

                                                                60
                                                            </td>
                                                            <td>01792426831</td>
                                                            <td>
                                                                csfdgdgsg test
                                                            </td>
                                                            <td>
                                                                11/9/2021 9:40:59 PM
                                                            </td>

                                                            <td>
                                                                <span className="badge badge-soft-success">Success</span>


                                                            </td>

                                                            <td>
                                                                <Link to="#" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></Link>
                                                                <Link to="/Message/Delete/60" className="action-icon"> <i className="mdi mdi-delete"></i></Link>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td className="table-user">

                                                                65
                                                            </td>
                                                            <td>01792426831</td>
                                                            <td>
                                                                csfdgdgsg
                                                            </td>
                                                            <td>
                                                                11/25/2021 5:30:04 PM
                                                            </td>

                                                            <td>
                                                                <span className="badge badge-soft-success">Success</span>


                                                            </td>

                                                            <td>
                                                                <Link to="#" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></Link>
                                                                <Link to="/Message/Delete/65" className="action-icon"> <i className="mdi mdi-delete"></i></Link>
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

export default MessagesView;