import express from "express";

const app = express();

app.use(express.json())

let user = "avinash";

app.use((req, res, next) => {
    const data = req.body.name
  if (user == data ) {
      res.send('welcome')
} else {
    res.send("login");
}

next();

});

app.get("/", (req, res) => {
  res.send("welcome avinash");
});

app.listen(3000);




// router  middleware 
