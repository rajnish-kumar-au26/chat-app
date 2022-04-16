const mongoose = require("mongoose");

function dbConnect() {
  mongoose
    .connect("mongodb://localhost:27017/chat-app")
    .then(() => console.log(`DB is Connected`))
    .catch((err) => console.log(`DB is Not Connect`, err));
}

module.exports = dbConnect;
