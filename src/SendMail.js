import React from 'react'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close'
import Button from '@material-ui/core/Button';
import {useForm} from "react-hook-form"
import { closeSendMessage } from './features/mailSlice';
import {useDispatch} from 'react-redux'
import {db,auth} from './firebase'
import firebase from  'firebase'
function SendMail() {
   const dispatch=useDispatch();
    const {register,handleSubmit,watch,errors}=useForm();

    const OnSubmit=(formData)=>{

       db.collection('emails').add({
      to:formData.to,
      subject:formData.subject,
      message:formData.message,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
      })

      dispatch(closeSendMessage())


    }
        
    return (
        <div className="sendMail">

            <div className="sendMail_header">
            <h3>New Message</h3>

            <CloseIcon onClick={()=>dispatch(closeSendMessage())} className="sendMail_close"/>
            </div>

            <form onSubmit={handleSubmit(OnSubmit)}>
              <input  name="to" type="text" placeholder="to" className="to" type="email" ref={register({required:true})}/>
              {errors.to &&(<p className="sendMail_error">To is required</p>)}
              <input name="subject" type="text" placeholder="subject" className="subject" ref={register({required:true})}/>
              {errors.subject &&(<p className="sendMail_error">subject is required</p>)}

              <input name="message" type="text" placeholder="Message" className="message" ref={register({required:true})}/>
              {errors.message &&(<p className="sendMail_error">Message is required</p>)}


                <div className="sendMail_options">
                  <Button className="sendMail_send" type="submit">Send</Button>
                </div>
            </form>
            
        </div>
    )
}

export default SendMail
