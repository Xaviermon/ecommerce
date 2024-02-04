import db from "../config/dbConnect";
import { Request, Response } from "express";
import { handlerHttp } from "../utils/errors";
import { OrderInput } from "../db/models/order"; 

export const getOrder = async(_req: Request, res: Response): Promise<Response> => {
  try {
    const findAllOrders = await db.Order.findAll()

    return res.status(200).send({
      status: 200,
      message: "ok",
      order: findAllOrders
    })
  } catch (error: any) {
    return handlerHttp(res, error);
  }
}

export const createOrder = async(req: Request, res: Response): Promise<Response> => {
  try {
    const { date_order, total, state, UserId }: OrderInput = req.body

    const checkOrder = await db.Order.findOne({
      where: { date_order, UserId }
    })

    if (checkOrder) {
      return res.status(400).send({
        status: 200,
        message: "Order already exists"
      })
    }

    const newOrder = await db.Order.create({
      date_order,
      total,
      state,
      UserId
    })

    return res.status(200).send({
      status: 200,
      message: "Order was created correctly",
      order: newOrder
    })
  } catch (error: any) {
    return handlerHttp(res, error)
  }
}

export const updateOrder = async(req: Request, res: Response): Promise<Response> => {
  try {
    const { id, date_order, total, state, UserId }: OrderInput = req.body

    const checkOrder = await db.Order.findOne({
      where: { id }
    })

    if (date_order) checkOrder.date_order = date_order
    if (total) checkOrder.total = total
    if (state) checkOrder.state = state
    if (UserId) checkOrder.UserId = UserId

    const updateOrder = await checkOrder.save()

    return res.status(200).send({
      status: 200,
      message: "Order was update correctly",
      order: updateOrder
    })
  } catch (error: any) {
    return handlerHttp(res, error)
  }
}

export const deleteOrder = async(req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.body

    const deleteOrder = await db.Order.findOne({
      where: { id }
    })

    if (deleteOrder !==1 ) {
      return res.status(400).send({
        status: 200,
        message: "Order already exists"
      })
    }

    return res.status(200).send({
      status: 200,
      message: "Order was delete correctly"
    })
  } catch (error: any) {
    return handlerHttp(res, error)
  }
}

export const getOrderUser = async(req: Request, res: Response) => {
  try {
    const { UserId } = req.body

    const findOrderUser = await db.Order({
      where: { UserId },
      include: [
        {
          model: db.Product
        },
        {
          model: db.User
        },
        {
          model: db.Payment,
          include: {
            model: db.PaymentMethod
          }
        }
      ]
    })

    if (findOrderUser) {
      return res.status(400).send({
        status: 400,
        message: "userId already exists",
      });
    }

    return res.status(200).send({
      status: 200,
      message: "ok",
      userOrder: findOrderUser
    })
  } catch (error: any) {
    return handlerHttp(res, error)
  }
}