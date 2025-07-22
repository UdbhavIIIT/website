# IIIT-Website

## About

This project is a web application built for IIIT-related functionalities. It uses modern web technologies and tools for a smooth development and deployment experience.

### Technologies Used

- **Next.js**
- **TypeScript**
- **MongoDB** (via Docker)
- **Prisma ORM**

---

## How to Run the Project

Follow these steps to get the project running on your local machine:

### 1. Install Dependencies

Open your terminal in the project's root directory and run:

```bash
npm install
```

---

### 2. Ensure Docker is Running

Make sure Docker is installed and running on your system.

- If not installed, download it from [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)

---

### 3. Start MongoDB Database

With Docker running, start the MongoDB container:

```bash
docker compose up -d
```

> The `-d` flag runs the services in detached (background) mode.

#### (Optional) Connect to MongoDB

You can use **MongoDB Compass** or any database GUI tool to view or interact with the database.

- Default connection string: `mongodb://localhost:27017`

> This may vary if overridden in `docker-compose.yml` or `.env`.

---

### 4. Prisma Setup

Run the following commands to prepare the Prisma client and push your schema to the database:

```bash
npx prisma generate
npx prisma db push
```

---

### 5. Seed the Database *(Optional but Recommended)*

If your project has seed data configured using Prisma:

```bash
npx prisma db seed
```

---

### 6. Start the Development Server

Run the following command to start the app in development mode:

```bash
npm run dev
```

- By default, the app will be accessible at: [http://localhost:3000](http://localhost:3000)

---

## Contributing

We welcome contributions! Feel free to:

- Open issues for bugs or suggestions
- Submit pull requests for improvements

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.
