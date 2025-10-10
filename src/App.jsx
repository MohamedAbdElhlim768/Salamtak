import './Components/Nav/Nav'  
import './Components/Footer/Footer'
import './App.css'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Book from './Components/Book/Book'
import Doctors from './Components/Doctors/Doctors'
import Login from './Components/Login/Login'
import Pharmacy from './Components/Pharmacy/Pharmacy'
import Rigister from './Components/Rigister/Rigister'


let routers = createBrowserRouter([
  {path:'/',element:<Layout/>,children:[
    {path:'home',element: <Home/>},
    {path:'about',element: <About/>},
    {path:'contact',element: <Contact/>},
    {path:'book',element:<Book/>},
    {path:'doctors',element:<Doctors/>},
    {path:'pharmacy',element:<Pharmacy/>},
    {path:'login',element:<Login/>},
    {path:'rigister',element:<Rigister/>},
  ]}
])

export default function App() {
  return <RouterProvider router={routers}/>

  
}



