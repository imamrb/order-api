## Node Express API Example : Order API

A minimal order api built with node and express.

# Getting started

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- Install MongoDB Community Edition ([instructions](https://docs.mongodb.com/manual/installation/#tutorials)) and run it
- `cp .env.example .env` and update the environment variables
- `npm run dev` to start the local server

## Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [mongoose](https://github.com/Automattic/mongoose) - For modeling and mapping MongoDB data to javascript
- [validator](https://github.com/validatorjs/validator.js) - For validating attributes like Phone number
- [morgan](https://github.com/expressjs/morgan) - HTTP request logger middleware for node.js

## Application Structure

- `app.js` - The entry point to our application. This file defines our express server. It also requires db config, the routes and models we'll be using in the application.
- `db/` - This file contains the db config to connect our server to MongoDB using mongoose.
- `routes/` - This folder contains the route definitions for our API.
- `models/` - This folder contains the schema definitions for our Mongoose models.
