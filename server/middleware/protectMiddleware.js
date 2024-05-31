import jwt from "jsonwebtoken"
import User from "../models/userModel.js"

export const protect = async (req, res, next) => {
  let token = req.cookies.authentication

  if (!token) {
    res.status(401).send("Not Authorized.")
  } else {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      const user = await User.findById(decoded.userId).select("-password")
      req.user = user
      return next()
    } catch (error) {
      res.status(500).send("There was an error with your request. If this problem persists, please reach out to support.")
    }
  }
}

export const adminProtect = async (req, res, next) => {
  const user = req.user

  if (user && user.isSuperAdmin === true) {
    next()
  } else {
    res.status(401).json({ msg: "Not Authorized" })
  }
}
