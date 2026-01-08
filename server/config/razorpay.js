const Razorpay = require("razorpay");

let instance = null;
if (process.env.RAZORPAY_KEY && process.env.RAZORPAY_SECRET) {
    try {
        instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY,
            key_secret: process.env.RAZORPAY_SECRET,
        });
    } catch (error) {
        console.warn("Error creating Razorpay instance:", error.message);
        instance = null;
    }
} else {
    console.warn("RAZORPAY_KEY or RAZORPAY_SECRET missing. Razorpay instance will not be initialized.");
}

exports.instance = instance;