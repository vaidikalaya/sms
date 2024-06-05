import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom"
import axios from '@/src/services/axios'
import Loader from '@/src/components/Loader'
import {Input, Button, FormHelperText, Snackbar} from "@mui/joy"
import {Cancel, Check, InfoOutlined, KeyboardArrowDown} from "@mui/icons-material";
import VisibilityIcon from '@mui/icons-material/Visibility'


export default function login(){
    const navigate = useNavigate()
    const [showLoader, setShowLoader] = useState(false)
    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false)
    const [userid, setUserid] = useState("")
    const [password, setPassword] = useState("")
    const [useridError, setUseridError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [error, setError] = useState("")
    const [openError, setOpenError] = useState(false)

    useEffect(() => {
        if (window.auth.isLoggedIn) {
            //navigate('/dashboard');
        }
    }, []);
    
    const loginPost = async (event) => {
        event.preventDefault();

        if(userid == "" || password == ""){
            setUseridError(true)
            setPasswordError(true)
            return false;
        }

        try{
            setShowLoader(true)
            let JsonData={
                'user_id':userid,
                'password':password
            }
            axios.get('/sanctum/csrf-cookie').then(res=>{
                axios.post('/login',JsonData).then(response=>{
                    console.log(response);
                    if(response.data.status=='success' && response.data.message=="login successfull"){
                        let resd=response.data.data;
                        console.log(resd);
                        setTimeout(function () {
                            window.auth.isLoggedIn = 1;
                            localStorage.setItem('userid',resd.id)
                            localStorage.setItem('username',resd.first_name+' '+resd.middle_name+' '+resd.last_name)
                            navigate('/dashboard');
                        }, 500)
                    }
                }).catch(error => {
                    setShowLoader(false)
                    if (error.response && error.response.status === 422) {
                        setError("These credentials do not match our records.")
                        setOpenError(true)
                    } else {
                        setError("Something went wrong. Please try again.")
                        setOpenError(true)
                    }

                });
            })
        }
        catch(error){
            setShowLoader(false)
            console.log(e)
        }
    }

    return(<>
        <Loader show={showLoader}/>
        <div className="flex justify-content-center items-center h-[100vh] bg-[#efd9b5]">
            <Snackbar
                variant="soft"
                color="success"
                open={open}
                onClose={() => setOpen(false)}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                startDecorator={<Check/>}
                endDecorator={
                    <Button
                        onClick={() => setOpen(false)}
                        size="sm"
                        variant="soft"
                        color="success"
                    >
                        Dismiss
                    </Button>
                }
            >
                Logged In Successfully
            </Snackbar>
            <Snackbar
                variant="soft"
                color="danger"
                open={openError}
                onClose={() => setOpenError(false)}
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                startDecorator={<Cancel/>}
                endDecorator={
                    <Button
                        onClick={() => setOpenError(false)}
                        size="sm"
                        variant="soft"
                        color="danger"
                    >
                        Dismiss
                    </Button>
                }
            >
                {error}
            </Snackbar>
            
            <div className="container max-w-[1150px] mx-auto">
                <h1 className="text-2xl font-bold text-center mb-5">VMS LOGIN</h1>
                <div className="max-w-[500px] mx-auto">
                    <form onSubmit={loginPost} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        
                        <div className='mb-3'>
                            <label className="text-[#353535]">User Id</label>
                            <Input placeholder='Enter Id' 
                                onChange={(event) => {
                                    setUserid(event.target.value);
                                    setUseridError(event.target.value === "");
                                }}
                                className="mt-1"
                            />
                            {
                                useridError &&
                                <FormHelperText sx={{color: 'red'}}>
                                    <InfoOutlined color={'primary'} fontSize={'small'}/>
                                    Field is required
                                </FormHelperText>
                            }
                        </div>

                        <div className='mb-3'>
                            <label className="text-[#353535] ">Password</label>
                            <Input type={show ? 'text' : 'password'} placeholder='Enter Password'
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                    setPasswordError(event.target.value === "");
                                }}
                                endDecorator={<Button onClick={()=>setShow(!show)} variant={'plain'} color={'neutral'}><VisibilityIcon/></Button>}
                                className="mt-1"
                            />
                            {
                                passwordError &&
                                <FormHelperText sx={{color: 'red'}}>
                                    <InfoOutlined color={'primary'} fontSize={'small'}/>
                                    Field is required
                                </FormHelperText>
                            }
                        </div>

                        <div className='text-center'>
                            <Button type='submit' sx={{backgroundColor: '#f78c30','&:hover': { backgroundColor: '#f78c30' }}} className='w-full'>
                                <div className="flex justify-center w-full text-lg items-center font-bold font-sans ">
                                    LOGIN
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
                                    </svg>
                                </div>
                            </Button>
                            <div className="text-right mt-2">
                                <a className="cursor-pointer text-blue-600">Forgot Password?</a>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </>)
}