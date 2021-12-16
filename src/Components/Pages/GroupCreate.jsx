import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";

function GroupCreate() {
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
                                        <h4 class="page-title">Create </h4>
                                    </div>
                                </div>
                            </div>

                            <form action="/Group/Create" method="post">

                                <input name="__RequestVerificationToken" type="hidden" value="CEsnLF2_0eKEfc2ePLt_VcNg25iNayU1q5_zUjRM42saIMr9m9V7neM82XJgcCtpaDltz6tOFWPKKGHB24TrdWtIZvJmF7jmnCWQWpNxdxcwvSdlIk3fC6j6c-U0FAWw0" />
                                <div class="row">


                                    <div class="col-lg-6">




                                        <div class="card-box">





                                            <input type="hidden" name="UserId" value="" />



                                            <div class="form-group mb-3">
                                                <label for="product-meta-keywords">Name</label>
                                                <input type="text" class="form-control" name="Name" id="Name" placeholder="" />
                                                <span class="field-validation-valid text-danger" data-valmsg-for="Name" data-valmsg-replace="true"></span>
                                            </div>


                                            <div class="text-center mb-3">
                                                <a href="/Group/Index" type="button" class="btn w-sm btn-light waves-effect">Cancel</a>
                                                <button type="submit" class="btn w-sm btn-success waves-effect waves-light">Save</button>

                                            </div>


                                        </div>



                                    </div>
                                </div>


                            </form>

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

export default GroupCreate;