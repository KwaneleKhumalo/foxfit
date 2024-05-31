import mongoose from "mongoose"

const { Schema } = mongoose

const WorkoutSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "This field is required."]
    },
    description: {
      type: String,
      required: [true, "This field is required."]
    },
    sets: {
      type: Number,
      default: 3,
      required: [true, "This field is required."]
    },
    repetitions: {
      type: Number,
      default: 12,
      required: [true, "This field is required."]
    },
    dueDate: {
      type: Date,
      default: Date.now
    },
    weightPerSet: {
      type: Number,
      default: 0
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
)

const Workout = mongoose.model("Workout", WorkoutSchema)
export default Workout
