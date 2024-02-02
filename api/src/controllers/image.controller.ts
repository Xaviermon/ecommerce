import db from "../config/dbConnect";
import { Request, Response } from "express";
import { handlerHttp } from "../utils/errors";
import { ImageInput } from "../db/models/image";