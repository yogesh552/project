const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const bodyparser = require('body-parser');
const router=require('./routes/userRouter')

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/', router);


app.listen(6001, () => {
  console.log('Server running on port 6001');
});
