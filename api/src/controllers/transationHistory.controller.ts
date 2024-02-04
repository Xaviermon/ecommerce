import db from "../config/dbConnect";
import { Request, Response } from "express";
import { handlerHttp } from "../utils/errors";
import { TransationHistoryInput } from "../db/models/transationHistory";

export const getTransationHistory = async(req: Request, res: Response): Promise<Response> => {
  try {
    const findAllTransationHistory = await db.TransationHistory.findAll()

    return res.status(200).send({
      status: 200,
      message: "ok",
      transationHistory: findAllTransationHistory
    })
  } catch (error: any) {
    return handlerHttp(res, error)
  }
}

export const createTransationHistory = async(req: Request, res: Response) => {
  try {
    const { description, UserId }: TransationHistoryInput = req.body

    const newTransationHistory = await db.TransationHistory.create({
      description,
      UserId
    })

    return res.status(200).send({
      status: 200,
      message: "TransationHistory was created correctly",
      transationHistory: newTransationHistory
    })
  } catch (error: any) {
    return handlerHttp(res, error)
  }
}

export const updateTransationHistory = async(req: Request, res: Response) => {
  try {
    const { id, description, UserId }: TransationHistoryInput = req.body
    
    const checkTransationHistory = await db.TransationHistory.findOne({
      where: { id }
    })

    if (description) checkTransationHistory.description = description
    if (UserId) checkTransationHistory.UserId = UserId

    const updateTransationHistory = await checkTransationHistory.save()

    return res.status(200).send({
      status: 200,
      message: "TransationHistory was update correctly",
      transationHistory: updateTransationHistory
    })
  } catch (error: any) {
    return handlerHttp(res, error)
  }
}

export const deleteTransationHistory = async(req: Request, res: Response) => {
  try {
    const { id } = req.body

    const deleteTransationHistory = await db.TransationHistory.destroy({
      where: { id }
    })

    if (deleteTransationHistory !== 1) {
      return res.status(400).send({
        status: 400,
        message: "Category already exists"
      })
    }

    return res.status(200).send({
      status: 200,
      message: "TransationHistory was delete correctly"
    })
  } catch (error: any) {
    return handlerHttp(res, error)
  }
}