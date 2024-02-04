import db from "../config/dbConnect";
import { Response, Request } from "express";
import { handlerHttp } from "../utils/errors";
import { PaymentMethodInput } from "../db/models/paymentMethod";

export const getPaymentMethod = async(_req: Request, res: Response): Promise<Response> => {
  try {
    const findAllPaymentMethods = await db.PaymentMethod.findAll()

    return res.status(200).send({
      status: 200,
      message: "ok",
      paymentMethod: findAllPaymentMethods
    })
  } catch (error: any) {
    return handlerHttp(res, error)
  }
}

export const createPaymentMethod = async(req: Request, res: Response): Promise<Response> => {
  try {
    const { name, PaymentId }: PaymentMethodInput = req.body

    const newPaymentMethod = await db.PaymentMethod.create({
      name,
      PaymentId
    })

    return res.status(200).send({
      status: 200,
      message: "PaymentMethod was created correctly",
      paymentMethod: newPaymentMethod
    })
  } catch (error: any) {
    return handlerHttp(res, error)
  }
}

export const updatePaymentMethod = async(req: Request, res: Response) => {
  try {
    const { id, name, PaymentId }: PaymentMethodInput = req.body
    
    const checkPaymentMethod = await db.PaymentMethod.findOne({
      where: { id }
    })

    if (name) checkPaymentMethod.name = name
    if (PaymentId) checkPaymentMethod.PaymentId = PaymentId

    const updatePaymentMethod = await checkPaymentMethod.save()

    return res.status(200).send({
      status: 200,
      message: "PaymentMethods was update correctly",
      paymentMethod: updatePaymentMethod
    })
  } catch (error:any) {
    return handlerHttp(res, error)
  }
}

export const deltePaymentMethod = async(req: Request, res: Response) => {
  try {
    const { id } = req.body

    const deletePaymentMethod = await db.PaymentMethod.destroy({
      where: { id }
    })

    if (deletePaymentMethod !== 1) {
      return res.status(400).send({
        status: 400,
        message: "Category already exists"
      })
    }

    return res.status(200).send({
      status: 200,
      message: "PaymentMethods was delete correctly",
    })
  } catch (error: any) {
    return handlerHttp(res, error)
  }
}