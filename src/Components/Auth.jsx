import { useContext, createContext, useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom";
import axios  from "axios"
const UserLogin=createContext()
function ContextValue(){
    return useContext(UserLogin)
}
const OMDB_Url='https://www.omdbapi.com/?apikey=faaa0cb7&s='
function Auth({children}) {
    const [searchParams] = useSearchParams()
    const searchValue = searchParams.get("Search")
    const controller = new AbortController()
    const [inputValue,setinputValue]=useState(searchValue? searchValue: "")
    const [Data, setData]=useState(null)
    const [isLogin,setisLogin]=useState(false)
    const [PrePath,setPrePath]=useState(null)
    async function useGetData(url) {
        const Result= await axios.get(url, {signal:controller.signal})
        setData(Result)
    }
    useEffect(()=>{
        useGetData(OMDB_Url+inputValue)
        return()=>{
            controller.abort()
        }
    },[inputValue])
    return (
        <div>
            <UserLogin.Provider value={{isLogin,setisLogin,Data,inputValue, setinputValue, PrePath, setPrePath}}>
                {children}
            </UserLogin.Provider>
        </div>
    )
}
export {ContextValue}
export default Auth
