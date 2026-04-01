const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const connectDB = require("../src/config/db");
const User = require("../src/models/User");
const Charity = require("../src/models/Charity");
const Subscription = require("../src/models/Subscription");
const Draw = require("../src/models/Draw");

// Naya Premium Admin
const ADMIN_EMAIL = process.env.SEED_ADMIN_EMAIL || "admin@impactdrive.com";
const ADMIN_PASSWORD = process.env.SEED_ADMIN_PASSWORD || "Admin@123";
const ADMIN_NAME = process.env.SEED_ADMIN_NAME || "System Administrator";

// Nayi Premium Charities
const charities = [
  {
    name: "Global Water Initiative",
    description: "Funding clean water infrastructure in underserved global communities.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  {
    name: "Youth Education Fund",
    description: "Providing technological resources and education to future innovators.",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b"
  },
  {
    name: "Medical Research Group",
    description: "Accelerating critical medical research and frontline healthcare support.",
    image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f"
  }
];

async function seedCharities() {
  for (const charity of charities) {
    await Charity.updateOne(
      { name: charity.name },
      { $set: charity },
      { upsert: true }
    );
  }
}

async function seedAdmin() {
  const existing = await User.findOne({ email: ADMIN_EMAIL });
  if (!existing) {
    await User.create({
      name: ADMIN_NAME,
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
      role: "admin",
      subscriptionStatus: "active",
      charityPercentage: 10
    });
  }
}

async function seedMockAnalytics() {
  console.log("Initializing ImpactDrive Telemetry...");
  
  // Clean up previous seed users
  await User.deleteMany({ email: { $regex: /^node\d+@network\.com$/ } });

  const charityDocs = await Charity.find();
  if (charityDocs.length === 0) return;

  // Create 15 Premium Dummy Users
  for (let i = 1; i <= 15; i++) {
      const u = await User.create({
          name: `Network Node ${i}`,
          email: `node${i}@network.com`,
          password: "Password123",
          role: "user",
          subscriptionStatus: "active",
          charity: charityDocs[Math.floor(Math.random() * charityDocs.length)]._id,
          charityPercentage: 15
      });

      await Subscription.create({
          user: u._id,
          plan: "yearly",
          amount: 99.99,
          status: "active",
          startDate: new Date(),
          expiryDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
      });
  }

  await Draw.deleteMany({});
  
  const months = ["Oct 2025", "Nov 2025", "Dec 2025", "Jan 2026", "Feb 2026", "Mar 2026"];
  let jCF = 0;
  
  for (let m of months) {
      const revenue = Math.floor(Math.random() * 5000) + 15000; 
      const subscribers = Math.floor(Math.random() * 50) + 1500;
      const totalPool = Math.floor(revenue * 0.4); 
      const charityAmount = Math.floor(revenue * 0.15); 
      
      await Draw.create({
          month: m,
          status: "published",
          numbers: [Math.floor(Math.random()*45)+1, Math.floor(Math.random()*45)+1, Math.floor(Math.random()*45)+1, Math.floor(Math.random()*45)+1, Math.floor(Math.random()*45)+1],
          totalPool: totalPool,
          subscriberCount: subscribers,
          charityAmount: charityAmount,
          jackpotCarryForward: jCF
      });

      if (Math.random() > 0.5) jCF += Math.floor(totalPool * 0.4); 
      else jCF = 0; 
      
      await Charity.updateMany({}, { $inc: { totalDonations: Math.floor(charityAmount / 3) }});
  }
  console.log("Telemetry generated successfully!");
}

async function run() {
  try {
    await connectDB();
    await seedCharities();
    await seedAdmin();
    await seedMockAnalytics();
    console.log("Database Seeded Successfully! Ready for Deployment.");
    process.exit(0);
  } catch (error) {
    console.error("Seed failed:", error.message);
    process.exit(1);
  }
}

run();