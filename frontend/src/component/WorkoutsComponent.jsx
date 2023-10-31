import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { WORKOUT } from "../utils/endpoints"
import { toast } from "react-toastify"
import { Col, Row } from "react-bootstrap"
import AuthNav from "./AuthNav"

const WorkoutsComponent = () => {
  const navigate = useNavigate()
  const user = JSON.parse(sessionStorage.getItem("userInfo"))
  const [workoutPlans, setWorkoutPlans] = useState("");
  const [isLoading, setIsLoading] = useState(true)

  const getUserProfile = async () => {
    if (!user) {
      navigate("/login")
      toast.warning("Please Login!")
    } else {
      try {
      setIsLoading(true)
        const response = await axios.get(WORKOUT, { withCredentials: true })
        console.log("Response data:", response.data) 
        if (response && response.data) {
          const { workouts } = response.data
          console.log("Workouts:", workouts) 
          setWorkoutPlans(workouts.length > 0 ? workouts : null)
        }
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching workout plans:", error)
      }
    }
  }

  useEffect(() => {
    getUserProfile()
  }, []) 

  return (
    <div>
      <AuthNav />
      <h1 className="text-center pt-5">Workouts</h1>
      <Row>
        {workoutPlans && workoutPlans.length > 0 ? (
          <>
            {workoutPlans.map(plan => (
              <Row key={plan._id}>
                <Col>
                  <p>{plan.name}</p>
                  <p>{plan.description}</p>
                  <p>{plan.sets}</p>
                  <p>{plan.weightPerSet}</p>
                  <p>{plan.repetitions}</p>
                  <p>{new Date(plan.dueDate).toLocaleDateString("en-US")}</p>
                </Col>
              </Row>
            ))}
          </>
        ) : isLoading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <p className="text-center mt-5">You have nothing planned for today</p>
        )}
      </Row>
    </div>
  )
}

export default WorkoutsComponent
