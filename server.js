const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const path = require("path")
const enforce = require("express-sslify")

if (process.env.NODE_ENV !== "production") require("dotenv")

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(enforce.HTTPS({ trustProtoHeader: true }))
app.use(cors())

if (process.env.)

app.listen(port, error => {
  if (error) throw error
  console.log("Server running on port " + port)
})

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd"
  }

app.get("/server")

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr})
    }
    else {

    }
  })
})


