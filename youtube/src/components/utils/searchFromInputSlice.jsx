import {createSlice } from "@reduxjs/toolkit";

const searchFromInputSlice=createSlice ({
    name:"searchInp",
    initialState:{
        searchText:[],
    },
    reducers:{
        addText:(state,action)=>{
           state.searchText.push(action.payload)
        },
        clearText:(state)=>{
           state.searchText=[]
        }
    }
});




export const {addText,clearText}=searchFromInputSlice.actions;

export default searchFromInputSlice.reducer;