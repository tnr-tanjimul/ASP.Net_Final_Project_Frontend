import BreadcrumbNav from "../BreadcrumbNav";
import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";
import { Link } from "react-router-dom";

function UserCreate() {
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

                            <form action="/User/Create" method="post">

                                <input name="__RequestVerificationToken" type="hidden" value="p-w9nbeBTbFpdHsd843wvQdKjTdAkWOwbltK7w6TTtAid5DMRnvZuDO1SinSH_CftWFe4j09R19RjLLyYvGfjT9PQI7uKXRvlv8i2_C3V0NHmIFVC5rVtTfJ5YAbne-x0" />

                                <input data-val="true" data-val-number="The field Id must be a number." data-val-required="The Id field is required." id="Id" name="Id" type="hidden" value="0" />
                                <div className="row">

                                    <div className="col-lg-6">




                                        <div className="card-box">




                                            <div className="form-group mb-3">
                                                <label for="product-meta-keywords">Name</label>
                                                <input type="text" className="form-control" name="Name" id="Name" placeholder="" />
                                                <span className="field-validation-valid text-danger" data-valmsg-for="Name" data-valmsg-replace="true"></span>
                                            </div>


                                            <div className="form-group mb-3">
                                                <label for="product-meta-keywords">Email</label>
                                                <input type="text" className="form-control" name="Email" id="Email" placeholder="" />
                                                <span className="field-validation-valid text-danger" data-valmsg-for="Email" data-valmsg-replace="true"></span>
                                            </div>




                                            <div className="form-group mb-3">
                                                <label for="product-meta-keywords">Password</label>
                                                <input type="text" className="form-control" name="Password" id="Password" placeholder="" />
                                                <span className="field-validation-valid text-danger" data-valmsg-for="Password" data-valmsg-replace="true"></span>
                                            </div>


                                            <div className="form-group mb-3">
                                                <label for="product-meta-keywords">Balance</label>
                                                <input type="text" className="form-control" value="0" name="Balance" id="Balance" placeholder="" />
                                                <span className="field-validation-valid text-danger" data-valmsg-for="Balance" data-valmsg-replace="true"></span>
                                            </div>


                                            <div className="form-group mb-3">
                                                <label for="product-meta-keywords">RegTime</label>
                                                <input type="text" className="form-control" value="12/17/2021 11:33:52 AM" name="RegTime" id="RegTime" placeholder="" />
                                                <span className="field-validation-valid text-danger" data-valmsg-for="RegTime" data-valmsg-replace="true"></span>
                                            </div>


                                            <div className="form-group mb-3">
                                                <label for="product-meta-title">Role</label>
                                                <select name="Role" className="custom-select " required="">
                                                    <option value="2">User</option>
                                                    <option value="1">Admin</option>





                                                </select>
                                                <span className="field-validation-valid text-danger" data-valmsg-for="Role" data-valmsg-replace="true"></span>
                                            </div>














                                            <div className="text-center mb-3">
                                                <a href="/User/Index" type="button" className="btn w-sm btn-light waves-effect">Cancel</a>
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

export default UserCreate;