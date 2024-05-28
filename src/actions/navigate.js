import { useNavigate } from "react-router-dom"


const useNavigateUser = ()=>{
   
    const navigate = useNavigate();
    navigate("/")
}
export default useNavigateUser;