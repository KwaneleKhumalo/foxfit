import Subscription from "../models/subscriptionModel.js"

export const createSubscriptionPlan = async (req, res) => {
  req.body.user = req.user._id.toString()

  const subscriptionPlan = await Subscription.create(req.body)
  res.status(200).json({ subscriptionPlan })
}

export const getSubscriptionPlans = async (req, res) => {
  const subscriptionPlans = await Subscription.find({})

  if (subscriptionPlans.length < 1) {
    res.status(200).json({ msg: "No plans found, please create a plan." })
  } else {
    res.status(200).json({ subscriptionPlans })
  }
}

export const getSingleSubscriptionPlan = async (req, res) => {
  const { subscriptionId } = req.params
  const subscriptionPlan = await Subscription.findOne({ _id: subscriptionId })

  if (!subscriptionPlan) {
    res.status(404).send("Plan not found!")
  } else {
    res.status(200).json({ subscriptionPlan })
  }
}

export const updateSubscriptionPlan = async (req, res) => {
  const { subscriptionId } = req.params
  const subscriptionPlan = await Subscription.findOneAndUpdate({ _id: subscriptionId }, req.body, { new: true, runValidators: true })

  if (!subscriptionPlan) {
    res.status(404).send("Plan not found!")
  } else {
    res.status(200).json({ subscriptionPlan })
  }
}

export const deleteSubscriptionPlans = async (req, res) => {
  const subscriptionPlans = await Subscription.deleteMany({})

  if (!subscriptionPlans) {
    res.status(404).send("Plan not found!")
  } else {
    res.status(200).json("Plans deleted successfully!")
  }
}

export const deleteSingleSubscriptionPlan = async (req, res) => {
  const { subscriptionId } = req.params
  const subscriptionPlan = await Subscription.deleteOne({ _id: subscriptionId })

  if (!subscriptionPlan) {
    res.status(404).send("Plan not found!")
  } else {
    res.status(200).send("Subscription Plan Deleted Successfully.")
  }
}
