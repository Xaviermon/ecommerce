import db from "../config/dbConnect";
import { Request, Response } from "express";
import { handlerHttp } from "../utils/errors";
import { OrderProductInput } from "../db/models/orderProduct";

export const getOrderProduct = async(_req: Request, res: Response): Promise<Response> => {
  try {
    const findAllOrderProduct = await db.OrderProduct.findAll()

    return res.status(200).send({
      status: 200,
      message: "ok",
      orderProduct: findAllOrderProduct
    })
  } catch (error: any) {
    return handlerHttp(res, error)
  }
}

export const createOrderProduct = async(req: Request, res: Response): Promise<Response> => {
  try {
    const { amount, OrderId, ProductId }: OrderProductInput = req.body

    const newOrderProduct = await db.OrderProduct.create({
      amount,
      OrderId,
      ProductId
    })

    return res.status(200).send({
      status: 200,
      message: "OrderProduct was created correctly",
      orderProduct: newOrderProduct
    })
  } catch (error: any) {
    return handlerHttp(res, error)
  }
}

export const deleteOrderProduct = async(req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.body

    const deleteOrderProduct = await db.OrderProduct.destroy({
      where: { id }
    })

    if (deleteOrderProduct !== 1) {
      return res.status(400).send({
        status: 400,
        message: "Category already exists"
      })
    }

    return res.status(200).send({
      status: 200,
      message: "OrderProduct was delete correctly"
    })
  } catch (error: any) {
    return handlerHttp(res, error)
  }
}