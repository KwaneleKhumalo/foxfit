import mongoose from "mongoose"

const Schema = mongoose.Schema

const subscriptionSchema = new Schema({
  subscriptionType: {
    type: String,
    trim: true,
    required: [true, "Please select your desired plan."],
    unique: true
  },
  description: {
    type: String,
    required: [true, "Please provide plan description."]
  },
  price: {
    type: Number,
    required: [true, "Please provide price for the plan."]
  }, 
  averageRating: {
    type: Number, 
    default: 0
  },
  superAdmin: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true })

export default mongoose.model("Subscription", subscriptionSchema)
