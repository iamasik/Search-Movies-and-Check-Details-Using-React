import { ContextValue } from "../Components/Auth"
import {useLocation, Navigate} from 'react-router-dom'
function Account() {
    const {isLogin}=ContextValue()
    const PrevLocation=useLocation()
    return(
        <>
            {isLogin===true?<div>
                I&apos;m Account Page
            </div>: <Navigate to={'/Login'} replace state={{PrevLocation:PrevLocation.pathname}}/>
    }
        </>
    )

}

export default Account
