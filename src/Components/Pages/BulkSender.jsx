import BreadcrumbNav from "../BreadcrumbNav";
import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";

function BulkSender() {
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

                            <form action="/BulkSender/Index" method="post">

                                <input name="__RequestVerificationToken" type="hidden" defaultValue="hnTuQsNM-Vr0srzqoHadOdAG714E8qvCmGAyxpiaUXHAPhWG92CSYfofSLlPtkU5-aWYItg3TJ5bGc4L01JScEfI0Ri3itIlrAZYrndGRebH7QE5LQVPI4DI1vxSBrJS0" />
                                <div className="row">


                                    <div className="col-lg-6">


                                        <div className="card-box">


                                            <div className="form-group mb-3">
                                                <label for="product-meta-title">Sender Numbers</label>
                                                <select name="SenderNumberId" className="custom-select " required="">
                                                    <option defaultValue="">Open this select menu</option>



                                                    <option defaultValue="1">+8801833245245</option>
                                                    <option defaultValue="2">+8801844784850</option>


                                                </select>
                                                <span className="field-validation-valid text-danger" data-valmsg-for="SenderNumberId" data-valmsg-replace="true"></span>
                                            </div>


                                            <div className="form-group mb-3">
                                                <label for="product-meta-title">Templates</label>
                                                <select name="TemplateId" className="custom-select " onChange="fetchTemplate(this.defaultValue)" required="">
                                                    <option defaultValue="0">None</option>



                                                    <option defaultValue="2">tan                                                                                                 </option>
                                                    <option defaultValue="14">CseBatch                                                                                            </option>


                                                </select>
                                                <span className="field-validation-valid text-danger" data-valmsg-for="Templates" data-valmsg-replace="true"></span>
                                            </div>


                                            <div className="form-group mb-3">
                                                <label for="product-meta-title">Group</label>
                                                <select name="GroupId" className="custom-select " required="">
                                                    <option defaultValue="0">None</option>



                                                    <option defaultValue="1">Tanjimul1</option>
                                                    <option defaultValue="3">ytesdyvhbj</option>
                                                 


                                                </select>
                                                <span className="field-validation-valid text-danger" data-valmsg-for="GroupId" data-valmsg-replace="true"></span>
                                            </div>



                                            <div className="form-group mb-3">
                                                <label for="messageInput">Message</label>
                                                <textarea data-counter="#smsCounter" name="message" className="form-control" rows="5" id="messageInput" placeholder="Please enter description"></textarea>
                                                <span className="field-validation-valid text-danger" data-valmsg-for="Message" data-valmsg-replace="true"></span>
                                            </div>

                                            <ul>You Can use Name Place Holder for Add contact name</ul>
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

export default BulkSender;