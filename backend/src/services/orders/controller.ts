import express, { Request } from "express";
import StandardResponse from "../../utils/StandardResponse";
import OrdersService from "./services";
import authMiddleware from "../../middlewares/authentication";

const ordersRouter = express.Router();
const ordersService = new OrdersService();

ordersRouter.post(
  "/insertOrder",
  authMiddleware,
  async (req: Request & { userId?: string }, res) => {
    const { userId, status, token } = req.body;

    if (!userId || !status || !token) {
      return res.status(404).json({ message: "Fields can't be empty!" });
    }
    try {
      const createdOrder = await ordersService.createOrder({
        status: "active",
        userId: req.userId!,
      });

      return StandardResponse.responseWrapper({
        message: "ok",
        res,
        data: createdOrder,
        statusCode: 200,
      });
    } catch (error) {
      return res.status(500).json({ mesage: "Erro ao criar carrinho" });
    }
  }
);

ordersRouter.post(
  "/insertItemInOrder",
  authMiddleware,
  async (req: Request & { userId?: string }, res) => {
    const { orderId, productId, quantity } = req.body;

    if (!orderId || !productId || !quantity) {
      return res.status(404).json({ message: "Fields can't be empty" });
    }

    try {
      const itemInserted = await ordersService.insertItemInOrder({
        orderId,
        productId,
        quantity,
      });

      return StandardResponse.responseWrapper({
        message: "ok",
        res,
        data: itemInserted,
        statusCode: 200,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ mesage: "Erro ao adicionar item ao carrinho" });
    }
  }
);

ordersRouter.get(
  "/getOrders",
  authMiddleware,
  async (req: Request & { userId?: string }, res) => {
    const { userId } = req.body;

    if (!userId) {
      return res.status(404).json({ message: "Order not found!" });
    }

    try {
      const allOrderFromUser = await ordersService.getAllOrders(userId);

      return StandardResponse.responseWrapper({
        message: "ok",
        res,
        data: allOrderFromUser,
        statusCode: 200,
      });
    } catch (error) {
      return res.status(500).json({ mesage: "Erro ao buscar ordem" });
    }
  }
);

ordersRouter.delete(
  "/deleteOrder/:id",
  authMiddleware,
  async (req: Request & { userId?: string }, res) => {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Invalid Order ID format" });
    }

    try {
      const deletedOrder = await ordersService.deleteOrder(id);

      return StandardResponse.responseWrapper({
        message: "Order deleted successfully",
        res,
        data: deletedOrder,
        statusCode: 204,
      });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao deletar carrinho" });
    }
  }
);

ordersRouter.delete(
  "/deleteOrderItem/:id",
  authMiddleware,
  async (req: Request & { userId?: string }, res) => {
    const { id } = req.params;

    if (!id) {
      return res
        .status(404)
        .json({ message: "Necessário passar o id do item a ser deletado!" });
    }

    try {
      const deletedItem = await ordersService.deleteOrderItem(id);
      return StandardResponse.responseWrapper({
        message: "Order item deleted successfully",
        res,
        data: deletedItem,
        statusCode: 204,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro ao deletar item do carrinho" });
    }
  }
);

ordersRouter.patch(
  "/updateOrderStatus/:id",
  authMiddleware,
  async (req: Request & { userId?: string }, res) => {
    const { id } = req.params;
    const { status } = req.body;

    // Validate status
    if (!status || !["active", "closed"].includes(status)) {
      return res
        .status(400)
        .json({ message: "Field 'status' should not be null" });
    }

    try {
      const updatedOrder = await ordersService.updateOrder(id, {
        status,
      });

      return StandardResponse.responseWrapper({
        message: "Order status updated successfully",
        res,
        data: updatedOrder,
        statusCode: 200,
      });
    } catch (error) {
      return res.status(500).json({ mesage: "Erro ao atualizar o carrinho" });
    }
  }
);

ordersRouter.patch(
  "/updateOrderItem/:id",
  authMiddleware,
  async (req: Request & { userId?: string }, res) => {
    const { id } = req.params;
    const { quantity } = req.body;

    if (!quantity) {
      return res
        .status(404)
        .json({ message: "Should have at least 1 quantity to update" });
    }

    try {
      const updatedItem = await ordersService.updateOrderItem(id, { quantity });

      return StandardResponse.responseWrapper({
        message: "Order status updated successfully",
        res,
        data: updatedItem,
        statusCode: 200,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro ao atualizar o item do carrinho" });
    }
  }
);

export default ordersRouter;
