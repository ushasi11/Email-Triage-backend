# Project Documentation - Email Triage Backend

## System Architecture
This backend handles incoming email data and uses a classification logic to determine priority.

## File Structure
* `server.js`: The main entry point. Sets up the Express server and middleware.
* `classifier.js`: Contains the core logic for sorting emails into categories.
* `package.json`: Manages project dependencies and scripts.

## API Endpoints
### GET /
* **Description:** Health check to ensure the server is running.
* **Response:** "Server is running on port 5000".

### POST /api/classify (Example)
* **Description:** Sends email text to be categorized.
* **Input:** JSON object with `subject` and `body`.
*