import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    loading : true
}
export const fetchFile = createAsyncThunk(
    'file/status' ,
    async (thunkAPI)=>{
        const token = localStorage.getItem('token');
        try {
            const {data} =  await axios({
                url : "https://estate-api.iranianpooshesh.com/portal/adjuster/49/file_detail/?state=in_progress" ,
                method : "GET" ,
                headers : {
                    Authorization : 'jwt ' + JSON.parse(token).access
                }
            })
            return data ;
        }catch (err){
            alert('اینتزنت خود را برسی کنید')
        }
    }
    )
const fileSlice = createSlice({
    initialState ,
    name : "file" ,
    extraReducers: (builder) => {
        builder.addCase(fetchFile.fulfilled, (state, action) => {
            if (action.payload){
                return {
                    loading : false ,
                    ...action.payload
                }
            }
        })
    },
})
export default fileSlice.reducer ;
export const {LOGOUT} = fileSlice.actions ;
