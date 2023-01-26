import Box from "@mui/material/Box";
import {Button, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const NotFound = ()=>{
    return(

        <Box sx={{position : "fixed" , right : "50%" , top : "50%" ,
            width : 350 ,transform : "translate(50% , -50%)" , py : 15 , px : 10}}>
            <p style={{textAlign : "center"}}><img src="./logo.svg" alt="iranian pooshesh logo"/></p>
            <Typography variant={'h7'} component={"h1"} sx={{textAlign : "center"}}>404 not found</Typography>
            <p style={{textAlign : "center"}}>
                صفحه مورد نظر یافت نشد
            </p>
            <Link to={'/'}>
                <Button sx={{background : "#307bae",mt : 5 , mb : 6 , width : '100%' , fontSize : 20 , borderRadius : 2}} variant={'contained'}>
                    بازگشت
                </Button>
            </Link>
        </Box>
    )
}
export default NotFound ;