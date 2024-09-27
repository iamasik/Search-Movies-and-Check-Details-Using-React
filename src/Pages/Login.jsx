import { ContextValue } from "../Components/Auth"
import {useNavigate, Navigate, useLocation} from 'react-router-dom'
function Login() {
    const NavigateUser=useNavigate()
    const {isLogin,setisLogin}=ContextValue()
    const PrevLoc=useLocation()
    console.log(PrevLoc);
    function LogInUser(){
        setisLogin(true)
        NavigateUser(PrevLoc.state?.PrevLocation? PrevLoc.state.PrevLocation : '/',{replace:true})
    }
    return (
        <>
        {isLogin===false?         
            <div className="Container">
            <h1>IM Login page</h1>
            <button onClick={()=>LogInUser()}>Login</button> 
            </div> 
        : 
        <Navigate to="/" replace={true} />
        }
        </>

    )
}

export default Login
