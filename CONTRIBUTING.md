# Contributing to MANTIS

Welcome to the MANTIS project! We appreciate your help in building this mentee-expert marketplace.

## Development Workflow

1. **Branching Strategy**
   - We follow a Trunk-based / GitFlow hybrid model.
   - Always create a new branch from `main` for your work.
   - Branch naming convention: `feature/short-description`, `bugfix/issue-name`, `chore/setup`.

2. **Commit Messages**
   - Write commit messages exactly as a senior engineer would.
   - Use a short imperative subject line under 50 characters (e.g., `Add expert search by skill`, `Fix timezone bug in booking flow`).
   - Leave a blank line between the subject and the body.
   - Use a plain-English body only when it adds real context.
   - No mention of AI, prompts, or tooling anywhere in commit messages.

3. **Pull Requests**
   - Open a PR against `main` when a feature is ready.
   - Ensure all CI/CD pipelines (linting, tests) pass before requesting review.

4. **Code Standards**
   - **Frontend:** TypeScript, React, Next.js, Tailwind CSS. Follow ESLint and Prettier rules.
   - **Backend:** NestJS (TypeScript). Follow ESLint rules.
   - **ML:** FastAPI (Python). Use `black` and `pylint`.
   - Ensure proper ARIA labels, full keyboard support, and WCAG color contrast guidelines are met.
   - Secure coding practices (OWASP Top 10) must be adhered to. Never commit secrets!
