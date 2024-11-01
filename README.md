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
    
Login Page
    - create `src/Login.jsx` file
    - login form with email and password fields
        - use `useState` to manage the email and password
        - in input fields, use `value` and `onChange` to manage the input values
        - onChange={(e) => setEmail(e.target.value)}
        - add an event handler to the login button
        - call the `handleLogin` function
    - use axios to send a POST request to the server to login
    - use the `axios` library to make a POST request to the server to login
    - axios.post("http://localhost:3000/login", {email, password}, {withCredentials: true})
    - handle the response and error in the `handleLogin` function
    - to enable cors in the server, add `cors` middleware to the server
        - `npm install cors`
        - `app.use(cors({credentials: true, origin: "http://localhost:5173"}));`
    - to enable cookies in the browser, add `{withCredentials: true}` to the axios request

Redux Toolkit : https://redux-toolkit.js.org/introduction/getting-started
    - install redux toolkit: `npm install @reduxjs/toolkit react-redux`
    - create `src/utils/userSlice.js` file
    - create a slice with `createSlice` function
    - add reducers to the slice
    - export the slice actions and reducer
    - use the slice actions and reducer in the component
    - create a `appStore.js` file to create the redux store
    - in `src/App.jsx` file, import `Provider` from `react-redux` and wrap the entire app with it, passing the `appStore` as a prop
    - use `useDispatch` to dispatch the user actions in the component (to add data to the redux store)
        - dipatch the `addUser` action in the `handleLogin` function after the response is received
        - `const dispatch = useDispatch();`
        - `dispatch(addUser(user));`
    - use `useSelector` to access the user state in the component (to access data from the redux store)
        - in navbar component, access the user state
            - `import { useSelector } from "react-redux";`
        - `const user = useSelector((store) => store.user);`
    - dispatch the `addUser` action in the `handleLogin` function

Refactor the project
    - create `src/utils/constants.js` file to store the API URL and endpoints
    - use the constants in the components instead of the raw URLs and endpoints

Body component
    - fetch the user data from the server using profile/view api call
    - dispatch the addUser action with the user data received from the server
    - display the user data in the navbar
    - if user is not logged in, redirect to login page
    - Other routes should not be accessible if user is not logged in
    - use `useNavigate` hook to navigate to the login page if user is not logged in
        - `const navigate = useNavigate();`
        - `navigate("/login");`

Add error handling in Login component
integrate logout api call in NavBar component

Feed Component
    - fetch the feeds from the server using user/feed api call
    - dispatch the addFeeds action with the feeds data received from the server
    - display the feeds in the feed component
    UserCard Component
        - display the user data in the user card component
        - add accept and reject buttons

Profile Component
    - fetch the user data from the server using profile/view api call
    - dispatch the addUser action with the user data received from the server
    - display the user data in the profile component
    - Create EditProfile component
        - add form fields for the user data
        - use axios to send a PUT request to the server to update the user data
        - use the `axios` library to make a POST request to the server to update the user data
        - axios.put("http://localhost:3000/profile/edit", {userData}, {withCredentials: true})
    
Connections Component
    - fetch the connections from the server using user/connections api call
    - create connectionSlice to manage the connections state
    - add reducers to the slice
    - export the slice actions and reducer
    - use the slice actions and reducer in the component
    - dispatch the addConnections action with the connections data received from the server
    - display the connections in the connections component

Requests Component
    - fetch the requests from the server using user/requests/received api call
    - create requestsSlice to manage the requests state
    - add reducers to the slice
    - export the slice actions and reducer
    - use the slice actions and reducer in the component
    - dispatch the addRequests action with the requests data received from the server
    - display the requests in the requests component

Requests send and review api calls
    - add onclick handlers to the accept and reject buttons in the Requests component
    - use axios to send a POST request to the server to review a request
    - update removeRequests reducer in requestsSlice to remove the request from the redux store
    
    - add onclick handlers to the ignore and interested buttons in the UserCard component
    - use axios to send a POST request to the server to send a request
    - update removeFeeds reducer in feedSlice to remove the feed from the redux store

SignUp page
    - add form fields for the user data
    - use axios to send a POST request to the server to signup
    - use the `axios` library to make a POST request to the server to signup
    - axios.post("http://localhost:3000/signup", {userData}, {withCredentials: true})`