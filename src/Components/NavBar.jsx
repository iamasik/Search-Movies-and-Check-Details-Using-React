import {Outlet, Link, useNavigate} from 'react-router-dom'
import style from './NavBar.module.css'
import { ContextValue } from './Auth'
function NavBar() {
    const {isLogin,setisLogin}=ContextValue()
    const NavigatePage=useNavigate()
    function Logout(){
        setisLogin(false)
        NavigatePage('/Login', {replace:true})
    }
    return (
        <div>
            <nav className={style.NavBar}>
                <div className={style.Logo}>
                    <Link to={"/"}><img src="../Asset/Logo.png" alt="" /></Link>
                </div>
                <div>
                   {isLogin? <div>
                        <Link className={style.Txt} to={"Account"}>Account</Link>
                        <button onClick={()=>Logout()}>Log Out</button> </div>:
                        <Link to={'Login'}> <button>Login</button>
                        </Link>
                        } 
                    
                </div>
            </nav>
            <Outlet/>
        </div>
    )
}

export default NavBar
