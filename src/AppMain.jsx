import LeftSideBar from "./Components/LeftSidebar";
import Dashboard from "./Components/Pages/Dashboard";
import RightSidebar from "./Components/RightSidebar";
import TopBar from "./Components/TopBar";
import { BrowserRouter as Router, Route, Switch,useParams } from 'react-router-dom'

import Contact from "./Components/Pages/Contact";
import AuthLogin from "./Components/Auth/AuthLogin";
import AuthRegistration from "./Components/Auth/AuthRegistration";
import GroupCreate from "./Components/Pages/GroupCreate";
import GroupView from "./Components/Pages/GroupView";
import ContactView from "./Components/Pages/ContactView";
function AppMain() {
    return (
        <Router>
            <>
                {/* Begin page */}
                
                    


                    <Switch>
                        <Route exact path="/">
                                <Dashboard></Dashboard>
                        </Route>

                        <Route exact path="/group/">
                                <GroupView></GroupView>
                        </Route>
                        <Route exact path="/group/create">
                                <GroupCreate></GroupCreate>
                        </Route>

                        <Route exact path="/contact">
                               <ContactView></ContactView>
                        </Route>
                        

                        

                        
                      

                        <Route exact path="/contact-1">
                            <div id="wrapper">
                                <TopBar></TopBar>
                                <LeftSideBar></LeftSideBar>
                                <Contact></Contact>
                            </div>
                            <RightSidebar></RightSidebar>
                            <div className="rightbar-overlay"></div>
                            
                        </Route>

                        <Route exact path="/login">
                            <AuthLogin></AuthLogin>
                        </Route>


                        <Route exact path="/register">
                            <AuthRegistration></AuthRegistration>
                        </Route>


                    </Switch>



                
                {/* END wrapper */}
            </>
        </Router>
    );
}
export default AppMain;