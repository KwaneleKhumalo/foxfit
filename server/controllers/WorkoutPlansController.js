import Workout from "../models/workoutsModel.js"
import { populateField } from "../utils/populateFields.js"

export const createWorkout = async (req, res) => {
  try {
    const user = req.user._id.toString() 
    const { name, description, sets, repetitions, weightPerSet } = req.body

    const workoutPlan = await Workout.create({
      user,
      name,
      description,
      sets,
      repetitions,
      weightPerSet
    })

    if (!workoutPlan) {
      return res.status(400).json({ message: "Failed to create workout plan." })
    }

    return res.status(201).json({ message: "Workout plan created successfully.", workoutPlan })
  } catch (error) {
    console.error("Error creating workout plan:", error)
    return res.status(500).json({ message: "Internal Server Error. Please try again!" })
  }
}


export const getUserWorkoutPlan = async (req, res) => {
  try {
    const subscriber = req.user._id.toString()

    const workouts = await populateField(Workout, subscriber)
    
    if (!workouts) {
      return res.status(404).json({ message: "Workouts not found for this user." })
    }

    return res.status(200).json({ workouts })
  } catch (error) {
    console.error("Error fetching workout plans:", error)
    return res.status(500).json({ message: "Internal Server Error. Please try again!" })
  }
}