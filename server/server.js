import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import cookieParser from 'cookie-parser';
import cors from 'cors'
import userRouter from './routes/userRoutes.js';
import runApp from './utils/runApp.js';
import subscriptionRoute from './routes/subscriptionRoutes.js'
import paymentRoute from './routes/paymentRoute.js';
import workoutRouter from './routes/WorkoutPlansRoute.js';

const app = express();
const port = process.env.PORT || 4000

app.use(
  cors({
    origin: "http://localhost:3000", 
    credentials: true
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());




//This route will need to be protected
app.get('/', (req, res) => {
  res.send('connected!')
})

app.use("/api/v1/users", userRouter)
app.use('/api/v1/subscription', subscriptionRoute)
// app.use('/api/v1/subscription/payment', paymentRoute)
app.use("/api/v1/workouts", workoutRouter)


runApp(app, port)