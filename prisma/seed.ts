import { PrismaClient, Roles } from "../lib/generated/prisma/client";
// You'll need a library like bcrypt to hash passwords.
// Run: npm install bcrypt && npm install -D @types/bcrypt
import * as bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding ...");

  // --- 1. Clean up existing data (optional, but recommended for development) ---
  // The order of deletion is important to avoid foreign key constraint errors.
  // We delete Users first, then Teams, then Colleges.
  await prisma.user.deleteMany();
  console.log("Deleted records in user table");

  await prisma.team.deleteMany();
  console.log("Deleted records in team table");

  await prisma.college.deleteMany();
  console.log("Deleted records in college table");

  // --- 2. Create Colleges ---
  const college1 = await prisma.college.create({
    data: {
      name: "Global Institute of Technology",
      mediaLink: "https://example.com/git-media.jpg",
      logoLink: "https://example.com/git-logo.png",
      details: "A leading institution for engineering and technology.",
      eventDetails: 'Annual Tech Fest "Innovate 2024" is happening next month!',
      organizers: ["Dr. Evelyn Reed", "Prof. Samuel Chen"],
    },
  });

  const college2 = await prisma.college.create({
    data: {
      name: "Pinnacle Business School",
      mediaLink: "https://example.com/pbs-media.jpg",
      logoLink: "https://example.com/pbs-logo.png",
      details: "Excellence in business and management education.",
      eventDetails: 'Join our "Entrepreneurship Summit" this weekend.',
      organizers: ["Dr. Aisha Khan", "Mr. David Miller"],
    },
  });

  console.log(`Created colleges: ${college1.name}, ${college2.name}`);

  // --- 3. Create Teams and embed Projects ---
  const team1_college1 = await prisma.team.create({
    data: {
      name: "Tech Titans",
      collegeId: college1.id, // Link to College 1
      ClubName: "Robotics Club",
      points: 150,
      project: [
        // Embed project data directly
        {
          name: "AI-Powered Chatbot",
          description: "A customer service chatbot using machine learning.",
          mediaLinks: ["https://example.com/project/chatbot.mp4"],
          projectLinks: ["https://github.com/techtitans/chatbot"],
        },
        {
          name: "Automated Drone Delivery",
          description: "A system for autonomous package delivery.",
          mediaLinks: ["https://example.com/project/drone.jpg"],
          projectLinks: ["https://github.com/techtitans/drone"],
        },
      ],
    },
  });

  const team2_college2 = await prisma.team.create({
    data: {
      name: "Market Mavericks",
      collegeId: college2.id, // Link to College 2
      ClubName: "Marketing Society",
      points: 200,
      project: [
        // Embed project data
        {
          name: "Viral Marketing Campaign Analysis",
          description:
            "A deep dive into the success factors of viral campaigns.",
          mediaLinks: ["https://example.com/project/viral-analysis.pdf"],
          projectLinks: ["https://example.com/mavericks/analysis-report"],
        },
      ],
    },
  });

  console.log(`Created teams: ${team1_college1.name}, ${team2_college2.name}`);

  // --- 4. Create Users (with hashed passwords) ---
  // It's crucial to hash passwords before storing them.
  const saltRounds = 10;
  const hashedPasswordAdmin = await bcrypt.hash("password-admin", saltRounds);
  const hashedPasswordUser1 = await bcrypt.hash("password-user1", saltRounds);
  const hashedPasswordUser2 = await bcrypt.hash("password-user2", saltRounds);

  const adminUser = await prisma.user.create({
    data: {
      name: "Admin User",
      email: "admin@techtitans.com",
      password: hashedPasswordAdmin,
      phone_number: "1234567890",
      batch: "2022",
      teamId: team1_college1.id, // Link to Team 1
      role: Roles.ADMIN,
    },
  });

  const user1 = await prisma.user.create({
    data: {
      name: "Alice Johnson",
      email: "alice@techtitans.com",
      password: hashedPasswordUser1,
      phone_number: "0987654321",
      batch: "2023",
      teamId: team1_college1.id, // Link to Team 1
      role: Roles.USER,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "Bob Williams",
      email: "bob@marketmavericks.com",
      password: hashedPasswordUser2,
      phone_number: "1122334455",
      batch: "2023",
      teamId: team2_college2.id, // Link to Team 2
      role: Roles.USER,
    },
  });

  console.log(`Created users: ${adminUser.name}, ${user1.name}, ${user2.name}`);

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Close the Prisma Client connection
    await prisma.$disconnect();
  });
