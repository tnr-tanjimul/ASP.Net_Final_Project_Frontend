import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";
import BreadcrumbNav from "../BreadcrumbNav";

function GroupView() {
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
                                                            <th>Name</th>
                                                            <th style={{width: "75px"}}>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>

                                                            <td className="table-user">

                                                                1
                                                            </td>
                                                            <td>Tanjimul1                                                                                           </td>




                                                            <td>
                                                                <a href="/Group/Edit/1" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></a>
                                                                <a href="/Group/Delete/1" className="action-icon"> <i className="mdi mdi-delete"></i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td className="table-user">

                                                                3
                                                            </td>
                                                            <td>ytesdyvhbj                                                                                          </td>




                                                            <td>
                                                                <a href="/Group/Edit/3" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></a>
                                                                <a href="/Group/Delete/3" className="action-icon"> <i className="mdi mdi-delete"></i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td className="table-user">

                                                                4
                                                            </td>
                                                            <td>xdgdgdgd                                                                                            </td>




                                                            <td>
                                                                <a href="/Group/Edit/4" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></a>
                                                                <a href="/Group/Delete/4" className="action-icon"> <i className="mdi mdi-delete"></i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td className="table-user">

                                                                7
                                                            </td>
                                                            <td>22222                                                                                               </td>




                                                            <td>
                                                                <a href="/Group/Edit/7" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></a>
                                                                <a href="/Group/Delete/7" className="action-icon"> <i className="mdi mdi-delete"></i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td className="table-user">

                                                                17
                                                            </td>
                                                            <td>tan                                                                                                 </td>




                                                            <td>
                                                                <a href="/Group/Edit/17" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></a>
                                                                <a href="/Group/Delete/17" className="action-icon"> <i className="mdi mdi-delete"></i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td className="table-user">

                                                                25
                                                            </td>
                                                            <td>asp.net                                                                                             </td>




                                                            <td>
                                                                <a href="/Group/Edit/25" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></a>
                                                                <a href="/Group/Delete/25" className="action-icon"> <i className="mdi mdi-delete"></i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td className="table-user">

                                                                27
                                                            </td>
                                                            <td>Tanj                                                                                                </td>




                                                            <td>
                                                                <a href="/Group/Edit/27" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></a>
                                                                <a href="/Group/Delete/27" className="action-icon"> <i className="mdi mdi-delete"></i></a>
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

export default GroupView;