import React,{useState,useEffect} from 'react'
import './EmailList.css'
import {Checkbox,IconButton} from "@material-ui/core"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import RedoIcon from '@material-ui/icons/Redo'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide'
import SettingsIcon from '@material-ui/icons/Settings'
import InboxIcon from '@material-ui/icons/Inbox'
import PeopleIcon from '@material-ui/icons/People'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import Emailrow from './Emailrow.js'
import {useDispatch} from 'react-redux'
import Section from './Section.js'
import { db } from './firebase'


function EmailList() {

   const dispatch=useDispatch();
    const [emails,setEmails]=useState([])
    useEffect(()=>{
        db.collection("emails").orderBy("timestamp","desc").onSnapshot((snapshot)=>
            setEmails(
            snapshot.docs.map((doc)=>({
            id:doc.id,
            data:doc.data(),

        }))))
    },[emails])

    return (
        <div className="emailList">
            <div className="emailList_settings">
            <div className="emailList_settingsLeft">
            <Checkbox/>
            <IconButton>
                <ArrowDropDownIcon/>
            </IconButton>
            <IconButton>
                <RedoIcon/>
            </IconButton>
            <IconButton>
                <MoreVertIcon/>
            </IconButton>
            </div>
            <div className="emailList_settingsRight">
            <IconButton>
                <ChevronLeftIcon/>
            </IconButton>
            <IconButton>
                <ChevronRightIcon/>
            </IconButton>
            <IconButton>
                <KeyboardHideIcon/>
            </IconButton>
            <IconButton>
                <SettingsIcon/>
            </IconButton>
           

            </div>
            </div>
            <div className="emailList_sections">
            <Section Icon={InboxIcon} title="Primary" color="red" selected/>
            <Section Icon={PeopleIcon} title="Social" color="#1a73e8" selected={false}/>
            <Section Icon={LocalOfferIcon} title="Promotions" color="green" selected={false}/>

            </div>
            <div className="emailList_list">
                {
                    emails.map(({id,data:{to,subject,message,timestamp}})=>(
                    <Emailrow 
                    title={to}
                    id={id}
                    key={id}
                    subject={subject}
                    description={message}
                    time={new Date(timestamp?.seconds*1000).toUTCString()}
                    />))
                }
           
            
            </div>
            

            </div>
            
        
    )
}

export default EmailList
