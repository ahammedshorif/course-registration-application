import { useEffect, useState } from "react";
import supabase from "../supabase";
import { useNavigate } from "react-router-dom";

async function logOut(){
   await supabase.auth.signOut({ scope: 'global' });

}

function Appbar() {
   const [user, setUser] = useState(false);
    const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
     
    };

    checkUser();
  }, [user]);

   if(!user){
    return <div className="flex justify-between px-3 py-4 bg-black text-white">
        <div>
            <a href="">
                <img src="#" alt="logo" />
            </a>
        </div>
        <div className="mr-4">
            <button className="bg-green-500 p-1 rounded-md cursor-pointer" onClick={()=>{
                navigate("/signin")
            }}>Signin</button>
        </div>
    </div>
   }
   else{
    return <div className="flex justify-between px-3 py-4 bg-black text-white">
        <div>
            <a href="">
                <img src="#" alt="logo" />
            </a>
        </div>
        <div className="mr-4">
            <button className="bg-blue-500 p-1 rounded-md cursor-pointer mr-5" onClick={()=>{ 
                navigate("/dashboard")
            }}> Dashboard</button>
            <button className="bg-green-500 p-1 rounded-md cursor-pointer mr-3" onClick={()=>{
                logOut();
                navigate("/signin")
                console.log("user logout");
                
            }}>Logout</button>
        </div>
    </div>
   }
}

export default Appbar;
