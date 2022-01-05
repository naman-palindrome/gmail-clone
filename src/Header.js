import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import {Avatar,IconButton} from '@material-ui/core'
import gmail from './gmail.png'
import  SearchIcon from '@material-ui/icons/Search'
import  ArrowDropDownIcon  from '@material-ui/icons/ArrowDropDown'
import AppIcon from '@material-ui/icons/Apps'
import NotificationIcon from '@material-ui/icons/Notifications'
import { useSelector,useDispatch} from 'react-redux'
import { logout, selectUser } from './features/userSlice'
import {auth} from './firebase'
function Header() {
    const user=useSelector(selectUser)
    const dispatch=useDispatch();
    const signOut=()=>{
        auth.signOut().then(()=>{

            dispatch(logout());
        })
    }
    return (

        <div className="header">
        
        <div className="header_left">
            <IconButton>
            <MenuIcon/>
            </IconButton>
            <img src={gmail}/>
        </div>

            <div className="header_middle">
                <SearchIcon/>
                <input placeholder="Search Mail" type="text"/>
                <ArrowDropDownIcon className="header_inputCaret"/>
          </div>

                <div className="header_right">
                    <IconButton>
                    <AppIcon/>
                    </IconButton>
                    <IconButton>
                    <NotificationIcon/>
                    </IconButton>
                    <IconButton>
                    <Avatar  src={user?.photoUrl} onClick={signOut}/>
                    </IconButton>
                    
             </div>

        </div>

        )
}

export default Header