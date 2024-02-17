# Trivia Challenge Project Documentation

#### Live Project -> [Trivia Challenge](https://trivia-mocion.apps.aipus.co/)

The Trivia Challenge is a web-based quiz application that presents users with 12 true or false questions. It leverages React, TypeScript, Tailwind CSS, redux toolkit, react-router-dom and Vite for the frontend, with Redux for state management. The backend, although not detailed in this documentation, is hinted to be a Node.js application, as indicated by the presence of an Express server setup in the package.json file.

# How to use 
 <img  src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png" width="30px" height="30px" >To deploy this project you can use docker or al least you  need node js installed in your pc 

 ## Using just with Node
 1. Clone the project

```bash
  git clone https://github.com/david12997/trivia-challenge.git
```

 2. Install all dependencies, in the root folder use the following command

```bash
  npm install
```

3. Install the Frontend dependencies
```bash
  cd  trivia && npm install
```

4. Build the frontend app, in the root folder run the following command
```bash
  npm run build:frontend
```

5. Build the backend

```bash
  npm run build:backend
```

6. star the project, in the root folder run the following command
```bash
  npm run start:backend
```

7. Go to [http://localhost:3009/](http://localhost:3009/)

## Using Docker

1. Build an image using the dockerfile
```bash
  docker build -t trivia-challenge:latest .
```

2. Run a new container based on the previous images
```bash
  docker run -d -p 3009:3009   --restart=always trivia-challenge:latest
```

3. Go to [http://localhost:3009/](http://localhost:3009/)

# Project Structure
- **Frontend (/trivia):**
    - **src:** Contains the React components, services, store (Redux), and utilities.
    - **components:** Reusable UI components.
    - **services:** Functions for business logic, like adding answers and saving questions.
    - **store:** Redux store setup and slices.
    - **pages:** Components representing different pages in the application.      
    - **utils:** Contain helper functions to reuse



- **Backend: (/src):** Contains the Express server setup to serve the react static app


# Code Format

The project adheres to standard TypeScript and React coding conventions, utilizing functional components and hooks.

# State Management
To handle data state in the application I am using Redux toolkit, all the settings are in the store folder.

# Routing
I am using React Router dom to handle the routes and client navigation, I am also using Express to serve the application on the backend routes.

the routes available are:

1. Init Point
```bash
  /
```
2. trivia game
```bash
  /trivia
```

3. results trivia game
```bash
  /trivia/results
```
