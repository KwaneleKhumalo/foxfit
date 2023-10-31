import mongoose from "mongoose"

const Schema = mongoose.Schema

const userEnrollment = new Schema({
  subscriber: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  },
  subscription: {
    type: mongoose.Types.ObjectId,
    ref: "Subscription"
  },
  startDate: Date,
  endDate: Date
})

export default mongoose.model("userEnrollment", userEnrollment)
