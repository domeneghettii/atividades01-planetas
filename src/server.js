import express from "express"
import { config } from "dotenv"

import routes from "./routes/index.routes.js"

config();

const port = process.env.PORT || 4000

const app = express();
app.use(express.json());
app.use(routes);

app.get("/Filmes", (req, res) => {
    return res.status(200).send(filmesMarcantes)
});

app.listen(port, () =>{
    console.log(`✌ Server started on http://localhost:${port}`)
});