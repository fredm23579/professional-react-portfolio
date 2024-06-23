
  <div align="center">
  <h1 align="center">React Portfolio</h1>
  <h3>Codebase for the React Portfolio platform</h3>
  <h3>◦ Developed with the software and tools below.</h3>
  <p align="center"><img src="https://img.shields.io/badge/-React-004E89?logo=React&style=for-the-badge" alt='React\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-React%20Router-004E89?logo=React%20Router&style=for-the-badge" alt='React Router\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Webpack-004E89?logo=Webpack&style=for-the-badge" alt='Webpack\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Babel-004E89?logo=Babel&style=for-the-badge" alt='Babel\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-ESLint-004E89?logo=ESLint&style=for-the-badge" alt='ESLint\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Jest-004E89?logo=Jest&style=for-the-badge" alt='Jest"' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" />
  </p>
  </div>
  
  ---
  ## 📚 Table of Contents
  - [📚 Table of Contents](#-table-of-contents)
  - [🔍 Description](#-description)
  - [🌟 Features](#-features)
  - [📁 Repository Structure](#-repository-structure)
  - [💻 Code Summary](#-code-summary)
  - [🚀 Getting Started](#-getting-started)
  
  ---
  
  
  ## 🔍 Description

 This is a React project with a Node.js backend, using the create-react-app tool for scaffolding. The project includes a README file, a package.json file for managing dependencies, and a package-lock.json file for locking down specific versions of dependencies. The project also includes a src directory with source code for the frontend, including JSX files for components, CSS files for styling, and an index.jsx file for the main entry point of the application. Additionally, there are several other files and directories in the root directory, including a .gitignore file for ignoring certain files and directories during Git commits, a logo.svg file for the project's logo, and a reportWebVitals.js file for reporting web vitals.

---

## 🌟 Features

 React, Node.js, create-react-app, frontend, backend, JSX, CSS, index.jsx, logo.svg, reportWebVitals.js

---

## 📁 Repository Structure

```sh
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── src
    ├── App.css
    ├── App.jsx
    ├── App.test.js
    ├── cmponents
    │   ├── Footer.jsx
    │   ├── Header.jsx
    │   ├── Navigation.jsx
    │   └── Project.jsx
    ├── index.css
    ├── index.jsx
    ├── logo.svg
    ├── pages
    │   ├── AboutMe.jsx
    │   ├── Contact.jsx
    │   ├── Portfolio.jsx
    │   └── Resume.jsx
    ├── reportWebVitals.js
    └── setupTests.js

```
### Links

[Live Netlify App Link](https://snazzy-piroshki-3bf064.netlify.app/)

[GitHub Repo Link](https://github.com/fredm23579/professional-react-portfolio)

### ScreenShots



---

## 💻 Code Summary

<details><summary>\src</summary>

| File | Summary |
| ---- | ------- |
| App.jsx |  The code defines a React component called `App` that renders a header, main content, and footer using the `BrowserRouter` from `react-router-dom`. The main content is divided into routes for different pages, each of which is defined by a `Route` component. |
| App.test.js |  The code tests the primary function of the App component by rendering it and verifying that the Learn React link is present in the document. |
| index.jsx |  The code renders the App component in the root element of the HTML document using ReactDOM. |
| reportWebVitals.js |  The code defines a function `reportWebVitals` that imports and executes the `getCLS`, `getFID`, `getFCP`, `getLCP`, and `getTTFB` functions from the `web-vitals` module, passing in an optional callback function `onPerfEntry` to each of them. |
| setupTests.js |  The code imports the jest-dom library, which provides custom matchers for asserting on DOM nodes in Jest tests. |

</details>

---

<details><summary>\src\cmponents</summary>

| File | Summary |
| ---- | ------- |
| Footer.jsx |  The code defines a React component called Footer that renders a footer element with links to the author's GitHub, LinkedIn, and Stack Overflow profiles. |
| Header.jsx |  The code defines a React component called Header that renders an HTML header element with a h1 tag and a Navigation component. |
| Navigation.jsx |  The code defines a React component called Navigation that renders a navigation menu with links to different pages in the application. |
| Project.jsx |  The code defines a React component called Project that displays a title, image, and links to a deployed application and its GitHub repository. |

</details>

---

<details><summary>\src\pages</summary>

| File | Summary |
| ---- | ------- |
| AboutMe.jsx |  The code defines a React component called AboutMe that renders an HTML section with an image and a paragraph of text. |
| Contact.jsx |  The code defines a React component for a contact form with input fields for name, email, and message, as well as a button to submit the form. |
| Portfolio.jsx |  The code defines a React component called Portfolio that renders a section with a heading and multiple Project components, each representing a project with a title, image, deployed link, and repository link. |
| Resume.jsx |  The code defines a React component called Resume that displays a section with a heading, a download link for a PDF resume, and a list of proficiencies. |

</details>

---

## 🚀 Getting Started

 To get started with this React project, follow these steps:<br>
1. Install the necessary dependencies by running `npm install` or `yarn install` in your terminal.
2. Start the development server by running `npm start` or `yarn start`. This will launch a development server at <http://localhost:3000/>.
3. Open your web browser and navigate to <http://localhost:3000/> to view the application.
4. You can now start developing your React application by modifying the source code in the `src` directory.
5. When you're ready to build the production version of the application, run `npm run build` or `yarn build`. This will create a production-ready build of the application in the `build` directory.
6. To deploy the application to a hosting platform such as GitHub Pages or Netlify, follow the instructions provided by the hosting platform.

That's it! With these steps, you should be able to get started with this React project.


