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


export const getMovies = async (req: Request, res: Response) => {

    try {
      const movies = await prisma.movie.findMany();
    
    
    res.json(movies)
    }


      catch (error) {

        res.send(error);

      }
}



export const deleteMovie = async (req: Request, res: Response) => {
    try{
        const {id} = req.params
         await prisma.movie.delete({
            where:{
                id: id
            }
        })
        res.json({
            message: "The movie is deleted"
        })
    }catch(e){
        res.json(e)
    }

}


export const updateMovie = async (req: Request, res: Response) => {
try{
    const {id} = req.params;
    const movie = req.body;
    await prisma.movie.update({
    where:{
        id: id
    },
    data: movie
    
    
}) 

res.json({"message": "The movie is updated"})


}
catch(e){
    res.json(e)}
}   
    



export const find_name = async (req: Request, res: Response) => {
    try {
      const { name } = req.params;
      const moviess = await prisma.movie.findMany({
        where: {
          name,
        },
        select: {
          id: true,
          name: true,
          rating: true,
          duration: true,
          created: true,
          gener: true,
        },
      });
      console.log(moviess);
      res.json({ msg: "movie by name", Movies: moviess });
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  };
  
  export const MovieGener = async (req: Request, res: Response) => {
    try {
      const gener = req.params;
      const movie = await prisma.movie.findMany({
        where: {
            gener,
        },
        select: {
          id: true,
          name: true,
          duration: true,
          created: true,
          gener: true,
        },
      });
      console.log(movie);
      res.json({ msg: "movie by gener", movie });
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  };