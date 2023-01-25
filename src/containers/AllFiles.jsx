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
import {Area, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis , AreaChart} from "recharts";
import {chartData} from "../assets/data/chartData";
const datas = [
    {
        title : 'پرونده تشکیل شده' ,
        icon : <CreatedLogo size={45}/>,
        key : 0  ,
        numbers : 336
    },
    {
        title : 'پرونده ارسال شده به شرکت ارزیابی' ,
        icon : <SentToCorpLogo size={45}/>,
        key : 1 ,
        numbers : 310
    },
    {
        title : 'پرونده آرشیو شده' ,
        icon : <ArchivedLogo size={45}/>,
        key : 2 ,
        numbers : 712
    },
    {
        title : 'پرونده درحال اجرا' ,
        icon : <RunningIcon size={45}/>,
        key : 3 ,
        numbers : 632
    },
    {
        title : 'پرونده ارزیابی شده' ,
        icon : <ReviewedIcon size={45}/> ,
        key : 4 ,
        numbers : 255

    },
    {
        title : 'پرونده برگشت به شرکت ارزیابی' ,
        icon : <ReturnedToCorpIcon size={45}/> ,
        key : 5 ,
        numbers : 255
    },
    {
        title : 'پرونده بازدید مجدد' ,
        icon : <SeeAgainIcon size={45}/> ,
        key : 6 ,
        numbers : 255
    },
    {
        title : 'پرونده بسته شده' ,
        icon : <ClosedFileIcon size={45}/> ,
        key : 7 ,
        numbers : 255
    },
];
const AllFiles = ()=>{
    return(
        <Container disableGutters maxWidth={'xl'}>
            <Grid container justifyContent={'space-between'}>
                <Grid item xs={12} md={3.5}>
                    <Box sx={{p : 5 , mb : 3 , boxShadow : 1 , borderRadius : 4 , display : "flex" , flexDirection : "column" , alignItems : {xs : 'center' , md : 'flex-start'}}}>
                        <Typography mb={5} component={'h2'} variant={'h6'}>
                            تعداد پرونده ها
                        </Typography>
                        <Box>
                        {
                            datas.map((data)=>{
                                return(
                                    <Box key={data.key} sx={{display : "flex" , alignItems : 'center' , gap : 2}}>
                                        <Typography sx={{mt : 2}}>{data.icon}</Typography>
                                        <Typography sx={{fontSize : 18}}>{data.numbers}</Typography>
                                        <Typography sx={{color : "#A7ACBB"}}>{data.title}</Typography>
                                    </Box>
                                )
                            })
                        }
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={8} sx={{height : '100%'}}>
                    <Box sx={{p : 7 , borderRadius : 3 , boxShadow : 1 , height : "100%"}}>
                        <Typography mb={6} variant={'h6'} component={'h2'}>نمودار تعداد کل پرونده ها</Typography>
                        <ResponsiveContainer height={500}>
                            <AreaChart
                                width={300}
                                height={200}
                                data={chartData}
                                margin={{
                                    top: 10,
                                    left: -40,
                                    bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
export default AllFiles ;