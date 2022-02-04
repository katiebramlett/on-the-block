# Server 

This is our Node.js REST API to interact with our MySQL backend. How the function call stack works is: 

Server.js starts up the server to run on localhost:3000 to listen for API calls. The calls are controlled by routes.js in the Routes folder. 

Routes.js maps the paths to function calls in the controller folder which calls functions in the services folder. The services functions call the functions in the DB folder which makes the queries to the database, the returns then get returned up the call stack. 

To test the API, I recommend installing postman. 

Resources I used to create this:
- https://sodocumentation.net/node-js/topic/10785/route-controller-service-structure-for-expressjs

- https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/

- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes


- Structure inspired by --> https://www.coreycleary.me/project-structure-for-an-express-rest-api-when-there-is-no-standard-way

