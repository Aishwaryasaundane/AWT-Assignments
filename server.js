const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

// /hello endpoint

app.get("/hello", (req, res) => {

res.send("Hello, Postman!");

});

// /greet/:name endpoint

app.get("/greet/:name", (req, res) => {

const { name } = req.params;

res.send(`Hello, ${name}!`);

});

// /calculate endpoint

app.post("/calculate", (req, res) => {

const { num1, num2 } = req.body;

if (num1 === undefined || num2 === undefined) {

return res

.status(400)

.json({

error: "Both num1 and num2 are required in the request body.",

});

}

const result = num1 + num2;

res.json({ result });

});

app.listen(3000, () => {

console.log("Server is running on http://localhost:3000");

});