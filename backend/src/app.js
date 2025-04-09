import express from "express";
import connectInDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import cors from "cors";

const connect = await connectInDatabase();

connect.on("error", (error) => {
    console.error("Connection error", error);
});
connect.once("open", () => {
    console.log("Sucessfully connected to database!")
});

const app = express();
app.use(cors({origin: "*"}))
routes(app);

export default app
