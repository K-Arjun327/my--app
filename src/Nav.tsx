import { useNavigate } from "react-router-dom";

export default function Nav(){
    const router = useNavigate();

    return(
        <ul style={{display:"flex", gap:"10px" ,justifyContent:"center"}}>
            <li style={{listStyleType:"none", cursor:"pointer"}} onClick={()=> router("/home")}>Home</li>
            <li style={{listStyleType:"none", cursor:"pointer"}} onClick={()=> router("/about")}>About</li>
        </ul>
    )
}
