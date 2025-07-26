import Signup from "./pages/Signup"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StudentDashboard from "./pages/StudentDashboard";
import RequireAuth from "./auth/RequireAuth";
import Signin from "./pages/Signin"


function App() {

  return(
    <div>
       <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route
              path="/dashboard"
              element={
              <RequireAuth>
                  <StudentDashboard />
              </RequireAuth>
            }/>

       </Routes>
    </div>
  )
  
}

export default App
