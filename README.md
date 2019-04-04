# cra-express-mysql

This project is an experimentation with full stack configuration of :
NODE, EXPRESS, MYSQL, CREATE REACT APP and development packages.

## Available Scripts

In the client directory, run:

### `npm start`

Runs the React front-end in the development mode.<br>
Open [http://localhost:3000]


In the Server directory, run:

### `npm run dev`

Runs the Express server in the development mode.<br>
Node server runs on [http://localhost:5000]

server.js file contains back-end logic to respond to requests and contains simple SQL queries.

## Issues:
Related to hotloading not working.

Expected: Modify front-end or back end files.
          Save file.
          Nodemon updates the backend
          webpack (preconfigured by create-react-app) updates the front-end
          
          
          
### Reproduce/investigate:

1) In terminal: 
                Run the command "npm run dev" from the server folder.
                Run the command "npm start" from the client folder.
                
2) Attempt to modify front-end code in client/src/App.js

3) Save file nothing happens

4) Refresh browser. The changes in code appear on the page. 

  The console returns these errors:
        
  "Proxy error: Could not proxy request /sockjs-node/574/exhbqd0m/websocket from localhost:3000 to http://localhost:5000/.
  See https://nodejs.org/api/errors.html#errors_common_system_errors for more information (ECONNRESET)."
  And in the browser console: 
  "The development server has disconnected. Refresh the page if necessary."</b>

5) This problem causes hotloading to not work for the client (create-react-app preconfiguration) and the server(nodemon).    

6) Modifying back-end logic nodemon restarts and page refresh will load all back-end changes but I expect not to have to refresh the page after saving     the file.

6) If I remove all the logic for the call and request from server/server.js and client/src/App.js the client hotloading returns.
   

