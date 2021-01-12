import React from "react";
import { Route, Switch} from "react-router-dom";
import Home from "./core/Home";
import Menu from "./core/Menu";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Profile from "./user/Profile";
import Users from "./user/Users";
import EditProfile from "./user/EditProfile";
import FindPeople from "./user/FindPeople";
import NewPost from "./post/NewPost";
import PrivateRoute from "./auth/PrivateRoute";
import SinglePost from "./post/SinglePost";
import EditPost from "./post/EditPost";
import ForgotPassword from "./user/ForgotPassword";
import ResetPassword from "./user/ResetPassword";
import LandingPage from "./user/LandingPage";
import AboutYou from "./user/primeCustomization/AboutYou";
import Careers from "./user/primeCustomization/Careers";
import Contract from "./user/primeCustomization/Contract";
import Process from "./user/primeCustomization/Process";
import Design from "./user/primeCustomization/Design";
import Empowerment from "./user/primeCustomization/Empowerment";
import GoalMine from "./user/primeCustomization/GoalMine";
import MaanSystem from "./user/primeCustomization/MaanSystem";
import Primepreneur from "./user/primeCustomization/Primepreneur";
import PrimeStudent from "./user/primeCustomization/PrimeStudent";
import Calendar from "./user/primeCustomization/Calendar";
import Self from "./user/primeCustomization/Self";
import Transition from "./user/primeCustomization/Transition";
import StarTimeline from "./user/primeCustomization/StarTimeline";
import Financial from "./user/primeCustomization/Financial";
import BusinessBio from "./user/primeCustomization/BusinessBio";




const MainRouter = () => (
    <div>
    <Menu />
        <Switch>
            <Route exact path="/landingpage" component={LandingPage} />
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/reset-password/:resetPasswordToken" component={ResetPassword}/>
            <PrivateRoute exact path="/post/create" component={NewPost} />
            <Route exact path="/post/:postId" component={SinglePost} />
            <PrivateRoute exact path="/post/edit/:postId" component={EditPost} />
            <PrivateRoute exact path="/users/" component={Users} />
            <PrivateRoute exact path="/users/primecustomization/aboutyou" component={AboutYou} />
            <PrivateRoute exact path="/users/primecustomization/careers" component={Careers} />
            <PrivateRoute exact path="/users/primecustomization/contract" component={Contract} />
            <PrivateRoute exact path="/users/primecustomization/process" component={Process} />
            <PrivateRoute exact path="/users/primecustomization/design" component={Design} />
            <PrivateRoute exact path="/users/primecustomization/empowerment" component={Empowerment} />
            <PrivateRoute exact path="/users/primecustomization/goalmine" component={GoalMine} />
            <PrivateRoute exact path="/users/primecustomization/maansystem" component={MaanSystem} />
            <PrivateRoute exact path="/users/primecustomization/primepreneur" component={Primepreneur} />
            <PrivateRoute exact path="/users/primecustomization/primestudent" component={PrimeStudent} />
            <PrivateRoute exact path="/users/primecustomization/startimeline" component={StarTimeline} />
            <PrivateRoute exact path="/users/primecustomization/financial" component={Financial} />
            <PrivateRoute exact path="/users/primecustomization/calendar" component={Calendar} />
            <PrivateRoute exact path="/users/primecustomization/self" component={Self} />
            <PrivateRoute exact path="/users/primecustomization/transition" component={Transition} />
            <PrivateRoute exact path="/users/primecustomization/businessbio" component={BusinessBio} />
            <PrivateRoute exact path="/findpeople/" component={FindPeople} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            <PrivateRoute exact path="/user/:userId" component={Profile} />
            <PrivateRoute exact path="/user/edit/:userId" component={EditProfile} />
            
        </Switch>
    </div>
);
// Process to create component
// 1)Component 2)Main Router 3)Create Link method
export default MainRouter;