import {Router} from "express"

const router= Router()



router.get("/",(req,res)=>{
    res.json({
        mag: "advisor route"
    })
})


export const advisorRoute = router;