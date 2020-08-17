import React from 'react';
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import { Route, BrowserRouter } from 'react-router-dom';
import c from './App.module.css';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import Users from './components/Users/Users.jsx';


function App(props) {
  return (
    <BrowserRouter>
      <div className={c.app_wrapper}>
        <Header />
        <div className={c.app_wrapper_content}>

          
          <Route path='/profile'
            render={() =>
              <Profile />} />


          <Route path='/dialogs'
            render={() => <DialogsContainer />} />


          <Route path='/users'
            render={() => <Users />} />


        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;