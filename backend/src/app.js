import express from "express";
import { PORT } from "./config/enviroment.js";

import auth from "./routes/auth.routes.js";
import main from "./routes/main.routes.js";

const app = express();
const SERVERPORT = PORT || 3000;

app.use(auth)
app.use(main)

app.listen(SERVERPORT, ()=>{
    console.log(`http://localhost:${SERVERPORT}`);
})