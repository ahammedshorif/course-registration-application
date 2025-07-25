import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase";
import SignupForm from "../components/SignupForm";

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
    <div className="w-full h-screen flex justify-center items-center">
        <div className="h-[380px] w-[350px] border-2 px-6 pt-8 rounded-md">
            <h2>Login</h2>
            <SignupForm/>
        </div>
    </div>
  );
}
