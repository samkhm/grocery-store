require("dotenv").config();
const express = require("express")
const cors = require("cors")
const connectDB = require('./config/db')

const app = express();
connectDB();

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT;

app.use('/api/auth', require('./routes/authRoute'))

app.listen(PORT, () => {
    console.log(`Server running at http:localhost:${PORT}`)
});