import BreadcrumbNav from "../BreadcrumbNav";
import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";

function Sender() {
    return (
        <>
            <div id="wrapper">
                <TopBar></TopBar>
                <LeftSideBar></LeftSideBar>
                <div className="content-page">
                    <div className="content">


                        <div className="container-fluid">

                            {/* start page title */}

                            <BreadcrumbNav page="Sender" title="Create"></BreadcrumbNav>

                            <form action="/Sender/Index" method="post">

                                <input name="__RequestVerificationToken" type="hidden" defaultValue="qbAhVPmtBFAwH8xOImGMpxY3lSZXVrvdvfX7rpKQlAQs9Lnjs3wnmbxcLLoSlPQnHrprzeeqCxyS6808pSayVCIGPMIYP5bMIWSpKkAMbJE7KsdXXsWQlOPTqHWg4Khz0" />
                                <div className="row">


                                    <div className="col-lg-6">




                                        <div className="card-box">


                                            <div className="form-group mb-3">
                                                <label htmlFor="product-meta-title">Sender Numbers</label>
                                                <select name="SenderNumberId" className="custom-select " required="">
                                                    <option value="">Open menu</option>



                                                    <option value="1">+8801833245245</option>
                                                    <option value="2">+8801844784850</option>


                                                </select>
                                                <span className="field-validation-valid text-danger" data-valmsg-replace="true"></span>
                                            </div>


                                            <div className="form-group mb-3">
                                                <label htmlFor="product-meta-title">Templates</label>
                                                <select name="TemplateId" className="custom-select " onChange="fetchTemplate(this.defaultValue)" required="">
                                                    <option value="0">None</option>



                                                    <option value="2">tan                                                                                                 </option>
                                                    <option value="14">CseBatch                                                                                            </option>


                                                </select>
                                                <span className="field-validation-valid text-danger" data-valmsg-replace="true"></span>
                                            </div>

                                            <div className="form-group mb-3">
                                                <label htmlFor="product-meta-keywords">Mobile Numbers</label>
                                                <input type="text" className="form-control" name="Numbers" id="Numbers" placeholder="+8801XXXXXXXXX,+8801XXXXXXXXX" />
                                                <span className="field-validation-valid text-danger" data-valmsg-replace="true"></span>
                                            </div>

                                            <div className="form-group mb-3">
                                                <label htmlFor="messageInput">Message</label>
                                                <textarea name="message" data-counter="#smsCounter" className="form-control" rows="5" id="messageInput" placeholder="Please enter description"></textarea>
                                                <span className="field-validation-valid text-danger" data-valmsg-replace="true"></span>
                                            </div>
                                            <ul id="smsCounter" hidden="hidden">
                                                <li>Encoding: <span className="encoding"></span></li>
                                                <li>Length: <span className="length"></span></li>
                                                <li>Messages: <span className="messages"></span></li>
                                                <li>Per Message: <span className="per_message"></span></li>
                                                <li>Remaining: <span className="remaining"></span></li>
                                            </ul>
                                        </div>

                                        <div className="text-center mb-3">
                                            <button type="button" className="btn w-sm btn-light waves-effect">Cancel</button>
                                            <button type="submit" className="btn w-sm btn-success waves-effect waves-light">Send</button>

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

export default Sender;