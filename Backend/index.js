import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import sendEmail from './utils/sendEmail.js';

const app = express();
const router = express.Router();
config({ path: './config.env' });

app.use(cors({
    origin: "http://localhost:5173", 
    methods: ['POST'], 
    credentials: true, 
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

router.get('/', (req, res) => {
    res.send({
        welcome: "Hello From Server!",
        url: `you are now at url: ${req.url}`,
    });
});
app.use((req, res, next) => {
    console.log('Request Origin:', req.headers.origin);
    next();
});

router.post("/send/mail", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "Please provide all details",
        });
    }

    try {
        await sendEmail({
            email: "khan152191@gmail.com",
            subject: "Gym Website Contact",
            message,
            userEmail: email,
        });
        res.status(200).json({
            success: true,
            message: "Message sent successfully",
        });
    } catch (error) {
        console.error("Error sending email:", error); // Added logging for debugging
        res.status(500).json({
            success: false, // Corrected to boolean
            message: "Internal Server Error",
        });
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Server Started at http://localhost:${process.env.PORT}`);
});
