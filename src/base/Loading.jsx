import Box from "@mui/material/Box";

const Loading = ()=>{
    return(
        <Box sx={{position : "fixed" , right : "50%" , top : "50%" ,
            width : 350 , borderRadius : 3 , boxShadow : 2 , transform : "translate(50% , -50%)" , py : 15 , px : 10}}>
            <p style={{textAlign : "center"}}><img src="./logo.svg" alt="iranian pooshesh logo"/></p>
            <p style={{textAlign : "center"}}>
                لطفا منتظر بمانید ....
            </p>
        </Box>
    )
}
export default Loading ;