import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";

function ContactView() {
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
                                                            <th>Group</th>
                                                            <th>Number</th>
                                                            <th>Name</th>


                                                            <th style={{ width: "75px" }}>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>

                                                            <td class="table-user">

                                                                22
                                                            </td>
                                                            <td>Tanjimul1                                                                                           </td>
                                                            <td>
                                                                01792426831
                                                            </td>
                                                            <td>
                                                                testGroup
                                                            </td>



                                                            <td>
                                                                <a href="/Contact/Edit/22" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                                                <a href="/Contact/Delete/22" class="action-icon"> <i class="mdi mdi-delete"></i></a>
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

export default ContactView;