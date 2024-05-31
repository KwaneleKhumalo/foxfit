
export const payment = async (req, res) => {
 try {
   res.send("Payment Route Handling.")
 } catch (err) {
   res.status(500).send(err.message)
 }
}

