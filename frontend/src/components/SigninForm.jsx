import { useState } from "react";
import supabase from "../supabase";
import { Link, useNavigate} from "react-router-dom";




const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate =useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setError(error.message);
    else setError("");
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) setError(error.message)
    navigate("/dashboard")
 
  };

  return (
    <div className="max-w-sm mx-auto space-y-4">
      <form onSubmit={handleEmailLogin} className="space-y-3">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Login with Email
        </button>
      </form>

      <div className="text-center">
        <span className="text-gray-500 text-sm">or</span>
      </div>

      <button
        onClick={handleGoogleLogin}
        className="w-full bg-red-600 text-white py-2 rounded"
      >
        Sign in with Google
      </button>

      <div className="flex justify-center">
          <Link className="underline text-blue-500" to={"/signup"}>Create New Account</Link>
      </div>

      {error && <p className="text-red-500 text-sm mb-1">{error}</p>}
    </div>
  );
};

export default SigninForm;