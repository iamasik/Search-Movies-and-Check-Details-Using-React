import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import  {Home,Account,MovieView,Error,Login}  from "./AllPages"
import NavBar from "./Components/NavBar"
import Auth from './Components/Auth.jsx'
const PageRoute=createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Auth><NavBar/></Auth>}>
    <Route index element={<Home/>} />
    <Route path="Account" element={<Account/>} />
    <Route path="MovieView/:id" element={<MovieView/>} />
    <Route path="Login" element={<Login/>} />
    <Route path="*" element={<Error/>} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={PageRoute}/>
  )
}

export default App
