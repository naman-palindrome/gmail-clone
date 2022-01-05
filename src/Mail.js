import React,{useState}from 'react'
import "./Mail.css"
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox'
import ErrorIcon from '@material-ui/icons/Error'
import DeleteIcon from '@material-ui/icons/Delete'
import EmailIcon from '@material-ui/icons/Email'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore'
import PrintIcon from '@material-ui/icons/Print'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import {useSelector} from 'react-redux'

import {IconButton} from '@material-ui/core'

import {useHistory} from 'react-router-dom'
import { selectselectedMail } from './features/mailSlice'
function Mail() {
    const history=useHistory();
    const email=useSelector(selectselectedMail)
    console.log(email)
    return (
        <div className="mail">
            <div className="mail_tools">
            <div className="mail_toolsleft">
                <IconButton onClick={()=>{history.push('/')}}>
                    <ArrowBackIcon/>
                </IconButton>
                <IconButton>
                    <MoveToInboxIcon/>
                </IconButton>
                <IconButton>
                    <ErrorIcon/>
                </IconButton>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
                <IconButton>
                    <EmailIcon/>
                </IconButton>
                <IconButton>
                    <WatchLaterIcon/>
                </IconButton>
                <IconButton>
                    <CheckCircleIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>

                <div className="mail_toolsright">
                <IconButton>
                    <UnfoldMoreIcon/>
                </IconButton>
                <IconButton>
                    <PrintIcon/>
                </IconButton>
                <IconButton>
                    <ExitToAppIcon/>
                </IconButton>
               </div>
            
            
            </div>

            <div className="mail_body">
            <div className="mail_bodyheader">
            <h2>{email.subject}</h2>
            <LabelImportantIcon className="mail_important"/>
            <p>{email.title}</p>
            <p className="mail_time">{email.time}</p>
            </div>

            <div className="mail_message">
            <p>
            {email.description  }
            </p>
            </div>
            </div>
        </div>
    )
}

export default Mail
