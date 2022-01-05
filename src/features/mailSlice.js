import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sendMessageIsOpen:false,
  selectedMail:null
}

const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {

    openSendMessage:(state)=>{
      state.sendMessageIsOpen = true;
    },
    closeSendMessage:(state)=>{
      state.sendMessageIsOpen = false;
    },
    selectMail:(state,action)=>{
      state.selectedMail=action.payload;
    }

  }
});

export const { openSendMessage, closeSendMessage,selectMail } = mailSlice.actions
export const selectSendMessageIsOpen=(state)=>state.mail.sendMessageIsOpen
export const selectselectedMail=(state)=>state.mail.selectedMail


export default mailSlice.reducer