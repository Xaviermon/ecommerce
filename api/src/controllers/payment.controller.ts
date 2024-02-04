import db from "../config/dbConnect";
import { Response, Request } from "express";
import { handlerHttp } from "../utils/errors";
import { PaymentInput } from "../db/models/payment";

export const getPayment = async(req: Request, res: Response): Promise<Response> => {
  try {
    const findAllPayment = await db.Payment.findAll({
      include: [
        {
          model: db.PaymentMethod
        }
      ]
    })

    return res.status(200).send({
      status: 200,
      message: "ok",
      payment: findAllPayment
    })
  } catch (error: any) {
    return handlerHttp(res, error)
  }
}

export const createPayment = async(req: Request, res: Response): Promise<Response> => {
  try {
    const { currency, status, transationId, OrderId }: PaymentInput = req.body

    /* agregar logica del pago */

    const newPayment = await db.Payment.create({
      currency,
      status,
      transationId,
      OrderId
    })

    /* 
      agregar metodo de pago usando el controller 
    */

    return res.status(200).send({
      status: 200,
      message: "Payment was created correctly",
      payment: newPayment
    })
  } catch (error: any) {
    return handlerHttp(res, error)
  }
}

export const updatePayment = async(req: Request, res: Response): Promise<Response> => {
  try {
    const { id, status }: PaymentInput = req.body
    const checkPayment = await db.Payment.findOne({
      where: { id }
    })
    if (status) checkPayment.status = status

    const updatePayment = await checkPayment.save()

    return res.status(200).send({
      status: 200,
      message: "Payment was update correctly",
      payment: updatePayment
    })
    
  } catch (error: any) {
    return handlerHttp(res, error)
  }
}