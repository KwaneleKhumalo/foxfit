# Welcome to FitFox

`Thank you for checking this app out. Still under development.`

### Access to the backend
`cd server`
Install Dependencies:
`npm install`

### Modify the .env variables

Use the `example.env` as a guide for your variables. 

**Note: The server will not start without connecting to Mongodb** 

#### Running the Server: 
In the project directory, run: 

`npm run dev`

**Server will Run on port 4000**


##### Server Directory Structure: 

### `Controllers`: Houses primary functions and exports them for routes
### `Routes`: Houses primary routes
### `Middleware`: Houses all your middleware functions
### `Models`: Your schemas live here
### `Utils` : Necessary Utility/Configuration/Helper Functions. The `/server/utils/runApp.js` is responsible for connecting to the db and running the application. 
### `.env` : Environment Variables. Keep all these secret
### `server.js` : Entry File.


###### FRONTEND:

### Access to the Client Side
 `cd frontend` to be in the client.

`Install Dependencies:
`npm install`

`run Frontend`: `npm start` 

`App will run on http://localhost:3000/`

