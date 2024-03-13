import User from "../models/userModel.js"
import userEnrollment from "../models/userEnrollment.js"
import Workout from "../models/workoutsModel.js"
import subscriptionModel from "../models/subscriptionModel.js"
import getToken from "../utils/jwtAuth.js"
import { populateField, userEnrollmentField } from "../utils/populateFields.js"

// Post Controllers
export const register = async (req, res) => {
  const { email, firstName, lastName, password, selectedPlan } = req.body
  const subscription = await subscriptionModel.findOne({ subscriptionType: selectedPlan })

  const userExists = await User.findOne({ email })

  if (userExists) {
    return res.status(403).json({
      msg: "This user already exists. Please login."
    })
  } else {
    try {
      const user = await User.create({
        email,
        firstName,
        lastName,
        password
      })

      const enrollment = await userEnrollment.create({
        subscriber: user._id,
        subscription: subscription._id,
        startDate: new Date(),
        endDate: new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000)
      })

      if (user && enrollment) {
        getToken(res, user._id)

        // Find the user's enrollment and populate the 'subscription' field
        userEnrollment
          .findOne({ subscriber: user._id })
          .populate("subscription")
          .then(userEnrollment => {
            if (userEnrollment) {
              const subscriptionInfo = userEnrollment

              const { startDate, endDate } = subscriptionInfo
              const { subscriptionType, price } = subscriptionInfo.subscription

              return res.status(200).json({
                msg: "Logged In Successfully!",
                data: {
                  id: user._id,
                  email: user.email,
                  firstName: user.firstName,
                  lastName: user.lastName,
                  isPaid: user.isPaid,
                  createdAt: user.createdAt,
                  membershipType: subscriptionType,
                  membershipCost: price,
                  subscriptionStart: startDate,
                  renewalDate: endDate,
                  enrollment
                }
              })
            } else {
              console.log("No Subscription")
            }
          })
          .catch(e => {
            console.log(e)
          })
      } else {
        return res.status(403).send("Failed to create a user.")
      }
    } catch (err) {
      const errorMessage = await Object.values(err.errors)[0].properties.message
      res.status(403).send(errorMessage ? `Error! ${errorMessage}.` : "Account not created. Please check your values and try again.")
      console.log(err)
    }
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email }).populate("workoutPlans")

  if (!user) {
    return res.status(404).send("This user doesn't exist. Please create an account.")
  }

  if (user && (await user.matchPassword(password))) {
    const userId = user._id
    getToken(res, user._id)

    const workouts = await populateField(Workout, userId)
    const enrollments = await userEnrollmentField(userEnrollment, userId)

    return res.status(200).json({
      msg: "Logged In Successfully!",
      data: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        isPaid: user.isPaid,
        createdAt: user.createdAt,
        enrollment: enrollments,
        workoutPlans: workouts
      }
    })
  } else {
    res.status(403).send("Invalid Credentials. Please try again!")
  }
}

export const logout = (req, res) => {
  res.cookie("authentication", "", { expires: new Date(0), httpOnly: true })
  res.status(200).send("User Logged Out.")
}

// Get Controllers
export const profile = async (req, res) => {
  const user = await req.user

  userEnrollment
    .findOne({ subscriber: user._id })
    .populate("subscription")
    .then(userEnrollment => {
      if (userEnrollment) {
        const subscriptionInfo = userEnrollment

        const { startDate, endDate } = subscriptionInfo
        const { subscriptionType, price } = subscriptionInfo.subscription
        res.status(200).json({
          userData: {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            isPaid: user.isPaid,
            createdAt: user.createdAt,
            membershipType: subscriptionType,
            membershipCost: price,
            subscriptionStart: startDate,
            renewalDate: endDate
          }
        })
      }
    })
}

export const editUser = async (req, res) => {
  const user = await User.findById(req.user._id)

  if (!user) {
    res.status(401)
    throw new Error("Something went wrong. Unable to update user.")
  } else {
    user.firstName = req.body.firstName || user.firstName
    user.lastName = req.body.lastName || user.lastName
    user.email = req.body.email || user.email

    if (req.body.password) {
      user.password = req.body.password
    }
    const updateUser = await user.save()

    res.status(200).json({
      msg: "Account Updated Successfully!",
      data: {
        firstName: updateUser.firstName,
        lastName: updateUser.lastName,
        email: updateUser.email
      }
    })
  }
}

export const deleteUsers = (req, res) => {
  res.status(200).json({
    msg: "Delete User"
  })
}

export const getUsers = (req, res) => {
  res.status(200).json({
    msg: "Get All Users"
  })
}

export const getSingleUser = (req, res) => {
  res.status(200).json({
    msg: "Get Single User"
  })
}
