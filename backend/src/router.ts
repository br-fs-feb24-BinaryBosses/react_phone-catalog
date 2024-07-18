import { Router } from "express";
import productsRouter from "./services/products/controller";
import usersRouter from "./services/users/controller";
import ordersRouter from "./services/orders/controller";
import homepageRouter from "./services/homepage/controller";

const router = Router();

router.use("/products", productsRouter);
router.use("/users", usersRouter);
router.use("/orders", ordersRouter);
router.use("/homepage", homepageRouter);

export default router;
