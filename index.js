// const express = require('express');
// const fs = require("fs");
// const users = require("./MOCK_DATA.json");
// const app = express();
// const port = 8000;

// //Middleware / pLugin
// app.use(express.urlencoded({  extended: false }));

// //Routes
// app.get('/users',(req,res)=>{
//     const html = `
//     <ul>
//         ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
//     </ul>
//     `
//     res.send(html);
// })
// app.get('/', (req,res) => {
//     res.end("Welcome to the Homepage");
// })
// app.get('/api/users',(req,res)=>{
//       res.json(users);
// })

// app.route('/api/users/:id')
// .get((req,res) =>{
//     const id = Number(req.params.id); // Here req.params.id is a string so we have converted it to a number
//     const user = users.find((user => user.id === id));
//     return res.json(user);
// })
// .patch((req,res) => {
//     //Edit user with ID
//     return res.json({ status: "Pending"});
// })
// .delete((req,res) => {
//     //Delete the user with ID
//     return res.json({ status: "Pending"});
// });

// app.post('/api/users',(req,res)=>{
//     const body = req.body;
//     users.push({...body, id:users.length+1});
//     fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
//         return res.json({ status: "Success", id: users.length});
//     }); 
// });
// app.listen(port, () => console.log(`server has started at port: ${port}`));

//Express middleware
// const express = require('express');
// const fs = require("fs");
// const users = require("./MOCK_DATA.json");
// const app = express();
// const port = 8000;

// //Middleware / pLugin & headers
// app.use(express.urlencoded({  extended: false }));

// app.use((req, res, next) =>{
//     // console.log("Hello from middleware 1");
//     // return res.json({ mgs: "Hello from middleware 1" }); 
//     // req.myName = "saarthak";
//     fs.appendFile("log.txt", `\n${Date.now()}: ${req.ip}: ${req.method}: ${req.path}\n`,
//     (err, data) => {
//         next();
//     });


// });

// //Routes
// app.get('/users',(req,res)=>{
//     const html = `
//     <ul>
//         ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
//     </ul>
//     `
//     res.send(html);
// })
// app.get('/', (req,res) => {
//     res.end("Welcome to the Homepage");
// })
// app.get('/api/users',(req,res)=>{
//     // res.setHeader("X-MyName", "Saarthak");//Always add x to custom headers
//     // console.log(req.headers);
//     return res.json(users);
// })

// app.route('/api/users/:id')
// .get((req,res) =>{
//     const id = Number(req.params.id); // Here req.params.id is a string so we have converted it to a number
//     const user = users.find((user => user.id === id));
//     return res.json(user);
// })
// .patch((req,res) => {
//     //Edit user with ID
//     return res.json({ status: "Pending"});
// })
// .delete((req,res) => {
//     //Delete the user with ID
//     return res.json({ status: "Pending"});
// });

// app.post('/api/users',(req,res)=>{
//     const body = req.body;
//     users.push({...body, id:users.length+1});
//     fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
//         return res.status(201).json({ status: "Success", id: users.length});
//     }); 
// });
// app.listen(port, () => console.log(`server has started at port: ${port}`));

// Connecting mongoDB (Mongoose) and express to store the data in the database
const express = require('express');
const { connectMongoDB } = require('./connection');
const {logReqRes } = require("./middlewares");
const userRouter = require("./routes/user");

// const { stringify } = require('querystring');
const app = express();
const port = 8000;
//Connection of the mongoDB
const mongoURI = "mongodb+srv://Saarthak:Xtc84uvpNY359ixz@cluster0.j4m7r7t.mongodb.net/NewDB";
connectMongoDB(mongoURI)
  .then(() => console.log("MongoDB connected"));
//Middleware / pLugin & headers
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes('log.txt'));
//Routes
app.use('/api/user', userRouter) // Agar /user ke upar koi request aati h then use userRouter
app.listen(port, () => console.log(`server has started at port: ${port}`));