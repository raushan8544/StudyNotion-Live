const express = require("express");
const app = express();

// Load environment variables as early as possible so config files that
// depend on them (e.g., razorpay or cloudinary) work properly.
require("dotenv").config();

const userRouter = require("./routes/User");
const profileRouter = require("./routes/Profile");
const paymentRouter = require("./routes/Payments");
const courseRouter = require("./routes/Course");

const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const {cloudinaryConnect} = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
// dotenv already loaded at the top
const PORT = process.env.PORT || 5000;

// Connect to the database
database.connect();

// Middleware
app.use(express.json());
// log incoming requests (dev only)
if (process.env.NODE_ENV !== 'production') {
    app.use((req, res, next) => {
        try {
            console.log('Request:', req.method, req.path, 'body:', req.body && Object.keys(req.body).length ? JSON.stringify(req.body).slice(0, 200) : '{}');
        } catch (e) {
            /* ignore */
        }
        next();
    });
}
app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
)

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
)

// cloudinary connection
cloudinaryConnect();

// Routes
app.use("/api/v1/auth", userRouter);
app.use("/api/v1/profile", profileRouter);
app.use("/api/v1/payment", paymentRouter);
app.use("/api/v1/course", courseRouter);

// Home route
app.get("/", (req , res)=>{
    res.json({
        success: true,
        message: 'your server is running'
    });
});

// Start the server
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})