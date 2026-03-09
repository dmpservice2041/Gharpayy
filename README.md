# Gharpayy - Lead Management CRM MVP

A production-grade Lead Management CRM backend for a PG accommodation platform. Built with Node.js, Express, PostgreSQL, and Prisma.

## Features

- **Lead Capture**: Automatically assigns leads to active agents using a round-robin system.
- **Lead Pipeline**: Move leads through stages from `NEW` to `BOOKED` or `LOST`.
- **Visit Scheduling**: Schedule property visits; automatically updates lead status.
- **Dashboard**: Quick overview of lead counts, stages, and scheduled visits.
- **Follow-up Reminders**: Background cron job checks for inactive leads (>24h) and logs reminders.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Task Scheduling**: Node-cron

## Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Database Configuration**:
   Update the `DATABASE_URL` in your `.env` file.

3. **Prisma Setup**:
   ```bash
   npx prisma generate
   # For new databases:
   # npx prisma db push
   ```

4. **Run Server**:
   ```bash
   npm start
   ```

## API Endpoints

- `POST /leads`: Capture a new lead.
- `PATCH /leads/:id/status`: Update lead status.
- `POST /visits`: Schedule a property visit.
- `GET /dashboard`: Get CRM statistics.
- `GET /agents`: List all agents.
- `POST /agents`: Create a new agent.
