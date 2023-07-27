import express, { Express, Request, Response } from 'express';
import stream from 'express-stream';


const app: Express = express();
app.set("view engine", "ejs");

const port = 8080;


stream.streamBefore('header');

const homepageHandler = (req: Request, res: Response) => {
  setTimeout(() => {
    res.render("pages/index");
  }, 5000);
}

app.get('/', stream.stream(), homepageHandler);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});