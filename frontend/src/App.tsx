import {createBrowserRouter,RouterProvider,} from "react-router";
import Home from "./pages/Home";
import Signup from "./pages/Signup";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    // loader: loadRootData,
  },
  {
    path: "/signup",
    element: <Signup/>,
    // loader: loadRootData,
  },
  {
    path: "/",
    element: <Home/>,
    // loader: loadRootData,
  },
]);


function App() {
  

  return (
    <>
    
     <RouterProvider router={router} />
      
    </>
  )
}

export default App
