import express from "express";

import router from "./router/router.js";

const app = express();

// app.use(express.json());

app.use('/user', router);

app.listen(2000,()=>{
    console.log('server running')
});
