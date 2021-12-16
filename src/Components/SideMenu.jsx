import { Link } from "react-router-dom";
function SideMenu() {
    return (
        <div id="sidebar-menu" className="show">

            <ul id="side-menu">

                



                <li class="menu-title">Navigation</li>

                <li class="menuitem-active">
                    <Link to="/" class="active">
                        <i class="mdi mdi-view-dashboard-outline"></i>
                        <span> Dashboard </span>
                    </Link>
                </li>

                <li>
                    <a href="#h_group" data-toggle="collapse">
                        <i class="mdi mdi-bullseye"></i>
                        <span> Group </span>
                        <span class="menu-arrow"></span>
                    </a>
                    <div class="collapse" id="h_group">
                        <ul class="nav-second-level">
                            <li> <Link to="/group">View</Link> </li>
                            <li><Link to="/group/create">Create</Link></li>

                        </ul>
                    </div>

                </li>


                <li>
                    <a href="#h_contact" data-toggle="collapse">
                        <i class="mdi mdi-account-multiple-outline"></i>
                        <span> Contact </span>
                        <span class="menu-arrow"></span>
                    </a>
                    <div class="collapse" id="h_contact">
                        <ul class="nav-second-level">
                            <li> <Link to="/contact">View</Link> </li>
                            <li><Link to="/contact/create">Create</Link></li>

                        </ul>
                    </div>

                </li>


                <li>
                    <a href="#h_template" data-toggle="collapse">
                        <i class="mdi mdi-view-dashboard-outline"></i>
                        <span> Template </span>
                        <span class="menu-arrow"></span>
                    </a>
                    <div class="collapse" id="h_template">
                        <ul class="nav-second-level">
                        <li> <Link to="/template">View</Link> </li>
                            <li><Link to="/template/create">Create</Link></li>

                        </ul>
                    </div>

                </li>


                <li class="menuitem-active">
                    <Link to="/sender" class="active">
                        <i class="fe-message-square mr-1"></i>
                        <span> Sender </span>
                    </Link>
                </li>


                <li class="menuitem-active">
                    <Link to="/bulksender" class="active">
                        <i class="mdi mdi-ballot-recount mr-1"></i>
                        <span> Bulk Sender </span>
                    </Link>
                </li>


                <li class="menuitem-active">
                    <Link to="/messages" class="active">
                        <i class="fe-bar-chart-line mr-1"></i>
                        <span> Messeges </span>
                    </Link>
                </li>


                <li>
                    <a href="#h_user" data-toggle="collapse">
                        <i class="mdi mdi-account-convert"></i>
                        <span> User </span>
                        <span class="menu-arrow"></span>
                    </a>
                    <div class="collapse" id="h_user">
                        <ul class="nav-second-level">
                            <li> <Link to="/user">View</Link> </li>
                            <li><Link to="/user/create">Create</Link></li>

                        </ul>
                    </div>

                </li>


                <li>
                    <a href="#h_SenderNumber" data-toggle="collapse">
                        <i class="fa fa-server"></i>
                        <span> SenderNumber </span>
                        <span class="menu-arrow"></span>
                    </a>
                    <div class="collapse" id="h_SenderNumber">
                        <ul class="nav-second-level">
                            <li> <Link to="/sender-number">View</Link> </li>
                            <li><Link to="/sender-number/create">Create</Link></li>

                        </ul>
                    </div>

                </li>


                <li class="menuitem-active">
                    <Link to="/admin" class="active">
                        <i class="fe-message-square mr-1"></i>
                        <span> Admin </span>
                    </Link>
                </li>


                                                

                                            



                

                
            </ul>
        </div>
    );
}

export default SideMenu;