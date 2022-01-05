import { StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import './Emailrow.css'
import Checkbox from '@material-ui/core/Checkbox'
import {IconButton} from '@material-ui/core';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { selectMail } from './features/mailSlice';
function Emailrow({id,title,subject,description,time}) {
    const history=useHistory();

    const dispatch =useDispatch();
    
    const openMail=()=>{
        dispatch(selectMail({id,title,subject,description,time}))
        history.push('/mail')
    }
    return (
        <div className="emailrow" onClick={openMail}>
            
            <div className="emailrow_options">
            <Checkbox/>
            <IconButton>
                <StarBorderOutlinedIcon/>
            </IconButton>
            <IconButton>
                <LabelImportantOutlinedIcon/>
            </IconButton>
            
            </div>

            <div className="emailrow_title">
             {title}
             </div>
                

               <div className="emailrow_message">
               <h4>{subject}
               <span className="emailrow_description">
               {description}
               </span>
               </h4>
               </div>

                   <div className="emailrow_description">
                    {time}
                    </div> 


        </div>
    )
}

export default Emailrow
