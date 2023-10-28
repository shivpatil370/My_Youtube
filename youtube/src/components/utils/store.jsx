import {configureStore} from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import searchFromInputSlice from "./searchFromInputSlice";

const store=configureStore({
     reducer:{
        app:appSlice,
        search:searchSlice,
        chat:chatSlice,
        searchInp:searchFromInputSlice
     }
});

export default store;