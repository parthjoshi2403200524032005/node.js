const express = require("express");
const route = require("./route/routes");
const { default: mongoose } = require("mongoose");
const app = express();

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://parthjohi009:E5ESleWwGGp0waa1@cluster0.k3a6ktn.mongodb.net/?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
app.use("/api", route);

app.listen(7000, () => {
  console.log("port is connected");
});

// mongodb+srv://parthjohi009:E5ESleWwGGp0waa1@cluster0.k3a6ktn.mongodb.net/
// password = E5ESleWwGGp0waa1 ;
// user = parthjohi009 ;
