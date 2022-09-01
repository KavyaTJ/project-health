import React from 'react';
import Checkmail from './Checkmail';
import Forgotpassword from './Forgotpassword';
import MiniDrawer from '../components/SideDrawer';
import DataGridProDemo from '../components/SideDrawer';

import Passwordreset from './Passwordreset';
import Settingpassword from './Settingpassword';
import Sidebar from "../components/SideDrawer"
import Topbar from '../components/Topbar';
import ButtonAppBar from '../components/Topbar';
import Login from './login';
import SearchBar from '../components/Search';
import List from '../components/List';

import ProjectTopbar from '../components/ProjectTopbar';




function index() {
  return (
    <div>
      {/* <SearchBar /> */}
      {/* <Sidebar/> */}
      {/* <Topbar/> */}
      {/* <List/> */}
      <Login/>
      {/* <ProjectTopbar/> */}
      {/* <Forgotpassword/> */}
      {/* <Checkmail/> */}
      {/* <Passwordreset/> */}
      {/* <Settingpassword/> */}
      {/* <DataGridProDemo/> */}
      {/* <MiniDrawer/> */}
      {/* <ButtonAppBar/> */}
     
    </div>
  );
}

export default index;