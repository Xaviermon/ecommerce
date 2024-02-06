import db from "../config/dbConnect";
import { Request, Response } from "express";
import { handlerHttp } from "../utils/errors";
import { ProductInput } from "../db/models/product";

export const getProducts = async (req: Request, res: Response): Promise<Response> => {
  // paginado
  const { page, pageSize, category } = req.query;
  const pageNumber = parseInt(page as string);
  const pageSizeNumber = parseInt(pageSize as string);
  let whereClause = {};

  if (pageNumber <= 0 || pageSizeNumber <= 0) {
    return res.status(400).send({
      status: 400,
      message:
        "Los valores de la página y el tamaño de página deben ser mayores que cero.",
    });
  }

  // filtros recibidos como objeto
  if (typeof category === "object" && category !== null) {
    whereClause = { ...category };
  }

  try {
    const offset = (pageNumber - 1) * pageSizeNumber;
    const findAllProducts = await db.Product.findAll({
      where: whereClause,
      offset,
      limit: pageSizeNumber,
      include: [
        {
          model: db.Category,
        },
        {
          model: db.Image,
        },
      ],
    });

    return res.status(200).send({
      status: 200,
      message: "ok",
      product: findAllProducts,
      offset
    });
  } catch (error: any) {
    return handlerHttp(res, error);
  }
};

export const createProduct = async (req: Request, res: Response): Promise<Response> => {
  const { name, description, price, stock, CategoryId }: ProductInput =
    req.body;
  try {
    const checkProdut = await db.Product.findOne({
      where: { name },
    });
    if (checkProdut) {
      return res.status(400).send({
        status: 400,
        message: "Product already exists",
      });
    }
    const newProduct = await db.Product.create({
      name,
      description,
      price,
      stock,
      CategoryId,
    });
    /* 
      crear imagen con el controller imagen usando el id del producto creado
    */
    const findNewProduct = await db.findOne({
      where: { id: newProduct.id },
      include: [
        {
          model: db.Image,
        },
        {
          model: db.Category,
        },
      ],
    });
    return res.status(200).json({
      status: 200,
      message: "Product was created correctly",
      product: findNewProduct,
    });
  } catch (error: any) {
    return handlerHttp(res, error);
  }
};

export const updateProduct = async (req: Request, res: Response): Promise<Response> => {
  try {
    const {
      id,
      name,
      description,
      price,
      stock,
      CategoryId,
    }: ProductInput = req.body;

    const checkPorduct = await db.Product.findOne({
      where: { id },
      include: [
        {
          model: db.Image,
        },
        {
          model: db.Category,
        },
      ],
    });

    if (name) checkPorduct.name = name;
    if (description) checkPorduct.description = description;
    if (price) checkPorduct.price = price;
    if (stock) checkPorduct.stock = stock;
    if (CategoryId) checkPorduct.CategoryId = CategoryId;

    const updateProduct = await checkPorduct.save();

    /* 
      actualziar imagen con el controller buscando el id del producto
    */

    return res.status(200).send({
      status: 200,
      message: "Product was update correctly",
      product: updateProduct,
    });
  } catch (error: any) {
    return handlerHttp(res, error);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    const deleteProduct = await db.Product.destroy({
      where: { id },
    });

    /* borrar imagen para no saturar la base de datos con el controller de imagen delete */

    if (deleteProduct !== 1) {
      return res.status(400).send({
        status: 400,
        message: "Product already exists",
      });
    }

    return res.status(200).send({
      status: 200,
      message: "Product was delete correctly",
    });
  } catch (error: any) {
    return handlerHttp(res, error);
  }
};
