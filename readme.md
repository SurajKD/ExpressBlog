# ExpressBlog

ExpressBlog is a simple blog website built using [Express.js](https://expressjs.com/) and [Handlebars](https://handlebarsjs.com/) as the templating engine. This project demonstrates **server-side rendering**, **dynamic routing**, and **static file serving** using Express and Netlify Functions.

## Features

- **Homepage** – Displays a welcome message.
- **Blog Listing** – Lists all blog posts with titles, descriptions, and thumbnails.
- **Blog Details** – Displays the full content of a blog post.
- **Dynamic Routing** – Uses dynamic routes for individual blog posts.
- **Handlebars Templating** – Uses Handlebars for server-side rendering.
- **Bootstrap Integration** – Styled with Bootstrap for a responsive design.
- **Netlify Functions** – Serverless deployment with Netlify.

## Project Structure

```
ExpressBlog/
├── functions/            # Server-side logic for Netlify Functions
│   ├── server.js        # Main server file
│   ├── routes/          
│   │   └── blog.js      # Blog routes
│   ├── views/           # Handlebars views
│   │   ├── home.handlebars      # Homepage view
│   │   ├── blogHome.handlebars  # Blog listing view
│   │   ├── blogPage.handlebars  # Blog details view
│   │   └── layouts/
│   │       └── main.handlebars  # Main layout
│   ├── static/          # Static files (CSS, JS, images)
├── package.json         # Project dependencies and scripts
├── netlify.toml         # Netlify configuration
├── .gitignore           # Ignored files for Git
└── README.md            # Project documentation
```

## Installation & Running Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/ExpressBlog.git
cd ExpressBlog
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run locally using Netlify Dev
```bash
netlify dev
```
Then visit **http://localhost:8888/** to view your blog.

## Deployment on Netlify

1. Push your code to GitHub.
2. Connect the repository to Netlify.
3. Deploy with default settings.

## License

This project is licensed under the MIT License.

---

🚀 Happy coding! If you have any issues, feel free to open an issue or contribute to the project.