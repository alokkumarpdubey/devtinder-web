# React + Vite

Create a new React project with Vite.
    - command: `npm create vite@latest devtinder-web -- --template vue`
    - install dependencies: `npm install`
    - run: `npm run dev`
Do initial git set and commit
    - command: `git init`
    - commit: `git commit -m "Initial commit"`
    - add remote: `git remote add origin <remote-url>`
    - push: `git push -u origin main`
Install Tailwind CSS
    - command: `npm install -D tailwindcss postcss autoprefixer`
    - command: `npx tailwindcss init -p`
    - in `tailwind.config.js` file, add the following:
        ```
        content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
        ],
        ```
    - in `src/index.css` file, delete the existing content and add the following:
        ```
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        ```
    - now run the project: `npm run dev`
    - now you can use Tailwind CSS classes in your project
        - example: `<div className="bg-red-500 text-white p-4">Hello World</div>`

Install daisyUI as a Tailwind CSS plugin
    - command: `npm install daisyui`
    - in `tailwind.config.js` file, add the following:
        ```
        plugins: [require("daisyui")],
        ```
Add navbar to `src/App.jsx` file
    - example: https://daisyui.com/components/navbar/

Add footer to `src/App.jsx` file
    - example: https://daisyui.com/components/footer/

Create `src/NavBar.jsx` file and separate the navbar component from `src/App.jsx` file
Create `src/Footer.jsx` file and separate the footer component from `src/App.jsx` file

Routing in React
    - install react-router-dom: `npm install react-router-dom`
    - in `src/App.jsx` file, import `BrowserRouter` from `react-router-dom` and wrap the entire app with it
    - now you can use `Routes` and `Route` components to create routes in your app
        - example: https://reactrouter.com/en/main/start/tutorial
    - Prepare the `Body` component to be the parent of all routes
        - import `Outlet` from `react-router-dom`
        - use `Route` components to define the routes that are children of `Body`

        Body
            NavBar
            Routes=/ => Feed
            Routes=/login => Login
            Routes=/connections => Connections
            Routes=/profile => Profile
            Footer
    
    