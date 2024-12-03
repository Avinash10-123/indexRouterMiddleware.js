import express from 'express'
import router from './router/userRouter.js'

const app= express()

app.use(express.json());

app.use('/users',router)

app.listen(3500)



