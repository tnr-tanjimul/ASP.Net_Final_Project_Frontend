import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";

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

                            <div class="row">
                                <div class="col-12">
                                    <div class="page-title-box">
                                        <div class="page-title-right">
                                            <ol class="breadcrumb m-0">
                                                <li class="breadcrumb-item"><a href="javascript: void(0);">SMS Gateway</a></li>
                                                <li class="breadcrumb-item"><a href="javascript: void(0);">Group</a></li>

                                            </ol>
                                        </div>
                                        <h4 class="page-title">View </h4>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12">
                                    <div class="card">
                                        <div class="card-body">


                                            <div class="table-responsive">
                                                <table class="table table-centered table-striped dt-responsive nowrap w-100" id="products-datatable">
                                                    <thead>
                                                        <tr>
                                                            <th>ID</th>
                                                            <th>Name</th>
                                                            <th style={{width: "75px"}}>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>

                                                            <td class="table-user">

                                                                1
                                                            </td>
                                                            <td>Tanjimul1                                                                                           </td>




                                                            <td>
                                                                <a href="/Group/Edit/1" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                                                <a href="/Group/Delete/1" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td class="table-user">

                                                                3
                                                            </td>
                                                            <td>ytesdyvhbj                                                                                          </td>




                                                            <td>
                                                                <a href="/Group/Edit/3" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                                                <a href="/Group/Delete/3" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td class="table-user">

                                                                4
                                                            </td>
                                                            <td>xdgdgdgd                                                                                            </td>




                                                            <td>
                                                                <a href="/Group/Edit/4" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                                                <a href="/Group/Delete/4" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td class="table-user">

                                                                7
                                                            </td>
                                                            <td>22222                                                                                               </td>




                                                            <td>
                                                                <a href="/Group/Edit/7" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                                                <a href="/Group/Delete/7" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td class="table-user">

                                                                17
                                                            </td>
                                                            <td>tan                                                                                                 </td>




                                                            <td>
                                                                <a href="/Group/Edit/17" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                                                <a href="/Group/Delete/17" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td class="table-user">

                                                                25
                                                            </td>
                                                            <td>asp.net                                                                                             </td>




                                                            <td>
                                                                <a href="/Group/Edit/25" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                                                <a href="/Group/Delete/25" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td class="table-user">

                                                                27
                                                            </td>
                                                            <td>Tanj                                                                                                </td>




                                                            <td>
                                                                <a href="/Group/Edit/27" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                                                <a href="/Group/Delete/27" class="action-icon"> <i class="mdi mdi-delete"></i></a>
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