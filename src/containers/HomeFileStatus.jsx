import {Container, Grid, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {
    ArchivedLogo, ClosedFileIcon,
    CreatedLogo,
    ReturnedToCorpIcon,
    ReviewedIcon,
    RunningIcon,
    SeeAgainIcon,
    SentToCorpLogo
} from "../base/svg";
const datas = [
    {
        title : 'تشکیل شده' ,
        icon : <CreatedLogo/>,
        key : 0
    },
    {
        title : 'ارسال شده به شرکت ارزیابی' ,
        icon : <SentToCorpLogo/>,
        key : 1
    },
    {
        title : 'آرشیو شده' ,
        icon : <ArchivedLogo/>,
        key : 2
    },
    {
        title : 'درحال اجرا' ,
        icon : <RunningIcon/>,
        key : 3
    },
    {
        title : 'ارزیابی شده' ,
        icon : <ReviewedIcon/> ,
        key : 4

    },
    {
        title : 'برگشت به شرکت ارزیابی' ,
        icon : <ReturnedToCorpIcon/> ,
        key : 5
    },
    {
        title : 'بازدید مجدد' ,
        icon : <SeeAgainIcon/> ,
        key : 6
    },
    {
        title : 'بسته شده' ,
        icon : <ClosedFileIcon/> ,
        key : 7
    },
]
const HomeFileStatus = ()=>{
    return(
        <Container sx={{mb : 5}} disableGutters={true} maxWidth={'xl'}>
            <Box sx={{backgroundColor : "white" , borderRadius : 3 , boxShadow : 2 , mt : 12}}>
                <Grid container={true}>
                    {
                        datas.map((data)=>{
                            return(
                                <Grid sx={{textAlign : "center"}} key={data.key} my={5} p={2} item xs={6} md={3}>
                                    {data.icon}
                                    <Typography sx={{textAlign : "center"}} component={'h4'}>
                                        {
                                            data.title
                                        }
                                    </Typography>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </Container>
    )
}
export default HomeFileStatus ;