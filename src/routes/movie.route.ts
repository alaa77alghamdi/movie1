import express from "express";
import { MovieGener, addMovie, deleteMovie, find_name, getMovies, updateMovie } from "../controller/movie.controller";
import validate from "../middleware/validate";
import { MovieType } from "../zod.schema/zod.movie";
let router = express.Router();


router.post("/a",validate(MovieType),addMovie)
router.get("/",getMovies)
router.delete('/:id', deleteMovie)
router.put('/:id', updateMovie)
router.get('/:name', find_name)
router.get('/ge/:gener', MovieGener)




export default router;