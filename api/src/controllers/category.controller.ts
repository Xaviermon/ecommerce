import db from "../config/dbConnect";
import { Request, Response } from "express";
import { handlerHttp } from "../utils/errors";
import { CategoryInput } from "../db/models/category";

export const getCategory = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const findAllCategory = await db.Category.findAll();

    return res.status(200).send({
      status: 200,
      message: "ok",
      category: findAllCategory,
    });
  } catch (error: any) {
    return handlerHttp(res, error);
  }
};

export const createCategory = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, description }: CategoryInput = req.body;

    const checkCategory = await db.Category.findOne({
      where: { name },
    });
    if (checkCategory) {
      return res.status(400).send({
        status: 400,
        message: "Category already exists",
      });
    }

    const newCategory = await db.Category.create({
      name,
      description,
    });

    return res.status(200).send({
      status: 200,
      message: "User was created correctly",
      category: newCategory,
    });
  } catch (error: any) {
    return handlerHttp(res, error);
  }
};

export const updateCategory = async(req: Request, res:Response): Promise<Response> => {
  try {
    const { id, name, description }: CategoryInput = req.body

    const checkCategory = await db.Category.findOne({
      where: {id}
    })

    if(name) checkCategory.name = name
    if(description) checkCategory.description = description

    const updateCategory = await checkCategory.save()

    return res.status(200).send({
      status: 200,
      message: "User was update correctly",
      category: updateCategory,
    });
  } catch (error: any) {
    return handlerHttp(res, error)
  }
}