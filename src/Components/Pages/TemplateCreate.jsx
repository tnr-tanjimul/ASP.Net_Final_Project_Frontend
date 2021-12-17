import BreadcrumbNav from "../BreadcrumbNav";
import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";
import { Link } from "react-router-dom";
function TemplateCreate() {
    return (
        <>
            <div id="wrapper">
                <TopBar></TopBar>
                <LeftSideBar></LeftSideBar>
                <div className="content-page">
                    <div className="content">


                        <div className="container-fluid">

                            {/* start page title */}

                            <BreadcrumbNav page="Template" title="Create"></BreadcrumbNav>

                            <form action="/Template/Create" method="post">

                                <input name="__RequestVerificationToken" type="hidden" defaultValue="HrOs0oHo1hWU4oBZfvLTRJTATqkFMvXwxQ1Jdf2U4tTp3Rlayc2Ni3wjkUm6MulAE-zAoXwpoIs7LaQH3hai9_CJ7jHA7Q22QgKhwUpXdI39_2B5Nc4zbulMFOYaNH3z0" />
                                <div className="row">


                                    <div className="col-lg-6">




                                        <div className="card-box">




                                            <div className="form-group mb-3">
                                                <label htmlFor="product-meta-keywords">Name</label>
                                                <input type="text" className="form-control" name="Name" id="Name" placeholder="" />
                                                <span className="field-validation-valid text-danger" data-valmsg-htmlhtmlFor="Name" data-valmsg-replace="true"></span>
                                            </div>


                                            <div className="form-group mb-3">
                                                <label htmlFor="messageInput">Message</label>
                                                <textarea name="message" className="form-control" rows="5" id="messageInput" data-counter="#smsCounter" placeholder="Please enter description"></textarea>
                                                <span className="field-validation-valid text-danger" data-valmsg-htmlhtmlFor="Message" data-valmsg-replace="true"></span>
                                            </div>


                                            <div className="text-center mb-3">
                                                <Link to="/Template/Index" type="button" className="btn w-sm btn-light waves-effect">Cancel</Link>
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

export default TemplateCreate;