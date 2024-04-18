# Bookstore Web Application

This is a simple web application built using Node.js, Express, MongoDB, React, and Tailwind CSS. It allows users to manage a collection of books.

## Features

- Add new books with title, author, and publish year
- View a list of all books
- View details of a specific book
- Update information of a book
- Delete a book from the collection

## Prerequisites

Before running this application locally, make sure you have the following installed:

- Node.js
- MongoDB
- npm or yarn

## Getting Started

1. Clone this repository to your local machine.
2. Navigate to the `frontend` directory and run `npm install` or `yarn install` to install dependencies.
3. Navigate back to the root directory and run `npm install` or `yarn install` to install backend dependencies.
4. Rename `config.example.js` file to `config.js` and add your MongoDB URL and port.
5. Start the backend server by running `npm start` or `yarn start` in the root directory.
6. Start the frontend development server by running `npm start` or `yarn start` in the `frontend` directory.
7. Open your browser and go to `http://localhost:3000` to view the application.

## API Endpoints

- `GET /books`: Get all books
- `GET /books/:id`: Get a specific book by ID
- `POST /books`: Add a new book
- `PUT /books/:id`: Update information of a book
- `DELETE /books/:id`: Delete a book

## Technologies Used

- Node.js
- Express
- MongoDB
- React
- Tailwind CSS
