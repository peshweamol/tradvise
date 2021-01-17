const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//use client build in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// app.get("/",(req,res)=>{
//   res.send("Hello World");
// })

app.listen(PORT, () => {
  console.log("Server started listening on port " + PORT);
});
