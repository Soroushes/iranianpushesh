import {Box, Button, Container, Grid, OutlinedInput} from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {useState} from "react";
import login from "../queries/login";
import {Link, useNavigate} from "react-router-dom";
const boxStyles= {
    width : {
        xs : "100%" ,
        sm : 550
    } ,
    background : "white" ,
    px : {
        xs : 4 ,
        sm : 7
    } ,
    boxShadow : 1 ,
    borderColor : "#EEE" ,
    borderRadius:  3,
    position : "relative"
}
const Login = ()=>{
    const navigator = useNavigate() ;
    const [username , setUserName] = useState('') ;
    const [password , setPassword] = useState('') ;
    const [error , setError] = useState(false) ;
    const [loading , setLoading] = useState(false) ;
    const onSubmit = async ()=>{
        if (loading) return ;
        if (!username || !password){
            setError(true) ;
            return
        }
        try{
            setLoading(true) ;
            const {data} = await login({username , password}) ;
            if (data.access){
                localStorage.setItem('token', JSON.stringify(data));
                navigator('/') ;
            }
            setError(false)
        }catch (e){
            if (e.request.status===401){
                setError(true);
                setPassword('') ;
                setUserName('') ;
            }
            else alert('دسترسی به اینترنت را چک کنید');
        }
        setLoading(false) ;
    }
    return(
        <Container maxWidth={"lg"} sx={{height : "100%" , p:0}}>
            <Grid sx={{height : "100%"}} container justifyContent={'center'} alignItems={'center'}>
                <Box sx={boxStyles}>
                    <Box sx={{width : "30%" , m : "auto" , mb : 6}}>
                        <img style={{width : "100%"}} src="../logo.svg" alt="iranian pushesh logo"/>
                        <Link to={'/'}><KeyboardBackspaceIcon sx={{position : "absolute" , left : 20 , top : 25}}/></Link>
                    </Box>
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        placeholder={'user name'}
                        sx={{direction : "ltr" , mb : 2}}
                        fullWidth={true}
                        aria-describedby="outlined-weight-helper-text"
                        value={username}
                        onChange={e=>setUserName(e.target.value)}
                        error={error}
                    />
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        placeholder={'password'}
                        sx={{direction : "ltr" , mb : 2}}
                        fullWidth={true}
                        aria-describedby="outlined-weight-helper-text"
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                        error={error}
                        type={'password'}
                    />
                    {
                        error && <p style={{color : "red" , fontSize : 13}}>نام کاربری یا رمز عبور اشتباه است</p>
                    }
                    <Box sx={{px : 7}}>
                        <Button onClick={onSubmit}
                                sx={{background : "#307bae",mt : 10 , mb : 6 , width : '100%' , fontSize : 20 , borderRadius : 2}}
                                variant={'contained'}
                        >{loading ?"درحال ورود ... " : "ورود"}
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Container>
    )
}
export default Login ;
