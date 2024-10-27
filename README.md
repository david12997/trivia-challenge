
# Trivia Challenge

This project is a full-stack application that serves a trivia quiz game. It is built using React, TypeScript, and Vite for the frontend, and Express with TypeScript for the backend. The project follows best practices and design patterns to ensure scalability and maintainability.

<img src="https://cms.cominsur.com.co/cominsur/assets/ouusof79kask84so">

<br/>

---

 - Live Project -> [Trivia Challenge](https://trivia-mocion.apps.aipus.co/)
 - My Figma Design -> [Figma Desing](https://www.figma.com/file/vJ17sI7ORINFCJFSgpbjPA/Untitled?type=design&node-id=0%3A1&mode=design&t=ACUHQBQ5UCwwqiAL-1)

---
<br/>

## Table of Contents

- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Design Patterns](#design-patterns)
- [State Management](#state-management)
- [Hooks](#hooks)
- [Setup and Installation](#setup-and-installation)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [CORS Configuration](#cors-configuration)


---
<br/>


## <img src="https://cdn-icons-png.flaticon.com/512/223/223491.png" width="30px" height="30px"> Project Structure

###### Project Structure

### Frontend: (`/trivia`)

- **src/pages**: Contains React components representing different pages in the application.
- **src/components**:Contain basic indivudual react components like buttons, cards etc...
- **src/hooks**: Contain abstractions of functionalites that involves reatc hooks
- **src/uitls**: Contain helper functios to be use along the fronted.
- **src/store**: Redux store setup and slices.
- **src/types**: TypeScript types for the application.
- **src/App.tsx**: Main application component.
- **src/main.tsx**: Entry point for the React application.
- **src/App.css**: Global CSS styles.

### Backend: (`/src`)

- **adapters**: Contains adapter classes to interface with different trivia APIs.
- **factories**: Contains factory classes to create instances of trivia API adapters.
- **interfaces**: TypeScript interfaces for the application.
- **middlewares**: Express middleware functions.
- **routes**: Express route handlers.
- **services**: Functions for business logic, like adding answers and saving questions.
- **index.ts**: Entry point for the Express server.


---
<br/>

## <img  src="https://cdn-icons-png.flaticon.com/512/4997/4997543.png" width="30px" height="30px" >  Technologies Used
###### Technologies Used

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A build tool that aims to provide a faster and leaner development experience for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Redux Toolkit**: A toolset for efficient Redux development.
- **React Router**: A collection of navigational components for React applications.

### Backend

- **Express**: A minimal and flexible Node.js web application framework.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.

---
<br/>

## <img  src="https://refactoring.guru/images/patterns/cards/adapter-mini-3x.png" width="30px" height="30px" > Design Patterns
###### Design Patterns

### Adapter Pattern

The adapter pattern is used to interface with different trivia APIs. Each API has its own adapter class that implements a common interface.

Example: [`OpenTriviaAdapter`](src/adapters/open.trivia.adapter.ts)

### Factory Pattern

The factory pattern is used to create instances of trivia API adapters based on the API type.

Example: [`TriviaAPIFactory`](src/factories/trivia.factory.ts)

---
<br/>

## <img  src="https://w7.pngwing.com/pngs/95/797/png-transparent-redux-hd-logo-thumbnail.png" width="30px" height="30px" > State Management
###### State Management

The application uses Redux Toolkit for state management. All the settings are in the `store` folder.

Example: [`trivia.game.ts`](trivia/src/store/trivia.game.ts)


---
<br/>

## <img  src="https://raw.githubusercontent.com/alDuncanson/react-hooks-snippets/master/icon.png" width="26px" height="26px" > Hooks
###### Hooks

The project uses React hooks for managing component state and side effects.

Example: [`useNavigate`](trivia/src/pages/home.tsx)

---
<br/>

## <img  src="https://cdn-icons-png.flaticon.com/512/8964/8964273.png" width="30px" height="30px" >  Setup and Installation
###### Setup and installation

To deploy this project you can use docker or al least you  need node js installed in your pc 

 ###  <img  src="https://cdn3d.iconscout.com/3d/free/thumb/free-nodejs-3d-icon-download-in-png-blend-fbx-gltf-file-formats--javascript-runtime-backend-node-js-logo-coding-lang-pack-logos-icons-7578002.png?f=webp" width="30px" height="30px" >Using Node


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

##  <img  src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png" width="36px" height="36px" >  Using Docker

1. Build an image using the dockerfile
```bash
  docker build -t trivia-challenge:latest .
```

2. Run a new container based on the previous images
```bash
  docker run -d -p 3009:3009   --restart=always trivia-challenge:latest
```

3. Go to [http://localhost:3009/](http://localhost:3009/)





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
