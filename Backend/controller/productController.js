import { instance } from "../config/razorpay.js";
import crypto from "crypto";
export const processPayment = async (req, res) => {
    try {
        const options = {
            amount: Number(req.body.amount * 100),
            currency: "INR"
        };

        const order = await instance.orders.create(options);

        res.status(200).json({
            success: true,
            order
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getKey = (req, res) => {
    res.status(200).json({
        key: process.env.KEY_ID
    });
};
export const paymentverification=async(req,res)=>{
    const {razorpay_payment_id,razorpay_order_id,razorpay_signature}=req.body;
    const body=razorpay_order_id+'|'+razorpay_payment_id;
    const expectedSignature=crypto.createHmac("sha256",process.env.SECRET_KEY).update(body.toString()).digest('hex');
    console.log(`RazorPaySignature :${razorpay_signature}`);
    console.log(`ExpextedSignature :${expectedSignature}` );
    const isAuthentic=expectedSignature===razorpay_signature;
    if(isAuthentic){
        return res.redirect(`http://localhost:5173/paymentSuccess?refernce=${razorpay_payment_id}`)
    }else{
          res.status(200).json({
        success:false,
    })
    }
  

}