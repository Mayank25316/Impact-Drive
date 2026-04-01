// const app = require("./app");
// const env = require("./config/env");
// const connectDB = require("./config/db");
// const { startMonthlyDrawJob } = require("./jobs/monthlyDrawJob");

// async function bootstrap() {
//   await connectDB();
//   startMonthlyDrawJob();

//   app.listen(env.port, () => {
//     console.log(`Server running on port ${env.port}`);
//   });
// }

// bootstrap().catch((error) => {
//   console.error("Failed to start server", error);
//   process.exit(1);
// });