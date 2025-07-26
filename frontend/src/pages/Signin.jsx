import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase";
import SigninForm from "../components/SigninForm";

export default function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        navigate("/dashboard");
      }
    };

    checkSession();
  }, [navigate]);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
        <div className=" w-full max-w-md p-6  rounded-md bg-white shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Login Account</h2>
            <SigninForm/>
        </div>
    </div>
  );
}