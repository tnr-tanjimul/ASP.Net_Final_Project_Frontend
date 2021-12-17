import BreadcrumbNav from "../BreadcrumbNav";
import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";
import { Link } from "react-router-dom";
function SenderNumberCreate() {
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

                            <form action="/SenderNumber/Create" method="post">

                                <input name="__RequestVerificationToken" type="hidden" value="32ykUZiplBdNBEyuLC3rRGPhiOzfGrbbv2JiXpruimYrQPS19Xz5BKr159EeRZkYS2-6eDT_HS-LZel2-fsS0xdwGhXxxwuqg0r39vo-Fkv8nnK9Zei2h6YRiroT-iuF0"/>
                                    <div className="row">
                                        

                                        <div className="col-lg-6">


                                            

                                            <div className="card-box">




                                                <div className="form-group mb-3">
                                                    <label for="product-meta-keywords">Number</label>
                                                    <input type="text" className="form-control" name="Number" id="Number" placeholder=""/>
                                                        <span className="field-validation-valid text-danger" data-valmsg-for="Number" data-valmsg-replace="true"></span>
                                                </div>



                                                <div className="form-group mb-3">
                                                    <label for="product-meta-keywords">DeviceId</label>
                                                    <input type="text" className="form-control" name="DeviceId" id="DeviceId" placeholder=""/>
                                                        <span className="field-validation-valid text-danger" data-valmsg-for="DeviceId" data-valmsg-replace="true"></span>
                                                </div>



                                                <div className="form-group mb-3">
                                                    <label for="product-meta-keywords">ApiToken</label>
                                                    <input type="text" className="form-control" name="ApiToken" id="ApiToken" placeholder=""/>
                                                        <span className="field-validation-valid text-danger" data-valmsg-for="ApiToken" data-valmsg-replace="true"></span>
                                                </div>





                                                <div className="text-center mb-3">
                                                    <a href="/SenderNumber/Index" type="button" className="btn w-sm btn-light waves-effect">Cancel</a>
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

export default SenderNumberCreate;