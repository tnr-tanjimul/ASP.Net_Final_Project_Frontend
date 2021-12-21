import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom'
import LeftSideBar from "./Components/LeftSidebar";
import RightSidebar from "./Components/RightSidebar";
import TopBar from "./Components/TopBar";
import AuthLogin from "./Components/Auth/AuthLogin";
import AuthRegistration from "./Components/Auth/AuthRegistration";
import Dashboard from "./Components/Pages/Dashboard";
import Contact from "./Components/Pages/Contact";
import GroupCreate from "./Components/Pages/GroupCreate";
import GroupView from "./Components/Pages/GroupView";
import ContactView from "./Components/Pages/ContactView";
import ContactCreate from "./Components/Pages/ContactCreate";
import TemplateView from "./Components/Pages/TemplateView";
import TemplateCreate from "./Components/Pages/TemplateCreate";
import Sender from "./Components/Pages/Sender";
import BulkSender from "./Components/Pages/BulkSender";
import MessagesView from "./Components/Pages/MessagesView";
import UserView from "./Components/Pages/UserView";
import UserCreate from "./Components/Pages/UserCreate";
import SenderNumberView from "./Components/Pages/SenderNumberView";
import SenderNumberCreate from "./Components/Pages/SenderNumberCreate";
import Logout from './Components/Pages/Logout';
import TemplateRemove from './Components/Pages/TemplateRemove';
import MessageRemove from './Components/Pages/MessageRemove';
import PaymentView from './Components/Pages/PaymentView';
import PlanView from './Components/Pages/PlanView';
import PlanBuy from './Components/Pages/PlanBuy';
import GroupRemove from './Components/Pages/GroupRemove';
import ContactRemove from './Components/Pages/ContactRemove';
import UserRemove from './Components/Pages/UserRemove';
import SenderNumberRemove from './Components/Pages/SenderNumberRemove';
import ApiKeyRemove from './Components/Pages/ApiKeyRemove';
import ApiKeyView from './Components/Pages/ApiKeysView';
import ApiKeyCreate from './Components/Pages/ApiKeyCreate';
import PlanCreate from './Components/Pages/PlanCreate';
import ApiKeyGenerator from './Components/Pages/ApiKeyGenerator';
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

                    <Route exact path="/group/delete/:id">
                        <GroupRemove></GroupRemove>
                    </Route>

                    <Route exact path="/group/update/:id">
                        <GroupRemove></GroupRemove>
                    </Route>

                    <Route exact path="/contact">
                        <ContactView></ContactView>
                    </Route>

                    <Route exact path="/contact/create">
                        <ContactCreate></ContactCreate>
                    </Route>

                    <Route exact path="/contact/delete/:id">
                        <ContactRemove></ContactRemove>
                    </Route>

                    <Route exact path="/contact/update/:id">
                        <ContactRemove></ContactRemove>
                    </Route>


                    <Route exact path="/template">
                        <TemplateView></TemplateView>
                    </Route>

                    <Route exact path="/template/create">
                        <TemplateCreate></TemplateCreate>
                    </Route>

                    <Route exact path="/template/delete/:id">
                        <TemplateRemove></TemplateRemove>
                    </Route>

                    <Route exact path="/template/update/:id">
                        <TemplateRemove></TemplateRemove>
                    </Route>

                    <Route exact path="/sender">
                        <Sender></Sender>
                    </Route>


                    <Route exact path="/bulksender">
                        <BulkSender></BulkSender>
                    </Route>

                    <Route exact path="/messages">
                        <MessagesView></MessagesView>
                    </Route>

                    <Route exact path="/message/delete/:id">
                        <MessageRemove></MessageRemove>
                    </Route>




                    <Route exact path="/user">
                        <UserView></UserView>
                    </Route>
                    <Route exact path="/user/create">
                        <UserCreate></UserCreate>
                    </Route>

                    <Route exact path="/user/delete/:id">
                        <UserRemove></UserRemove>
                    </Route>

                    <Route exact path="/user/update/:id">
                        <UserRemove></UserRemove>
                    </Route>


                    <Route exact path="/sender-number">
                        <SenderNumberView></SenderNumberView>
                    </Route>
                    <Route exact path="/sender-number/create">
                        <SenderNumberCreate></SenderNumberCreate>
                    </Route>

                    <Route exact path="/sender-number/delete/:id">
                        <SenderNumberRemove></SenderNumberRemove>
                    </Route>


                    <Route exact path="/sender-number/update/:id">
                        <UserRemove></UserRemove>
                    </Route>




                    <Route exact path="/contact-1">


                    </Route>


                    <Route exact path="/plan">
                        <PlanView></PlanView>
                    </Route>

                    <Route exact path="/plan/create">
                        <PlanCreate></PlanCreate>
                    </Route>

                    <Route exact path="/plan/delete/:id">

                    </Route>

                    <Route exact path="/plan/buy/:id">
                        <PlanBuy></PlanBuy>
                    </Route>


                    <Route exact path="/payment">
                        <PaymentView></PaymentView>
                    </Route>



                    <Route exact path="/apikey">
                        <ApiKeyView></ApiKeyView>
                    </Route>

                    <Route exact path="/apikey/create">
                        <ApiKeyCreate></ApiKeyCreate>
                    </Route>

                    <Route exact path="/apikey/generate">
                        <ApiKeyGenerator></ApiKeyGenerator>
                    </Route>

                    <Route exact path="/apikey/delete/:id">
                        <ApiKeyRemove></ApiKeyRemove>
                    </Route>

                    <Route exact path="/login">
                        <AuthLogin></AuthLogin>
                    </Route>

                    <Route exact path="/logout">
                        <Logout></Logout>
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