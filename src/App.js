import React from 'react';
import Header from './components/Header/Header.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import c from './App.module.css';


function App(props) {
  return (
    <BrowserRouter>
      <div className={c.app_wrapper}>
        <Header />
        <NavBar />
        <div className={c.app_wrapper_content}>
          <Route path='/profile'
            render={() => <Profile
              state={props.state.profilePage} 
              addPost = {props.addPost}
              updateNewPostText ={props.updateNewPostText} />}
             />
          <Route path='/dialogs'
            render={() => <Dialogs
             state = {props.state.dialogsPage} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;