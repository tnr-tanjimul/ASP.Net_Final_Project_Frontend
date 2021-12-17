import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";
import BreadcrumbNav from "../BreadcrumbNav";
import { Link } from "react-router-dom";
function ContactCreate() {
    return (
        <>
            <div id="wrapper">
                <TopBar></TopBar>
                <LeftSideBar></LeftSideBar>
                <div className="content-page">
                    <div className="content">


                        <div className="container-fluid">

                            {/* start page title */}

                            <BreadcrumbNav page="Contact" title="Create"></BreadcrumbNav>

                            <form action="/Contact/Create" method="post">

                                <input name="__RequestVerificationToken" type="hidden" value="NJG2Mw_HmIpraiHa1GJhxer4fQE-HABtlesHN4-odEuN7u6JBP0JW-IDen_cBLs7AW01V_rzrUdir8xOmUodMc7GMHN1pM4eBUt7rS0FIFSOvhQzw2hqY2KVQbpMgQXP0" />
                                <div className="row">

                                    <div className="col-lg-6">




                                        <div className="card-box">


                                            <div className="form-group mb-3">
                                                <label htmlFor="product-meta-title">Group</label>
                                                <select name="GroupId" className="custom-select " required="">
                                                    <option value="">Open this select menu</option>



                                                    <option value="1">Tanjimul1                                                                                           </option>
                                                    <option value="3">ytesdyvhbj                                                                                          </option>
                                                    <option value="4">xdgdgdgd                                                                                            </option>
                                                    <option value="7">22222                                                                                               </option>
                                                    <option value="17">tan                                                                                                 </option>
                                                    <option value="25">asp.net                                                                                             </option>
                                                    <option value="27">Tanj                                                                                                </option>


                                                </select>
                                                <span className="field-validation-valid text-danger" data-valmsg-replace="true"></span>
                                            </div>




                                            <div className="form-group mb-3">
                                                <label htmlFor="product-meta-keywords">Number</label>
                                                <input type="text" className="form-control" name="Number" id="Number" placeholder="" />
                                                <span className="field-validation-valid text-danger" data-valmsg-replace="true"></span>
                                            </div>


                                            <div className="form-group mb-3">
                                                <label htmlFor="product-meta-keywords">Name</label>
                                                <input type="text" className="form-control" name="Name" id="Name" placeholder="" />
                                                <span className="field-validation-valid text-danger" data-valmsg-replace="true"></span>
                                            </div>


                                            <div className="text-center mb-3">
                                                <Link to="/Contact/Index" type="button" className="btn w-sm btn-light waves-effect">Cancel</Link>
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

export default ContactCreate;