import { Router } from "express"
const paymentRoute = Router();
import {payment} from "../controllers/paymentController.js";
import { protect } from "../middleware/protectMiddleware.js";

paymentRoute.route('/').post(protect, payment);

export default paymentRoute;