import axios from "axios";

const createFile = (data)=>{
         return axios({
                method: "post",
                url: "https://estate-api.iranianpooshesh.com/portal/adjuster/49/visit/",
                data,
                headers: {
                    Authorization: 'jwt ' + JSON.parse(localStorage.getItem('token')).access
                }
            }
        )
    }
export default createFile ;