import {createSlice} from "@reduxjs/toolkit"


const chatSlice=createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },

    reducers:{
        addMessage:(state,action)=>{
                // state.messages.splice(25,1)
                if(state.messages.length===25){
                   state.messages.shift()
                }
           state.messages.push(action.payload);
        }
    }
});


export const {addMessage}=chatSlice.actions;
export default chatSlice.reducer;