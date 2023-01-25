import axios from "axios";

const login = (data)=>(
    axios({
        url : "https://estate-api.iranianpooshesh.com/api/token/" ,
        method : "post" ,
        data ,
    })
)
export default login ;