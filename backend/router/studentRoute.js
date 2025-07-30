import {Router} from "express"

const router = Router()



router.get("/",(req,res)=>{
    res.json({
        mag: "student route"
    })
})







export const studentRoute = router;

