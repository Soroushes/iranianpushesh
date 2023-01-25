import {configureStore} from "@reduxjs/toolkit";
import FileSlice from "./slices/fileSlice";
export const store = configureStore({
    reducer : {
        file : FileSlice
    }
})