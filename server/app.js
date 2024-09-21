var express=require('express')
var app= express()
require('dotenv').config();

const userRoutes = require('./routes/userRouter');
const bodyParser=require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



// Use routes
app.use('/', userRoutes);




app.listen(process.env.port, () => {
    console.log(`Server is running on port ${process.env.port}`);
})