const mongoose = require("mongoose")
const dbUrl = process.env.MONGODB_URL

mongoose.connect(dbUrl, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log(`Connected successfully to ${dbUrl}`)
});
