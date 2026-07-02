# MANTIS
**"Stop guessing, start talking"**

MANTIS is a mentee-expert marketplace connecting learners (students and novices in tech, design, science, and entrepreneurship) with vetted experts (veteran professionals and PhD researchers) for 1-on-1 mentorship.

## Tech Stack
- **Frontend:** React, Next.js (TypeScript), Tailwind CSS
- **Backend:** NestJS (TypeScript) / Express, PostgreSQL
- **ML Recommender:** FastAPI (Python)
- **Infrastructure:** Docker, Kubernetes, Terraform

## Local Development Setup

### Prerequisites
- Node.js (v18+)
- Python (v3.10+)
- Docker & Docker Compose
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/mantisdarling/Mantis.git
cd Mantis
```

### 2. Environment Variables
Copy the example environment file and fill in your secrets.
```bash
cp .env.example .env
```
**Never commit the `.env` file!**

### 3. Start Infrastructure (Database & Redis)
Use Docker Compose to spin up the local PostgreSQL database and Redis instance.
*(Docker compose configuration coming soon)*

### 4. Install Dependencies
*(Since we use a monorepo setup, you will install dependencies from the root directory once scaffolded).*

### 5. Run the Application
*(Start commands for frontend, backend, and ML service coming soon).*

## Contributing
Please see `CONTRIBUTING.md` for guidelines on branching, committing, and creating pull requests.
