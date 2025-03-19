# Express Blog

A simple blog website built using **Express.js**, **Node.js**, and **Handlebars** as the templating engine.

## Features

- Create, read, update, and delete blog posts.
- Dynamic rendering of pages using Handlebars.
- RESTful API for managing blog posts.
- Lightweight and easy to customize.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.
- Basic knowledge of JavaScript and Node.js.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/express-blog.git
    cd express-blog
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```
express-blog/
├── views/              # Handlebars templates
│   ├── layouts/        # Layout files
│   ├── partials/       # Reusable components
│   └── *.hbs           # Page templates
├── public/             # Static files (CSS, JS, images)
├── routes/             # Application routes
├── models/             # Data models
├── app.js              # Main application file
└── package.json        # Project metadata and dependencies
```

## Scripts

- `npm start`: Start the application.
- `npm run dev`: Start the application in development mode with live reload (requires `nodemon`).

## Dependencies

- **Express.js**: Web framework for Node.js.
- **Handlebars**: Templating engine for dynamic HTML rendering.
- **Body-parser**: Middleware for parsing request bodies.
- **Nodemon** (dev dependency): Automatically restarts the server during development.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Express.js Documentation](https://expressjs.com/)
- [Handlebars Documentation](https://handlebarsjs.com/)
