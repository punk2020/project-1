import React from 'react';
import Header from './components/Header/Header.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import c from './App.module.css';

let dialogs = [
  { id: 1, name: 'Danon' },
  { id: 2, name: 'Vanon' },
  { id: 3, name: 'Vlad' },
  { id: 4, name: 'Vitalya' }
]

let messages = [
  { id: 1, msg: 'hello' },
  { id: 2, msg: 'how are u?' }
]

function App() {
  return (
    <BrowserRouter>
      <div className={c.app_wrapper}>
        <Header />
        <NavBar />
        <div className={c.app_wrapper_content}>
          <Route path='/profile' render={() => <Profile  />} />
          <Route path='/dialogs' render={() => <Dialogs dialogs = {dialogs} messages = {messages} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;