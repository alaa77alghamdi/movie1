import prisma from "../config/db";
import { Request, Response } from "express";

export const addMovie = async (req: Request, res: Response) => {
  try {
    const moviee = req.body;

    await prisma.movie.create({
      data: moviee,
    });

    return res.json({
      message: "add moviee",
    });
  } catch (error) {
    console.log(error);
  }
};
