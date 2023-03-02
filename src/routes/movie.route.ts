import express from "express";
import { addMovie } from "../controller/movie.controller";
let router = express.Router();


router.post("/a",addMovie)




export default router;