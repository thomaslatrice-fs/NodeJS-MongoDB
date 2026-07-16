/*require("dotenv").config();
const app = require("./app");
const connectDB = require("./app/db/config");

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
*/
require("dotenv").config();

const app = require("./app");
const connectDB = require("./app/db/config");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  } catch (error) {
    console.error("Startup error:", error.message);
    process.exit(1);
  }
};

startServer();
