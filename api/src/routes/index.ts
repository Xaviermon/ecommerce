import { Router } from "express";
import userRouter from "./user.router";
import productRouter from "./product.router";
import orderRouter from "./order.router";
import orderProductRouter from "./orderProduct.router";
import imageRouter from "./image.router";
import paymentMethodRouter from "./paymentMethod.router";
import paymentRouter from "./payment.router";
import transationHistoryRouter from "./transationHistory.router";
import categoryRouter from "./category.router";

const router = Router()

router.use("/", userRouter)
router.use("/", productRouter)
router.use("/", orderRouter)
router.use("/", orderProductRouter)
router.use("/", imageRouter)
router.use("/", paymentRouter)
router.use("/", paymentMethodRouter)
router.use("/", transationHistoryRouter)
router.use("/", categoryRouter)

export default router