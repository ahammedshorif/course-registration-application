// src/auth/RequireAuth.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase";

function RequireAuth({ children }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function checkUser() {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        navigate("/signin"); // 🔁 Redirect if not logged in
      } else {
        setLoading(false); // ✅ Allow access
      }
    }

    checkUser();
  }, [navigate]);

  if (loading) return <div>Loading...</div>;
  return children;
}

export default RequireAuth;
