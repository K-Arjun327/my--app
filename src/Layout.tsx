import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";

export default function Layout(){
    return(
        <>
        <Header></Header>
        <Nav></Nav>
        <hr />
        <Outlet></Outlet>
        </>
    )
}