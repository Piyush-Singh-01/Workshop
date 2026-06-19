# AI & Robotics Summer Workshop Landing Page

## Overview

This project is a responsive workshop landing page built for the **AI & Robotics Summer Workshop**. The application allows parents and students to view workshop information and submit registration enquiries through a simple form.

## Features 

* Responsive design for mobile, tablet, and desktop
* Hero section with workshop information
* Workshop details section
* Learning outcomes section
* FAQ accordion
* Registration form with validation
* Loading and success/error states
* Express.js API for enquiry submission

## Tech Stack

### Frontend

* React.js
* Tailwind CSS
* JavaScript

### Backend

* Node.js
* Express.js

## Installation

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
npm install
npm run server
```

## API Endpoint

### POST /api/enquiry

Request Body:

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
https://github.com/Piyush-Singh-01/Workshop/

## Future Improvements

* MongoDB integration
* Email notifications
* Admin dashboard
* Enhanced animations
* Analytics and reporting
