import express, { Application} from "express";
import movieRoutes from "./routes/movie.route";
import { connectDB } from "./config/db";
const app: Application = express();
app.use(express.json());
let port: number = 3008;
connectDB()
app.use("/movies", movieRoutes);

app.listen(port, () => console.log(`express server listening on port ${port}`));