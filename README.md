# AI & Robotics Summer Workshop Landing Page

## Overview

This project is a responsive Workshop Landing Page built for the **AI & Robotics Summer Workshop**. The application provides workshop information, learning outcomes, FAQs, and a registration form that allows users to submit enquiries.

## Workshop Details

* Age Group: 8–14 Years
* Duration: 4 Weeks
* Mode: Online
* Fee: ₹2,999
* Start Date: 15 July 2026

## Features

* Responsive design for mobile, tablet, and desktop
* Modern Hero section
* Workshop Details section
* Learning Outcomes section
* FAQ Accordion
* Registration Form
* Form validation
* Loading states
* Express.js API integration

## Tech Stack

### Frontend

* React.js
* JavaScript
* Tailwind CSS

### Backend

* Node.js
* Express.js

## Project Structure

```text
backend/
frontend/
README.md
```

## Installation

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm start
```

## API Endpoint

### POST /api/enquiry

Request:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210"
}
```

Response:

```json
{
  "success": true,
  "message": "Registration submitted successfully"
}
```
## Live Demo

https://workshop-cogk.vercel.app/

## GitHub Repository

https://github.com/Piyush-Singh-01/Workshop

## Approach

The project was developed using a component-based architecture in React.js to ensure maintainability and reusability. Tailwind CSS was used to create a modern and responsive user interface. The backend was built with Express.js and includes validation for registration data before processing enquiries.

## Future Improvements

* MongoDB integration for storing enquiries
* Email notifications after registration
* Admin dashboard for managing enquiries
* Advanced animations and accessibility improvements
