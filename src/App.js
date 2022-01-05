import React,{useEffect} from 'react';
import './App.css';
import Header from './Header.js'
import Sidebar from './Sidebar.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import {login, selectUser} from '../src/features/userSlice'
import Mail from './Mail.js';
import EmailList from './EmailList.js'
import SendMail from './SendMail.js'
import {useSelector,useDispatch} from 'react-redux'
import { selectSendMessageIsOpen } from './features/mailSlice';
import Login from './Login.js'
import { auth } from './firebase';
function App() {
  const dispatch=useDispatch()
const user=useSelector(selectUser);
useEffect(()=>{
auth.onAuthStateChanged(user=>{
  if(user){
  dispatch(login({
    displayName:user.displayName,
    email:user.email,
    photoUrl:user.photoURL
  }))
  }else
  {
  }

})
},[])
const sendMessageIsOpen=useSelector(selectSendMessageIsOpen);


  return (
    <Router>
      {
        !user?(<Login/>):(
          <div className="app">

      <Header/>
      <div className="app_body">
      <Sidebar/>

      <Switch>
        <Route path="/mail">
          <Mail/>
          </Route>
        <Route path="/">
          <EmailList/>
        </Route>
        </Switch>
        {sendMessageIsOpen&&(<SendMail/>)}

      </div>
      
    </div>
        )}
    </Router>
    );
}

export default App;
