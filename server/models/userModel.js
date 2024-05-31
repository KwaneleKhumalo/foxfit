import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const { Schema } = mongoose

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      unique: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please use a valid email address"]
    },
    firstName: {
      type: String,
      required: [true, "First Name is required"],
      match: [/^[a-zA-Z]+$/, "Invalid Value. Please enter valid characters."]
    },
    lastName: {
      type: String,
      required: [true, "Last Name is required"],
      match: [/^[a-zA-Z]+$/, "Invalid Value. Please enter valid characters."]
    },
    password: {
      type: String,
      required: [true, "password is required"],
      default: null
    },
    isSuperAdmin: {
      type: Boolean,
      default: false
    },
    isPaid: {
      type: Boolean,
      default: true
    },
    verificationToken: String,
    isVerified: {
      type: Boolean,
      default: false
    },
    dateVerified: Date,
    subscriptions: {
      type: Schema.Types.ObjectId,
      ref: "Subscription"
    },
    workoutPlans: [
      {
        type: Schema.Types.ObjectId,
        ref: "Workout"
      }
    ]
  },
  { timestamps: true }
)

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next()
  const salt = await bcrypt.genSalt(12)
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.matchPassword = async function (inputPassword) {
  return await bcrypt.compare(inputPassword, this.password)
}

const User = mongoose.model("User", UserSchema)

export default User
