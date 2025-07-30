import express from "express"
import cors from "cors"
import { studentRoute } from "./router/studentRoute.js";
import { advisorRoute } from "./router/advisorRoute.js";

const app = express();
const PORT= process.env.PORT || 3000;

app.use(cors())


app.use("/student", studentRoute)
app.use("/advisor", advisorRoute)





app.listen(PORT,()=>{
    console.log(`server lestening on ${PORT}`);
    
})