import BreadcrumbNav from "../BreadcrumbNav";
import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";
import { Link } from "react-router-dom";

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

                            <BreadcrumbNav page="Group" title="Create"></BreadcrumbNav>

                            <form action="/Group/Create" method="post">

                                <input name="__RequestVerificationToken" type="hidden" defaultValue="CEsnLF2_0eKEfc2ePLt_VcNg25iNayU1q5_zUjRM42saIMr9m9V7neM82XJgcCtpaDltz6tOFWPKKGHB24TrdWtIZvJmF7jmnCWQWpNxdxcwvSdlIk3fC6j6c-U0FAWw0" />
                                <div className="row">


                                    <div className="col-lg-6">




                                        <div className="card-box">





                                            <input type="hidden" name="UserId" defaultValue="" />



                                            <div className="form-group mb-3">
                                                <label htmlFor="product-meta-keywords">Name</label>
                                                <input type="text" className="form-control" name="Name" id="Name" placeholder="" />
                                                <span className="field-validation-valid text-danger" data-valmsg-replace="true"></span>
                                            </div>


                                            <div className="text-center mb-3">
                                                <Link to="/Group/Index" type="button" className="btn w-sm btn-light waves-effect">Cancel</Link>
                                                <button type="submit" className="btn w-sm btn-success waves-effect waves-light">Save</button>

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