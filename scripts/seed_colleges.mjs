// ESM seed script for colleges using Prisma Client
// Usage:
//   DATABASE_URL="mongodb://..." node --experimental-specifier-resolution=node scripts/seed_colleges.mjs
// or with npm script added to package.json: `npm run seed:colleges`

import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const prisma = new PrismaClient();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  // Connect explicitly and print debug info to ensure client initialized
  try {
    await prisma.$connect();
  } catch (e) {
    console.error("Prisma failed to connect:", e?.message || e);
  }

  try {
    console.log("Prisma client keys:", Object.keys(prisma).slice(0, 50));
    console.log(
      "prisma.college ===",
      typeof prisma.college,
      prisma.college ? "present" : "missing"
    );
  } catch (e) {
    console.error("Failed to inspect prisma object:", e?.message || e);
  }

  const file = path.resolve(__dirname, "..", "temp.json");
  let raw;
  try {
    raw = fs.readFileSync(file, "utf8");
  } catch (err) {
    console.error("Could not read temp.json at", file, err.message);
    process.exit(1);
  }

  let colleges;
  try {
    colleges = JSON.parse(raw);
  } catch (err) {
    console.error("Failed to parse temp.json:", err.message);
    process.exit(1);
  }

  if (!Array.isArray(colleges)) {
    console.error("temp.json must contain an array of colleges");
    process.exit(1);
  }

  let processed = 0;
  for (const c of colleges) {
    if (!c || typeof c !== "object") continue;
    const tag = (c.tag || "").toString().trim();
    const name = (c.name || "").toString().trim();
    if (!tag || !name) {
      console.warn("Skipping invalid college entry (missing tag/name):", c);
      continue;
    }

    try {
      // Use a raw MongoDB update command via Prisma client to upsert by `tag`.
      const cmd = {
        update: "College",
        updates: [
          {
            q: { tag },
            u: { $set: { tag, name } },
            upsert: true,
          },
        ],
      };

      const res = await prisma.$runCommandRaw(cmd);
      // res may contain number of documents modified/upserted; log for visibility
      console.log("Upsert command result for", tag, JSON.stringify(res));
      processed++;
    } catch (err) {
      console.error(
        "Failed to upsert",
        tag,
        (err && err.stack) || err.message || err
      );
    }
  }

  console.log(`Processed ${processed} colleges`);
}

main()
  .catch((e) => {
    console.error("Unhandled error:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
