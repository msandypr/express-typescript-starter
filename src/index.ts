// Author: Muhammad Sandy Putra Riyadi ~ @msandypr
import express, { Express, Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.static('public'));
app.get("/applicationName", (req: Request, res: Response) => {
    try {
        const appName = process.env.APPLICATION_NAME;
        res.json({ applicationName: appName });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});
app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});