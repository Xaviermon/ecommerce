import db from "../config/dbConnect";
import { Response, Request } from "express";
import { handlerHttp } from "../utils/errors";
import { verified, encrypt } from "../utils/hass";
import { generateToken } from "../utils/jwt";
import { UserLogin } from "../types/User.type";
import { UserInput } from "../db/models/user";

export const getUser = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  try {
    const users = await db.User.findAll();

    return res.status(200).send({
      status: 200,
      message: "ok",
      users: users,
    });
  } catch (error: any) {
    return handlerHttp(res, error);
  }
};
export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, lastName, email, password }: UserInput = req.body;

    // verifica si el usuario existe
    const checkUser = await db.User.findOne({
      where: { email },
    });

    if (checkUser) {
      return res.status(400).send({
        status: 400,
        message: "User already exists",
      });
    }

    // se crea al nuevo usuario
    const passHash = await encrypt(password);
    const createNewUser = await db.User.create({
      name,
      lastName,
      email,
      password: passHash,
    });

    return res.status(200).send({
      status: 200,
      message: "User was created correctly",
      user: createNewUser,
    });
  } catch (error: any) {
    return handlerHttp(res, error);
  }
};

export const loginUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password }: UserLogin = req.body;

    const checkIs = await db.User.findOne({
      where: { email },
    });
    if (!checkIs) {
      return res.status(400).send({
        status: 400,
        message: "NOT_FOUND_USER",
      });
    }

    const passwordHash = checkIs.password;
    const isCorrect = await verified(password, passwordHash);

    if (!isCorrect) {
      return res.status(400).send({
        status: 400,
        message: "NOT_FOUND_USER",
      });
    }

    const token = generateToken(checkIs.id);
    const data = {
      token,
      user: checkIs,
    };

    return res.status(200).send({
      status: 200,
      message: "Login correct",
      user: data,
    });
  } catch (error: any) {
    return handlerHttp(res, error);
  }
};

export const userPut = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id, name, lastName, email, password }: UserInput = req.body;

    const checkUser = await db.User.findOne({
      where: { id },
    });

    const passwordHash = encrypt(password);

    if (name) checkUser.name = name;
    if (lastName) checkUser.lastName = lastName;
    if (email) checkUser.email = email;
    if (password) checkUser.password = passwordHash;
    const updateUser = await checkUser.save();

    return res.status(200).send({
      status: 200,
      message: "User was update correctly",
      user: updateUser,
    });
  } catch (error: any) {
    return handlerHttp(res, error);
  }
};

export const disableUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const userId: string = req.body.id;

    const user = await db.User.findByPk(userId);

    if (!user) {
      return res.status(404).json({
        status: 404,
        message: "User not found",
      });
    }

    await user.update({
      state: "disable",
    });

    return res.status(200).json({
      status: 200,
      message: "User disable successfully",
      user: user,
    });
  } catch (error: any) {
    return handlerHttp(res, error);
  }
};
