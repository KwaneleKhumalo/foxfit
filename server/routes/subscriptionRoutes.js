import { Router } from 'express'
import { createSubscriptionPlan, deleteSingleSubscriptionPlan, deleteSubscriptionPlans, getSingleSubscriptionPlan, getSubscriptionPlans, updateSubscriptionPlan } from '../controllers/subscriptionController.js'
import { adminProtect, protect } from "../middleware/protectMiddleware.js"


const subscriptionRoute = Router()

subscriptionRoute.route("/").get(getSubscriptionPlans).post(protect, adminProtect, createSubscriptionPlan).delete(protect, adminProtect, deleteSubscriptionPlans)

subscriptionRoute.route("/:subscriptionId").get(getSingleSubscriptionPlan).delete(protect, adminProtect, deleteSingleSubscriptionPlan).patch(protect, adminProtect, updateSubscriptionPlan)

export default subscriptionRoute