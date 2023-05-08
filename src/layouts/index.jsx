import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import Menu from "./Menu"

const Layout =()=>
{
    return <>
                <Header/>
                <Outlet/>
               <Footer/>
            </>;
}
export default Layout;