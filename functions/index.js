const functions = require("firebase-functions");
const express =require("express");
const cors=require("cors");

const stripe =require("stripe")('sk_test_51J686JHUFbxfZ7U5jLBX3eSywndb0aLOe0W0jkLvRslz4VkPfgY3jiGhef8gQR3mU273GF8Lz5rwFeKD6qavFL7C009Bicxfnj')

//Api setup
// app config
const app=express();
//Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//Api routes
app.get('/',(request, response) => response.status(200).send('hello world'))

app.post('/payments/create',async (request,response)=>{
    const total= request.query.total;
    console.log('payment request received',total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total, //subunits of the currency
        currency:"usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// listen command
exports.api=functions.https.onRequest(app)