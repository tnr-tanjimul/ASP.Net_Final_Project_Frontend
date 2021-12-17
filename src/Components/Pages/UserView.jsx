import Footer from "../Footer";
import LeftSideBar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import TopBar from "../TopBar";
import BreadcrumbNav from "../BreadcrumbNav";
import { Link } from "react-router-dom";
function UserView() {
    return (
        <>
            <div id="wrapper">
                <TopBar></TopBar>
                <LeftSideBar></LeftSideBar>
                <div className="content-page">
                    <div className="content">


                        <div className="container-fluid">

                            {/* start page title */}

                            <BreadcrumbNav page="User" title="View"></BreadcrumbNav>

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
                                <th>Email</th>
                                <th>Balance</th>
                                <th>RegTime</th>
                                <th>Role</th>
                               


                                <th style="width: 75px;">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td class="table-user">

                                    1
                                </td>
                                <td>Tanjimul                                                                                            </td>
                                <td>tanjimul500@gmail.com</td>
                                <td>998.40</td>
                                <td>10/30/2021 11:40:53 PM</td>

                                <td>
                                        <span class="badge badge-soft-success">Admin</span>


                                </td>


                                <td>
                                    <a href="/User/Edit/1" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                    <a href="/User/Delete/1" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                </td>
                            </tr>
                            <tr>

                                <td class="table-user">

                                    4
                                </td>
                                <td>Tanjimul islam                                                                                      </td>
                                <td>admin@tnrsoft.com</td>
                                <td>999.60</td>
                                <td>10/31/2021 12:38:23 AM</td>

                                <td>
                                        <span class="badge badge-soft-warning">User</span>


                                </td>


                                <td>
                                    <a href="/User/Edit/4" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                    <a href="/User/Delete/4" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                </td>
                            </tr>
                            <tr>

                                <td class="table-user">

                                    5
                                </td>
                                <td>Tanjimul islam                                                                                      </td>
                                <td>user@gmail.com</td>
                                <td>91.60</td>
                                <td>10/31/2021 12:47:55 AM</td>

                                <td>
                                        <span class="badge badge-soft-warning">User</span>


                                </td>


                                <td>
                                    <a href="/User/Edit/5" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                    <a href="/User/Delete/5" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                </td>
                            </tr>
                            <tr>

                                <td class="table-user">

                                    6
                                </td>
                                <td>Tanjim                                                                                              </td>
                                <td>tanjim@gmail.com</td>
                                <td>10.00</td>
                                <td>10/31/2021 1:04:55 AM</td>

                                <td>
                                        <span class="badge badge-soft-warning">User</span>


                                </td>


                                <td>
                                    <a href="/User/Edit/6" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                    <a href="/User/Delete/6" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                </td>
                            </tr>
                            <tr>

                                <td class="table-user">

                                    7
                                </td>
                                <td>Tasnim                                                                                              </td>
                                <td>tasnim@gmail.com</td>
                                <td>10.00</td>
                                <td>10/31/2021 10:02:24 AM</td>

                                <td>
                                        <span class="badge badge-soft-warning">User</span>


                                </td>


                                <td>
                                    <a href="/User/Edit/7" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                    <a href="/User/Delete/7" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                </td>
                            </tr>
                            <tr>

                                <td class="table-user">

                                    8
                                </td>
                                <td>Tarek Aziz                                                                                          </td>
                                <td>tarek@gmail.com</td>
                                <td>10.00</td>
                                <td>10/31/2021 7:06:28 PM</td>

                                <td>
                                        <span class="badge badge-soft-warning">User</span>


                                </td>


                                <td>
                                    <a href="/User/Edit/8" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                    <a href="/User/Delete/8" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                </td>
                            </tr>
                            <tr>

                                <td class="table-user">

                                    9
                                </td>
                                <td>Rimon nath                                                                                          </td>
                                <td>rimon@gmail.com</td>
                                <td>93.60</td>
                                <td>10/31/2021 7:18:06 PM</td>

                                <td>
                                        <span class="badge badge-soft-warning">User</span>


                                </td>


                                <td>
                                    <a href="/User/Edit/9" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                    <a href="/User/Delete/9" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                </td>
                            </tr>
                            <tr>

                                <td class="table-user">

                                    13
                                </td>
                                <td>Tarek Aziz                                                                                          </td>
                                <td>t@gmail.com</td>
                                <td>8.80</td>
                                <td>11/3/2021 11:04:20 PM</td>

                                <td>
                                        <span class="badge badge-soft-warning">User</span>


                                </td>


                                <td>
                                    <a href="/User/Edit/13" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                    <a href="/User/Delete/13" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                </td>
                            </tr>
                            <tr>

                                <td class="table-user">

                                    14
                                </td>
                                <td>Test Mid                                                                                            </td>
                                <td>test@gmail.com</td>
                                <td>8.40</td>
                                <td>11/4/2021 4:27:29 PM</td>

                                <td>
                                        <span class="badge badge-soft-warning">User</span>


                                </td>


                                <td>
                                    <a href="/User/Edit/14" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                    <a href="/User/Delete/14" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                </td>
                            </tr>
                            <tr>

                                <td class="table-user">

                                    19
                                </td>
                                <td>Unknown                                                                                             </td>
                                <td>Unknown@gmail.com</td>
                                <td>10.00</td>
                                <td>11/5/2021 1:56:37 AM</td>

                                <td>
                                        <span class="badge badge-soft-warning">User</span>


                                </td>


                                <td>
                                    <a href="/User/Edit/19" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                    <a href="/User/Delete/19" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                </td>
                            </tr>
                            <tr>

                                <td class="table-user">

                                    20
                                </td>
                                <td>MD. ABU JUBAER                                                                                      </td>
                                <td>abujubaer90@gmail.com</td>
                                <td>10.00</td>
                                <td>11/5/2021 1:57:17 AM</td>

                                <td>
                                        <span class="badge badge-soft-warning">User</span>


                                </td>


                                <td>
                                    <a href="/User/Edit/20" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                    <a href="/User/Delete/20" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                </td>
                            </tr>
                            <tr>

                                <td class="table-user">

                                    21
                                </td>
                                <td>MR ISMAIL HOSSAIN                                                                                   </td>
                                <td>pranto.ip@gmail.com</td>
                                <td>10.00</td>
                                <td>11/5/2021 1:58:00 AM</td>

                                <td>
                                        <span class="badge badge-soft-warning">User</span>


                                </td>


                                <td>
                                    <a href="/User/Edit/21" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                    <a href="/User/Delete/21" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                </td>
                            </tr>
                            <tr>

                                <td class="table-user">

                                    22
                                </td>
                                <td>Nobobi Hasan                                                                                        </td>
                                <td>shatin.hasan73@gmail.com</td>
                                <td>10.00</td>
                                <td>11/5/2021 2:00:11 AM</td>

                                <td>
                                        <span class="badge badge-soft-warning">User</span>


                                </td>


                                <td>
                                    <a href="/User/Edit/22" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                    <a href="/User/Delete/22" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                </td>
                            </tr>
                            <tr>

                                <td class="table-user">

                                    23
                                </td>
                                <td>Md Tarek Aziz                                                                                       </td>
                                <td>azizt0127@gmail.com</td>
                                <td>8.00</td>
                                <td>11/5/2021 9:08:23 AM</td>

                                <td>
                                        <span class="badge badge-soft-warning">User</span>


                                </td>


                                <td>
                                    <a href="/User/Edit/23" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                    <a href="/User/Delete/23" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                </td>
                            </tr>
                            <tr>

                                <td class="table-user">

                                    24
                                </td>
                                <td>NASIM                                                                                               </td>
                                <td>nasimhaidar41@gmail.com</td>
                                <td>10.00</td>
                                <td>11/5/2021 9:03:38 PM</td>

                                <td>
                                        <span class="badge badge-soft-warning">User</span>


                                </td>


                                <td>
                                    <a href="/User/Edit/24" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                    <a href="/User/Delete/24" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                </td>
                            </tr>
                            <tr>

                                <td class="table-user">

                                    25
                                </td>
                                <td>abcde                                                                                               </td>
                                <td>abc@gmail.com</td>
                                <td>10.00</td>
                                <td>11/5/2021 9:10:27 PM</td>

                                <td>
                                        <span class="badge badge-soft-warning">User</span>


                                </td>


                                <td>
                                    <a href="/User/Edit/25" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                    <a href="/User/Delete/25" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                </td>
                            </tr>
                            <tr>

                                <td class="table-user">

                                    26
                                </td>
                                <td>abcde                                                                                               </td>
                                <td>abc@gmail.com</td>
                                <td>10.00</td>
                                <td>11/5/2021 9:10:43 PM</td>

                                <td>
                                        <span class="badge badge-soft-warning">User</span>


                                </td>


                                <td>
                                    <a href="/User/Edit/26" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                    <a href="/User/Delete/26" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                </td>
                            </tr>
                            <tr>

                                <td class="table-user">

                                    27
                                </td>
                                <td>Sabbir Ahmed                                                                                        </td>
                                <td>sccsabbir@gmail.com</td>
                                <td>10.00</td>
                                <td>11/5/2021 9:17:44 PM</td>

                                <td>
                                        <span class="badge badge-soft-warning">User</span>


                                </td>


                                <td>
                                    <a href="/User/Edit/27" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                    <a href="/User/Delete/27" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                </td>
                            </tr>
                            <tr>

                                <td class="table-user">

                                    28
                                </td>
                                <td>Ahmed Borno                                                                                         </td>
                                <td>sdbornondc@gmail.com</td>
                                <td>10.00</td>
                                <td>11/6/2021 10:15:00 PM</td>

                                <td>
                                        <span class="badge badge-soft-warning">User</span>


                                </td>


                                <td>
                                    <a href="/User/Edit/28" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                    <a href="/User/Delete/28" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                </td>
                            </tr>
                            <tr>

                                <td class="table-user">

                                    29
                                </td>
                                <td>Mahmudul Hasan Jobayer                                                                              </td>
                                <td>mahmudul.nehal@gmail.com</td>
                                <td>10.00</td>
                                <td>11/7/2021 10:12:20 PM</td>

                                <td>
                                        <span class="badge badge-soft-warning">User</span>


                                </td>


                                <td>
                                    <a href="/User/Edit/29" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                    <a href="/User/Delete/29" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                </td>
                            </tr>
                            <tr>

                                <td class="table-user">

                                    30
                                </td>
                                <td>Md Tarek Aziz                                                                                       </td>
                                <td>azizt0127@gmail.com</td>
                                <td>10.00</td>
                                <td>11/9/2021 5:11:49 PM</td>

                                <td>
                                        <span class="badge badge-soft-warning">User</span>


                                </td>


                                <td>
                                    <a href="/User/Edit/30" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                    <a href="/User/Delete/30" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                </td>
                            </tr>
                            <tr>

                                <td class="table-user">

                                    31
                                </td>
                                <td>RIMON NATH                                                                                          </td>
                                <td>rimonnath11@gmail.com</td>
                                <td>10.00</td>
                                <td>11/9/2021 9:43:32 PM</td>

                                <td>
                                        <span class="badge badge-soft-warning">User</span>


                                </td>


                                <td>
                                    <a href="/User/Edit/31" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                    <a href="/User/Delete/31" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                </td>
                            </tr>
                            <tr>

                                <td class="table-user">

                                    32
                                </td>
                                <td>RIMON NATH                                                                                          </td>
                                <td>rimonnath11@gmail.com</td>
                                <td>10.00</td>
                                <td>11/9/2021 9:43:51 PM</td>

                                <td>
                                        <span class="badge badge-soft-warning">User</span>


                                </td>


                                <td>
                                    <a href="/User/Edit/32" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                    <a href="/User/Delete/32" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                </td>
                            </tr>
                            <tr>

                                <td class="table-user">

                                    33
                                </td>
                                <td>Kaushik Biswas                                                                                      </td>
                                <td>kbutsho@gmail.com</td>
                                <td>10.00</td>
                                <td>11/17/2021 11:56:19 PM</td>

                                <td>
                                        <span class="badge badge-soft-warning">User</span>


                                </td>


                                <td>
                                    <a href="/User/Edit/33" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                    <a href="/User/Delete/33" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                </td>
                            </tr>
                            <tr>

                                <td class="table-user">

                                    34
                                </td>
                                <td>Ramisa Anjum                                                                                        </td>
                                <td>anjumramisa930@gmail.com</td>
                                <td>9.60</td>
                                <td>12/15/2021 10:30:35 PM</td>

                                <td>
                                        <span class="badge badge-soft-warning">User</span>


                                </td>


                                <td>
                                    <a href="/User/Edit/34" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                    <a href="/User/Delete/34" class="action-icon"> <i class="mdi mdi-delete"></i></a>
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

export default UserView;