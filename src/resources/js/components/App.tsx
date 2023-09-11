import React from 'react';
import {Route, Routes} from 'react-router-dom';
import BottomNavBar from './JobSite/BottomNavBar';
import NavBar from './Global/NavBar';
import Dashboard from './Dashboard/Dashboard';
import JobSiteTaskList from './JobSite/JobSiteTasksList/JobSiteTaskList';
import XguardEmployeesInfo from './JobSite/XguardEmployeesInfo/XguardEmployeesInfo';
import JobSiteMembers from './JobSite/JobSiteMembers/JobSiteMembers';
import JobSiteClientSettings from './JobSite/JobSiteClientSettings/JobSiteClientSettings';
import JobSiteInfo from './JobSite/JobSiteInfo/JobSiteInfo';


const navLinks = [
    {to: '/partners/site/info', component: <JobSiteInfo/>},
    {to: '/partners/site/task-list', component: <JobSiteTaskList/>},
    {to: '/partners/site/xguard-employees', component: <XguardEmployeesInfo/>},
    {to: '/partners/site/members', component: <JobSiteMembers/>},
    {to: '/partners/site/settings', component: <JobSiteClientSettings/>},
    {to: '/partners/dashboard', component: <Dashboard/>},
];

const App: React.FC = () => {
    return (
        <div>
            <NavBar/>

            <Routes>
                {navLinks.map((link) => (
                    <Route key={link.to} path={link.to} element={link.component}/>
                ))}
            </Routes>

        </div>

    );
};

export default App;
