import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {fetchFile} from "../redux/slices/fileSlice";
import {useDispatch, useSelector} from "react-redux";
import {Button, Container, Grid, InputAdornment, MenuItem, OutlinedInput, Select, TextField, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {DesktopDatePicker, LocalizationProvider, TimePicker} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import Loading from "../base/Loading";
import priceDivider from "../helpers/priceDivider";
import validator from "../helpers/validator";
import createFile from "../queries/createFile";

const CreateFile = ()=>{
    const dispatcher = useDispatch() ;
    const [date, setDate] = useState(new Date());
    const [time , setTime] = useState(new Date()) ;
    const [price , setPrice] = useState(0) ;
    const [distance , setDistance] = useState(0) ;
    const navigator = useNavigate() ;
    const data = useSelector(state => state.file) ;
    const onSubmit = async ()=>{
        const validated = await validator(date , time , price , distance) ;
        if (!validated){
            alert('لطفا همه ی فیلد ها را پر کنید') ;
        }else {
            const Ndate = date.$d ? date.$d : date ;
            const Ntime = time.$d  ? time.$d : time ;
            const yyyy = Ndate.getFullYear();
            let mm = Ndate.getMonth() + 1;
            let dd = Ndate.getDate();
            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm;
             try {
                 const {data : fileData} = await createFile(
                     {
                         is_active : true,
                         visit_date : yyyy + '-' + mm + '-' + dd,
                         visit_time : Ntime.toTimeString().split(' ')[0],
                         covered_distance : Number(distance) ,
                         description : "test"  ,
                         adjuster : data.adjuster.id ,
                         file : data.id ,
                         branch : data.branch.id
                     })
                 if (fileData.id){
                     alert('با موفقیت ارسال شد')
                     navigator('/') ;
                 }
             }catch (err){
                 alert('اشتباهی رخ داده است لطفا مجدد امتحان کنید')
             }
        }
    }
    useEffect(()=>{
        const token = localStorage.getItem('token') ;
        if (!token) navigator('/login') ;
        else {
            dispatcher(fetchFile()) ;
        }
    },[])
    return(
        data.loading ? <Loading/> :
            <Container sx={{pt : 20}} maxWidth={'lg'}>
                <Typography variant={'h5'} component={'h1'}>فرم بازدید</Typography>
                <Box sx={{border : {md : '2px solid #eee'} , px : 2 , py : 5 , mt : 3 , borderRadius : 2}}>
                    <Grid justifyContent={"space-between"} container>
                        <Grid sx={{mb:5}} item xs={12} md={3.5}>
                            <Typography sx={{mb : 3}}>شعبه ایرانیان پوشش *</Typography>
                            <Select
                                fullWidth
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={data.branch.province.id}
                            >
                                <MenuItem value={data.branch.province.id}>{data.branch.name}</MenuItem>
                            </Select>
                        </Grid>
                        <Grid sx={{mb:5}} item xs={12} md={3.5}>
                            <Typography sx={{mb : 3}}>کارشناس * </Typography>
                            <Select
                                fullWidth
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={data.adjuster.id}
                            >
                                <MenuItem value={data.adjuster.id}>{data.adjuster.full_name}</MenuItem>
                            </Select>
                        </Grid>
                        <Grid sx={{mb:5}} item xs={12} md={3.5}>
                            <Typography sx={{mb : 3}}>مبلغ خسارت ارزیابی شده * </Typography>
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                endAdornment={<InputAdornment position="end">ریال</InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                                fullWidth
                                value={priceDivider(price)}
                                onChange={e=>setPrice(e.target.value)}
                            />
                        </Grid>
                        <Grid sx={{mb:5}} item xs={6} md={3.5}>
                            <Typography sx={{mb : 3}}>تاریخ *</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DesktopDatePicker
                                    inputFormat="YYYY/MM/DD"
                                    value={date}
                                    onChange={value=>setDate(value)}
                                    renderInput={(params) => <TextField fullWidth {...params} />}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid sx={{mb:5}} item xs={6} md={3.5}>
                            <Typography sx={{mb : 3}}>زمان *</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <TimePicker
                                    value={time}
                                    onChange={value => setTime(value)}
                                    renderInput={(params) => <TextField fullWidth {...params} />}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid sx={{mb:5}} item xs={12} md={3.5}>
                            <Typography sx={{mb : 3}}>مسافت رفت و برگشت طی شده</Typography>
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                endAdornment={<InputAdornment position="end">Km</InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                                fullWidth
                                value={distance}
                                onChange={e=>setDistance(e.target.value)}
                                error={distance >= 30}
                            />
                            {
                                distance >= 30 ?
                                    <Typography sx={{color : 'red' , fontSize : 12  }}>مسافت باید کتر از 30 کیلومتر باشد</Typography> : ""
                            }
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{textAlign : "left"}}>
                    <Button onClick={onSubmit} size={'large'} sx={{backgroundColor : "#FA8735" , px:12 , color: 'white' , my : 3 , "&:hover" : {backgroundColor : "#FA8735" } }}>ذخیره</Button>
                </Box>
            </Container>
    )
}
export default CreateFile ;